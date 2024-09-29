
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import axios from 'axios';

const ProductAttributesTable = () => {

   const [data, setData] = useState([])
   useEffect(()=>{
    getProductAttribute()
   }, [])

   async function getProductAttribute() {
    const result = await axios.get('http://localhost:4000/api/gretallProductAttributes')
    setData(result.data)
   }


   async function  deleteProductAttribute(_id) {
    const result = confirm("Are you sure to delete")
    if(result === true){
        await axios.delete(`http://localhost:4000/api/deleteProductAttributesColor/${_id}`)
        getProductAttribute()
    }
  }
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    // Calculate the start and end index of the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Get the current page's data
    const currentData = data.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / rowsPerPage);


    return (
        <>
            <div>
                <div className="  ">

                    <div className=" md:flex justify-between  ">

                        <div className="p-3 text-xl font-semibold">Product Attributes

                        </div>


                        <div className="p-3 md:flex gap-3  ms-auto space-y-3 md:space-y-0  ">

                            <Link to="/admin/settings/addProductAttributes" className="px-3  flex justify-around md:w-fit  w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                <CiCirclePlus className='size-5 ' />
                                <button type="submit" >
                                    Add Product Attributes
                                </button>
                            </Link>


                        </div>

                    </div>

                    <hr />


                    {/* ----------------------Table------------------------------- */}



                    <div className="  text-base font-medium text-darkgray grid md:grid-cols-1 md:gap-2 xl:grid-cols-1 w-full rounded-md  mx-auto ">

                        <div class="relative overflow-auto ">
                            <table class="w-full  text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs border-b text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className=''>
                                        <th scope="col" class="px-4 py-3">
                                            Name
                                        </th>
                                        <th scope="col" class="px-4 py-3 text-center">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {currentData.map((row) => (
                                        <tr key={row.id} className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="py-2 px-4 border-b">{row.name}</td>
                                            <td class="px-6 py-4 flex gap-2 justify-center">
                                                <Link to="/admin/settings/viewProductAttributes" className='text-lightsuccess pointer'><GrFormView size={20} /></Link>
                                                <Link to="/admin/settings/editProductAttributes"><FaRegEdit className='text-green-400 pointer' size={20} /></Link>
                                                <Link onClick={()=>deleteProductAttribute(row._id)}><MdOutlineDeleteOutline className='text-red-400 pointer' size={20}/></Link> 
                                            </td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                        <div className="flex h-11 justify-center mt-4">
                            <button
                                className="px-4 py-1  mx-1 bg-success text-white rounded "
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span className="px-4  py-2">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className="px-4 py-1 mx-1 bg-success text-white rounded "
                                onClick={() => setCurrentPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>

                    </div>
                    {/* -----------Table End--------------------------- */}





                </div>
            </div>
        </>
    )
}

export default ProductAttributesTable
