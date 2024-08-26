import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";



const EditUnits = () => {





    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /  <span className='text-gray font-semibold'>Settings /</span>
                            <span className='text-gray font-semibold'>Units</span>
                        </div>
                    </div>

                    {/* ----------Start---------- */}


                    <div className=" ">

                        <div className=" mt-[2rem]  md:mt-0  shadow-md md:p-2 bg-white rounded-md antialiased ">

                            <div className="flex items-center justify-between  p-1  ">

                                <div className="md:flex  w-full justify-between ">

                                    <div className="p-2 text-xl font-semibold">Edit</div>

                                    <div className="md:flex md:space-y-0 space-y-2 mx-auto md:mx-0  gap-4 ">

                                        <Link to="/admin/settings/" className="px-3 flex justify-around bg-gray text-white rounded-full gap-2 items-center md:py-1.5 py-1 font-larze hover:bg-black focus:ring-4 focus:outline-none  rounded-md ">
                                            <span className='text-white'>X</span>
                                        </Link>

                                    </div>

                                </div>

                            </div>



                            {/* -----------From-------------------- */}
                            <form action="" method="post">
                                <div className="flex  justify-between  my-1 p-1  ">

                                    <div className="w-full">

                                        <div className="">

                                            {/* ---------------Start---------------------- */}

                                            <div className=" p-3 grid md:grid-cols-3 sm:grid-cols-1 md:gap-5 mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Name<span className='text-success px-1'>*</span>
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
                                                        Code<span className='text-success px-1'>*</span>
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
                                                        Status<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 flex  justify-between items-center ">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Active" type="radio" value="Active" name="Status" className='accent-success h-4 w-4 ' />
                                                            <label for="Active" class="ms-2 text-base font-medium text-gray">Active</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="Inactive" type="radio" value="Inactive" name="Status" className='accent-success h-4 w-4 ' />
                                                            <label for="Inactive" class="ms-2 text-base font-medium text-gray">Inactive</label>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>


                                            {/* ------------------------End--------------------------------- */}



                                            {/* ------------Button----------- */}
                                            <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                    <FaCircleCheck className=' ' />
                                                    <button type="button" >
                                                        Save
                                                    </button>
                                                </div>

                                                <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                    X
                                                    <button type="reset" >
                                                        Clear
                                                    </button>
                                                </div>


                                            </div>
                                            {/* -----------Button End--------------- */}
                                        </div>


                                    </div>
                                </div>
                            </form>
                            {/* -----------From End-------------------- */}




                        </div>



                    </div>

                    {/* ----------End-------------------- */}
                </div>


            </section>


        </>
    )
}

export default EditUnits
