"use client";
import React, { useState, useRef, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";



const AddPayment = () => {

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
                        <span className='text-gray font-semibold'>Create</span>
                    </div>
                </div>

                {/* ----------Start Form---------*/}

                <div className=" ">

                    <div className=" mt-[2rem]  md:mt-0  shadow-md md:p-2 bg-white rounded-md antialiased ">

                        <div className="flex items-center justify-between  p-1  ">

                            <div className="md:flex  w-full justify-between ">

                                <div className="p-2 text-xl font-semibold">Add Payment</div>


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
                                                    Date<span className='text-success px-1'>*</span>
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="date"
                                                    ></input>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray">
                                                    {' '}
                                                    Reference No<span className='text-success px-1'>*</span>
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="text"
                                                    ></input>
                                                </div>
                                            </div>




                                        </div>

                                        {/* ------------------------------------- */}

                                        <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">


                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray">
                                                    {' '}
                                                    Amount<span className='text-success px-1'>*</span>
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
                                                    Payment Method<span className='text-success px-1'>*</span>
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


                                        </div>

                                        {/* ----------------------------------------- */}

                                        <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray">
                                                    {' '}
                                                    Attachments<span className='text-success px-1'>*</span>
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="file"
                                                    ></input>
                                                </div>
                                            </div>

                                        </div>



                                        {/* ------------------------End--------------------------------- */}



                                        {/* ------------Button----------- */}
                                        <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                            <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                <FaCircleCheck className=' ' />
                                                <button type="submit" >
                                                    Save
                                                </button>
                                            </div>

                                            <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                x
                                                <button type="reset" >
                                                    Clear
                                                </button>
                                            </div>


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

export default AddPayment
