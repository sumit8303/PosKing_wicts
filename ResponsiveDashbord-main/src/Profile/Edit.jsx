import React from 'react'
import { LuKeyRound } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";

const Edit = () => {
    return (
        <>

        <section>
            <div className=" sm:w-[640px] md:w-[768px]  lg:w-[72rem] bg-neutral-50  absolute right-0 top-[4.4rem]">
                <div className="rounded-lg text-neutral-600 mx-auto text-md font-normal mt-5 w-[66rem] p-5 relative  ">

                    <div className="text-xl">Dashboard<span className='text-gray px-1'>/</span><span className='text-gray px-1'>Edit Profile</span></div>

                </div>


                <div className="rounded-md text-neutral-600 mx-auto text-md bg-white font-normal mt-5  w-[66rem] p-5 relative  ">


                    <div className=" ">

                        <div className="text-[1.2rem]">Edit Profile</div>

                        <div className=" p-3 mt-4 flex gap-5">

                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray">
                                    {' '}
                                    Name<span className='text-success px-1'>*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-96 rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Your name"
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
                                        className="flex h-10  w-96 rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                    ></input>
                                </div>
                            </div>


                        </div>

                        <div className='p-3 '>
                                <label htmlFor="" className="text-base font-medium text-gray">
                                    {' '}
                                    Number<span className='text-success px-1'>*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-96 rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Contact number"
                                    ></input>
                                </div>
                            </div>

<div className="p-3">
<button class="px-5 bg-success text-white flex justify-between gap-3 items-center py-1.5  font-larze text-success border border-success  focus:ring-4 focus:outline-none  rounded-md  ">
<FaCheckCircle className=''/>
  <span>Save</span>
</button> 
</div>
                    
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Edit
