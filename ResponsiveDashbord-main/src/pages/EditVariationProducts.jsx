"use client";
import React, { useState, useRef, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";



const EditVariationProducts = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        setIsDropdownOpen(true);
    };

    const handleBlur = () => {
        // Delay hiding the dropdown to allow clicking on an option
        setTimeout(() => setIsDropdownOpen(false), 200);
    };

    const handleFocus = () => {
        setIsDropdownOpen(true);
    };

    const handleClick = (option) => {
        setSearchTerm(option);
        setIsDropdownOpen(false);
    };


    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /
                            <span className='text-gray font-semibold'> Purchase / </span>
                            <span className='text-gray font-semibold'>Edit</span>
                        </div>
                    </div>

                    {/* ----------Start Form---------*/}

                        <div className=" ">

                            <div className=" mt-[2rem]  md:mt-0  shadow-xl md:p-2 bg-white rounded-md antialiased ">

                                <div className="flex items-center justify-between  p-1  ">

                                    <div className="md:flex  w-full justify-between ">

                                        <div className="p-2 text-xl font-semibold">Variation</div>


                                    </div>




                                </div>

                                <hr className='my-2' />
                                {/* ---------------------------------------------------- */}


                                {/* -----------From-------------------- */}

                                <div className="flex  justify-between  my-1 p-1  ">

                                    <div className="w-full">

                                    <form action="" method="post">
                                        <div className="">

                                            {/* ---------------Start---------------------- */}

                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Color<span className='text-success px-1'>*</span>
                                                    </label>

                                                    <div className="mt-2">
                                                    <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                      <option selected className='text-gray-400 '>--</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                                                    </div>
                                                    
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Price<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                        ></input>
                                                    </div>
                                                </div>




                                            </div>


{/* ----------------------------------------------------------------- */}

<div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

<div>
    <label htmlFor="" className="text-base font-medium text-gray">
        {' '}
        Size<span className='text-success px-1'>*</span>
    </label>

    <div className="mt-2">
    <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
<option selected className='text-gray-400 '>--</option>
<option value="US">United States</option>
<option value="CA">Canada</option>
<option value="FR">France</option>
<option value="DE">Germany</option>
</select>
    </div>
    
</div>

<div>
    <label htmlFor="" className="text-base font-medium text-gray">
        {' '}
        SKU<span className='text-success px-1'>*</span>
    </label>
    <div className="mt-2">
        
    <div className=' flex justify-around  w-full  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 '>



<div className="relative  mx-auto  flex justify-around w-full   ">
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder=""
            className="w-full p-2 "
        />
        <div
            className={`absolute w-full mt-10 z-10 border border-gray-300 outline-0 rounded-md bg-white shadow-lg ${
                isDropdownOpen ? 'block' : 'hidden'
            }`}
        >
            <ul className="list-none p-0 m-0 ">
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(option)}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    </div>

    <svg class="w-4 h-4 m-2 items-center text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
        </svg>                                          
                                          
                                            </div>

    </div>
</div>




</div>





{/* -------------------------------------------------------------------------------- */}








                                            {/* ------------------------End--------------------------------- */}



                                            {/* ------------Button----------- */}
                                            <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                    <FaCircleCheck  className=' ' />
                                                    <button type="submit" >
                                                    Save
                                                    </button>
                                                </div>

                                                <Link to="/admin/products/viewproducts/variation" className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                    X
                                                    <button type="reset" >
                                                        Clear
                                                    </button>
                                                </Link>


                                            </div>
                                            {/* -----------Button End--------------- */}
                                        </div>
</form>

                                    </div>
                                </div>



                                {/* -----------From End-------------------- */}


                            </div>

                        </div>
                    
                  
                    {/* ----------End Form---------- */}

                </div>

            </section>

        </>
    )
}

export default EditVariationProducts
