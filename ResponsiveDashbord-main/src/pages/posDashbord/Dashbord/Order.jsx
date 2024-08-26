import React, { useState } from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import Calendar from '../../../components/Calendar';
import SimpleAreaChart from './SimpleAreaChart';
import SimpleBarChart from './SimpleBarChart';


const Order = () => {
  

    const [open, Setopen] = useState(false)

    const order = () => {
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
                                Order Stats
                                </div>
                            </div>


                            <div className="relative ">

                                <button onClick={order} className="text-success border border-1 border-success px-5 rounded-md w-full bg-white hover:bg-gray-400 text-gray-800 ">
                                    <div className="flex justify-between  ">
                                        <div className='p-2 md:text-md text-sm'>01 Jul 2024 - 31 Jul 2024</div>
                                        <div className="fill-current md:text-md text-sm flex justify-between items-center"><MdOutlineCalendarMonth /></div>
                                    </div>

                                </button>

                                {
                                    open && <div className=' text-success z-10 absolute right-0 mt-2 '>
                                        <Calendar />
                                    </div>
                                }
                            </div>

                        </div>

<hr />
{/* ---------------------------------------------------- */}

                        <div className="flex  justify-between  my-1 p-1  ">


                        </div>

<div className="flex justify-between h-80 my-1 p-1">

<SimpleBarChart/>


</div>

                    </div>



                </div>
            </section>



    </>
  )
}

export default Order
