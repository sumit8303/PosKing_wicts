"use client";
import React, { useState, useRef, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";



const OfferAddProducts = () => {

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
                            <span className='text-gray font-semibold'> Products / </span>
                            <span className='text-gray font-semibold'>Create</span>
                        </div>
                    </div>

                    {/* ----------Start Form---------*/}

                        <div className=" ">

                            <div className=" mt-[2rem]  md:mt-0  shadow-xl md:p-2 bg-white rounded-md antialiased ">

                                <div className="flex items-center justify-between  p-1  ">

                                    <div className="md:flex  w-full justify-between ">

                                        <div className="p-2 text-xl font-semibold">Offer</div>


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
                                                        Offer Start Date<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="datetime-local"
                                                        ></input>
                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Offer End date<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="datetime-local"
                                                        ></input>
                                                    </div>
                                                </div>




                                            </div>


{/* ----------------------------------------------------------------- */}

<div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">


<div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Discount Percentage<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                        ></input>
                                                    </div>
                                                </div>



                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Do you want to add in the flash sale?<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 flex  justify-between items-center ">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Yes" type="radio" value="Yes" name="Offer" className='accent-success h-4 w-4 ' />
                                                            <label for="Yes" class="ms-2 text-base font-medium text-gray">Yes</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="No" type="radio" value="No" name="Offer" className='accent-success h-4 w-4 ' />
                                                            <label for="No" class="ms-2 text-base font-medium text-gray">No</label>
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

                                                <Link to="/admin/products/viewproducts" className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
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

export default OfferAddProducts
