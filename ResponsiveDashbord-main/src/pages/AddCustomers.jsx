"use client";
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import axios from 'axios';



const AddCustomers = () => {

    const navigation = useNavigate()

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [phoneNumber, setPhoneNumber] = useState('');
    let [status, setStatus] = useState('');
    let [image, setImage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = new FormData();
        user.append('image', image);
        user.append('name', name);
        user.append('email', email);
        user.append('password', password);
        user.append('confirmPassword', confirmPassword);
        user.append('phoneNumber', phoneNumber);
        user.append('status', status);


        try {
            await axios.post('http://localhost:4000/api/addCustomer', user, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigation("/admin/customers")
        } catch (error) {
            alert('Failed to upload customer.');
        }
    }


    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3'];



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
                            <span className='text-gray font-semibold'> Customers</span>
                        </div>
                    </div>

                    {/* ----------Start Form---------*/}

                    <div className=" ">

                        <div className=" mt-[2rem]  md:mt-0  shadow-md md:p-2 bg-white rounded-md antialiased ">

                            <div className="flex items-center justify-between  p-1  ">

                                <div className="md:flex  w-full justify-between ">

                                    <div className="p-2 text-xl font-semibold">Create
                                    </div>


                                </div>




                            </div>

                            <hr className='my-2' />
                            {/* ---------------------------------------------------- */}


                            {/* -----------From-------------------- */}

                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className="flex  justify-between  my-1 p-1  ">

                                    <div className="w-full">

                                        <div className="">

                                            {/* ---------------Start---------------------- */}

                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-3  mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Name<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='name'
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Email<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="email"
                                                            name='email'
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Phone<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="number"
                                                            name='phoneNumber'
                                                            value={phoneNumber}
                                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* ------------------------------------- */}

                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-3  mx-auto ">


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Status<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 flex  justify-between items-center ">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Active" type="radio" value="Active" name="status"  onChange={(e)=>setStatus(e.target.value)}className='accent-success h-4 w-4 ' />
                                                            <label for="Active" class="ms-2 text-base font-medium text-gray">Active</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="Inactive" type="radio" value="Inactive" name="status"  onChange={(e)=>setStatus(e.target.value)}className='accent-success h-4 w-4 ' />
                                                            <label for="Inactive" class="ms-2 text-base font-medium text-gray">Inactive</label>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Password<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='password'
                                                            value={password}
                                                            onChange={(e)=>setPassword(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Password Confirmation<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='confirmPassword'
                                                            value={confirmPassword}
                                                            onChange={(e)=>setConfirmPassword(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>


                                            </div>



                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-3  mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Image<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="file"
                                                            accept='image/*'
                                                            onChange={(e)=>setImage(e.target.files[0])}
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

                                                <Link to="" className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                    X
                                                    <button type="reset" >
                                                        Clear
                                                    </button>
                                                </Link>


                                            </div>
                                            {/* -----------Button End--------------- */}
                                        </div>


                                    </div>
                                </div>
                            </form>




                            {/* -----------From End-------------------- */}


                        </div>

                    </div>


                    {/* ----------End Form---------- */}

                </div>

            </section>

        </>
    )
}

export default AddCustomers
