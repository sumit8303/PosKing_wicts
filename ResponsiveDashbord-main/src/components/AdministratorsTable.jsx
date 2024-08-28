
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


// Dummy data for products


const ITEMS_PER_PAGE = 3;

const AdministratorsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([])

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = data.slice(startIndex, endIndex);


  // Calculate total pages
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);


  // Change page handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    getEmployee();
  }, [])
  async function getEmployee() {
    let result = await axios.get("http://localhost:4000/api/getAllAdministrator");
    console.log(result.data)
    setData(result.data);
   
  }


  async function deleteAdministrator(_id) {
    const result = confirm("Are you sure to delete")
    if(result === true){
      await axios.delete(`http://localhost:4000/api/deleteAdministrator/${_id}`)
      getEmployee()
    }
  }
  return (

<section>  
    <div className='bg-lightsuccess relative rounded-md overflow-x-scroll   '>
      <table className=' text-sm w-full  table-auto text-left text-gray-500'>
        <thead className='text-xs  text-white text-gray-700 uppercase bg-gray-300'>
          <tr className=''>
            <th scope="col" class="px-6 py-3" >Name</th>
            <th scope="col" class="px-6 py-3" >Email</th>
            <th scope="col" class="px-6 py-3" >Phone</th>
            <th scope="col" class="px-6 py-3" >Status</th>
            <th scope="col" class="px-6 py-3" >Action</th>
          </tr>
        </thead>
        <tbody className=' '>
          {currentProducts.map((data) => (
            <tr className='bg-white border-b'>
              <td className='px-6 py-4'>{data.name}</td>
              <td className='px-6 py-4'>{data.email}</td>
              <td className='px-6 py-4'>{data.phoneNumber}</td>
              <td className='px-6 py-4'>{data.status}</td>
              <td className='inline-flex px-6 gap-2 py-4'><Link to={`/admin/administrators/viewadministrators/${data._id}`} className='text-lightsuccess pointer'><GrFormView size={20}/></Link>
               <Link to={`/admin/administrators/editadministrators/${data._id}`}><FaRegEdit className='text-green-400 pointer' size={20}/></Link> 
               <Link onClick={()=>deleteAdministrator(data._id)}><MdOutlineDeleteOutline className='text-red-400 pointer' size={20}/></Link> 
               </td>
            </tr>
          ))}
        </tbody>
      </table>




      <div className="flex w-full p-3 justify-between">
          <div className='text-white'>
            {`Showing ${startIndex + 1} to ${endIndex} of ${data.length} entries`}
          </div>

          <div className="pagination flex items-center justify-center">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
              className="mx-1 text-sm font-semibold text-gray-900">
              <span className="hidden lg:block">&larr; Previous</span>
              <span className="block lg:hidden">&larr;</span>
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${index + 1 === currentPage ? 'active bg-success text-white' : ''}`}
              >
                {index + 1}
              </button>
            ))}

            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
              className="mx-2 text-sm font-semibold text-gray-900">
              <span className="hidden lg:block">Next &rarr;</span>
              <span className="block lg:hidden">&rarr;</span>
            </button>
          </div>
        </div>





    </div>
    </section>

  );
};

export default AdministratorsTable;