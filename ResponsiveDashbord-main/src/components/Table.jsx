
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 3;

const Table = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  // Fetch data from API
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let result = await axios.get("http://localhost:4000/api/getproductFilter");
    setProducts(result.data);
    console.log(result.data)
    }


  

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;


  async function deleteProduct(id){
    let result = confirm("Are you sure to delete")
    if(result == true){
        await axios.delete(`http://localhost:4000/api/deleteProduct/${id}`)
        getData()
    }
}
  

  return (
    <section>
      <div className='bg-lightsuccess relative rounded-md overflow-x-scroll'>
        <table className='text-sm w-full table-auto text-left text-gray-500'>
          <thead className='text-xs text-white text-gray-700 uppercase bg-gray-300'>
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Buying Price</th>
              <th scope="col" className="px-6 py-3">Selling Price</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className='bg-white border-b'>
                <td className='px-6 py-4'>{product.productName}</td>
                <td className='px-6 py-4'>{product.category}</td>
                <td className='px-6 py-4'>{product.buyingprice}</td>
                <td className='px-6 py-4'>{product.sellingprice}</td>
                <td className='px-6 py-4'>{product.status}</td>
                <td className='inline-flex px-6 gap-2 py-4'>
                 <Link to={`/admin/products/viewproducts/${product._id}` }className='text-lightsuccess pointer'><GrFormView size={20}/></Link>

               <Link to={`/admin/products/editproducts/${product._id}`}><FaRegEdit className='text-green-400 pointer' size={20}/></Link> 
               
               <Link onClick={()=>deleteProduct(product._id)}><MdOutlineDeleteOutline className='text-red-400 pointer' size={20}/></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex w-full p-3 justify-between">
          <div className='text-white'>
            {`Showing ${startIndex + 1} to ${endIndex} of ${products.length} entries`}
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

export default Table;
