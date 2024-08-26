import React, { useState } from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import Calendar from '../../../components/Calendar';
import SimpleAreaChart from './SimpleAreaChart';

const Sales = () => {


    const [open, Setopen] = useState(false)

    const toggleMenu = () => {
        Setopen(!open)
    }

    return (
        <>

            <section>
                <div className=" ">

                    <div className=" border shadow-md p-2 bg-white rounded-md antialiased ">

                        <div className="flex items-center justify-between my-1 p-1  ">


                            <div className="">
                                <div className=" p-2 text-xl  font-semibold  ">
                                    Sales Summary
                                </div>
                            </div>


                            <div className="relative ">

                                <button onClick={toggleMenu} className="text-success border border-1 border-success px-5 rounded-md w-full bg-white hover:bg-gray-400 text-gray-800 ">
                                    <div className="flex justify-between  ">
                                        <div className='p-2 md:text-md text-sm'>01 Jul 2024 - 31 Jul 2024</div>
                                        <div className="fill-current md:text-md text-sm flex justify-between items-center"><MdOutlineCalendarMonth /></div>
                                    </div>

                                </button>

                                {
                                    open && <div className=' text-success  z-10 absolute right-0 mt-2 '>
                                        <Calendar />
                                    </div>
                                }
                            </div>

                        </div>
<hr />
{/* ---------------------------------------------------- */}

                        <div className="flex  justify-between  my-1 p-1  ">

                            <div className="w-full flex bg-white ">

                                <div className=" text-xl  p-2">
                                    <div className='flex gap-2 items-center'>
                                        <div className=" "><MdBarChart /></div>
                                        <span className='flex  '>$
                                            <span className='flex items-center justify-center '>169.00</span>
                                        </span>
                                    </div>
                                    <div className='flex justify-between text-sm text-zinc-700'>Total Sales</div>
                                </div>


                                <div className="  p-2 text-xl">
                                    <div className='flex gap-2 items-center'>
                                        <div className=" "><MdBarChart /></div>
                                        <span className='flex  '>$
                                            <span className='flex items-center justify-center '>5.63</span>
                                        </span>
                                    </div>
                                    <div className='flex justify-between text-sm text-zinc-700'>Avg Sales Per Day</div>
                                </div>



                            </div>



                        </div>

<div className="flex justify-between h-65 my-1 p-1 ">

<SimpleAreaChart/>


</div>

                    </div>



                </div>
            </section>

        </>
    )
}

export default Sales
