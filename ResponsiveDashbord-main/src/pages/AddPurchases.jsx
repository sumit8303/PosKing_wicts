"use client";
import React, { useState, useRef, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";



const AddPurchases = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);


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
        setShowModal(true)
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

                                    <div className="p-2 text-xl font-semibold">Purchase</div>


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
                                                        Status<span className='text-success px-1'>*</span>
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

                                            {/* ----------------------------------------- */}

                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Supplier<span className='text-success px-1'>*</span>
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

                                            {/* -------------------------------------------------------------------------------- */}

                                            <div className="  mt-1 grid md:grid-cols-2 md:gap-2 xl:grid-cols-1 w-full rounded-md border border-gray mx-auto ">

                                                <div className='bg-lightsuccess p-3 text-success'>
                                                    Please select these before adding any product
                                                </div>


                                                <div className="m-2">

                                                    <div className=' flex justify-around  w-full  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 '>

                                                        <svg class="w-4 h-4 m-2 items-center text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                                                        </svg>

                                                        <div className="relative  mx-auto  flex justify-around w-full   ">
                                                            <input
                                                                type="text"
                                                                value={searchTerm}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                onFocus={handleFocus}
                                                                placeholder="Search..."
                                                                className="w-full p-2 "
                                                            />
                                                            <div
                                                                className={`absolute w-full mt-10 z-10 border border-gray-300 outline-0 rounded-md bg-white shadow-lg ${isDropdownOpen ? 'block' : 'hidden'
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
                                                    </div>

                                                </div>

                                            </div>



                                            <div className=' mt-3 p-3 text-base font-medium text-gray '>
                                                Products
                                            </div>

                                            <div className="  text-base font-medium text-darkgray grid md:grid-cols-1 md:gap-2 xl:grid-cols-1 w-full rounded-md border border-gray mx-auto ">

                                                <div class="relative overflow-x-auto">
                                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                            <tr>
                                                                <th scope="col" class="px-6 py-3">
                                                                    Product
                                                                </th>
                                                                <th scope="col" class="px-6 py-3">
                                                                    Unit Cost
                                                                </th>
                                                                <th scope="col" class="px-6 py-3">
                                                                    Quantity
                                                                </th>
                                                                <th scope="col" class="px-6 py-3">
                                                                    Discount
                                                                </th>
                                                                <th scope="col" class="px-6 py-3">
                                                                    Taxes
                                                                </th>
                                                                <th scope="col" class="px-6 py-3">
                                                                    SubTotal
                                                                </th>
                                                                <th scope="col" class="px-6 py-3 text-center">
                                                                    Actions
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    Total
                                                                </th>
                                                                <td class="px-6 py-4">

                                                                </td>
                                                                <td class="px-6 py-4">
                                                                    0.00
                                                                </td>
                                                                <td class="px-6 py-4">
                                                                    0.00
                                                                </td>
                                                                <td class="px-6 py-4">
                                                                    0.00
                                                                </td>
                                                                <td class="px-6 py-4">
                                                                    0.00
                                                                </td>
                                                                <td class="px-6 py-4 flex gap-2 justify-center">
                                                                    <span className='text-lightsuccess pointer'><GrFormView size={20} /></span>
                                                                    <span><FaRegEdit className='text-green-400 pointer' size={20} /></span>
                                                                    <span><MdOutlineDeleteOutline className='text-red-400 pointer' size={20} /></span>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>


                                            </div>



                                            <div className=" p-3 grid md:grid-cols-1 md:gap-5 xl:grid-cols-1  mx-auto ">
                                                {/* -------------------------Text Area Start--------------------------------- */}

                                                <div className=''>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Note<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 ">

                                                        <textarea placeholder='Insert content here...' className="resize-none w-full rounded-md overflow-hidden scroll-smooth overflow-y-scroll flex md:h-60 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"></textarea>

                                                    </div>
                                                </div>


                                                {/* -------------------------Text Area End--------------------------------- */}
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





            {showModal && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="mx-auto w-6/7 lg:w-4/6  h-4/5 lg:h-auto px-4 md:px-8 ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                {/*body*/}
                                <section className="overflow-hidden">
                                    <div className="">
                                        {/*header*/}
                                        <div className="flex items-start p-4 w-full justify-between border-b border-solid border-blueGray-200 rounded-l">
                                            <h3 className="text-2xl mb-2 font-semibold">
                                                {searchTerm}
                                            </h3>
                                            <button
                                                className=" mb-2 p-1 ml-auto bg-transparent shadow-xl border-0 bg-red-500 rounded-full text-black flex justify-center items-center float-right  leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className=" text-red-500 m-[0.1px] h-6 w-6 bg-white flex justify-center items-center rounded-full  text-md">
                                                    X
                                                </span>
                                            </button>
                                        </div>


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
                                                                    Tax<span className='text-success px-1'>*</span>
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
                                                                    Quantity<span className='text-success px-1'>*</span>
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
                                                                    Discount<span className='text-success px-1'>*</span>
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
                                                                    Unit Cost<span className='text-success px-1'>*</span>
                                                                </label>
                                                                <div className="mt-2">
                                                                    <input
                                                                        className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                        type="text"
                                                                    ></input>
                                                                </div>
                                                            </div>



                                                        </div>

                                                        {/* ----------------------------------------------------------- */}

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
                                </section>
                                {/*footer*/}

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}









        </>
    )
}

export default AddPurchases
