"use client";
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import pro from '../images/Navbar/profile.webp'
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";




const ProductsVariation = () => {

    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /
                            <span className='text-gray font-semibold'>Products /</span>
                            <span className='text-gray font-semibold'> View /</span>
                            <span className='text-gray font-semibold'> Variation </span>
                        </div>
                    </div>

                    {/* ----------Start View---------*/}

                        <div className=" ">

                            <div className=" mt-[2rem]  md:mt-0 shadow-xl md:p-2 bg-white rounded-md antialiased ">

                                <div className="flex items-center justify-between  p-1  ">

                                    <div className=" md:flex justify-between w-full ">

                                        <div className="p-3 text-xl font-semibold">Variation</div>

                                        <div className="p-3 md:flex gap-3  ms-auto space-y-3 md:space-y-0  ">

<Link to="/admin/products/viewproducts/variation/addvariation" className="px-3  flex justify-around md:w-fit  w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
    <FaCircleCheck  className=' ' />
    <button type="submit" >
   Add Variation
    </button>
</Link>

<Link to="/admin/products/viewproducts" className="px-3  flex justify-around md:w-fit w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
    {/* <FaCircleCheck  className=' ' /> */}
    <div>X</div>
    <button type="submit" >
    Cancel
    </button>
</Link>

</div>

                                    </div>




                                </div>

                                <hr className='my-2' />
                                {/* ---------------------------------------------------- */}


                                {/* ------------------------------- */}
      



 <div className="  ">



 </div>

                                <div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
        <thead class="text-xs  text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Color
                </th>
                <th scope="col" class="px-6 py-3">
                Size 
                </th>
                <th scope="col" class="px-6 py-3">
                Price 
                </th>
                <th scope="col" class="px-6 py-3">
                Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                White
                </th>
                <td class="px-6 py-4">
                S
                </td>
                <td class="px-6 py-4">
                100.000000
                </td>
                <td className='inline-flex px-6 gap-2 py-4'>
               <Link to="/admin/products/viewproducts/variation/editvariation"><FaRegEdit className='text-green-400 pointer' size={20}/></Link> 
               <Link to=""><MdOutlineDeleteOutline className='text-red-400 pointer' size={20}/></Link> 
               </td>
            </tr>

        </tbody>
    </table>
</div>




                                {/* -----------From End-------------------- */}


                            </div>

                        </div>

                    {/* ----------End View---------- */}

                </div>

            </section>

        </>
    )
}

export default ProductsVariation
