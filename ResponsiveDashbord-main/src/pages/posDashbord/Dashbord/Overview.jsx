import React from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { IoCube } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";


const Overview = () => {
  

    return (
    <>

<section>

<div className=" grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto text-white md:space-y-0 space-y-2 text-md antialiased font-normal  p-5 ">

{/* ---------------------------------------------------------------------------------------------------------- */}
 
<div className="flex  p-3 bg-[#fd0063]  justify-around rounded-md">
            <div className="bg-white border  w-10 h-10 flex justify-center my-2 items-center  rounded-full ">
                <div className="p-2 bg-red-900 rounded-full w-8 h-8 flex  justify-center  items-center  "><FaDollarSign className='' /></div>
            </div>
            <div className=" ">
                <div className="text-xl ">Total Earnings</div>
                <div className="text-md ">$169.00</div>
            </div>
        </div>


{/* ---------------------------------------------------------------------------------------------------------- */}


<div className="flex bg-[#f23e14] p-3 justify-around rounded-md">
            <div className="bg-white border  w-10 h-10 flex justify-center my-2 items-center  rounded-full ">
                <div className="p-2 bg-red-900 rounded-full w-8 h-8 flex  justify-center  items-center"><IoCube className=''/></div>
            </div>
            <div className=" ">
                <div className="text-xl ">Total Earnings</div>
                <div className="text-md ">$169.00</div>
            </div>
        </div>


{/* --------------------------------------------------------------------------------------------------------------- */}

<div className="flex bg-[#6a45fe] p-3 justify-around rounded-md">
            <div className="bg-white border  w-10 h-10 flex justify-center my-2 items-center  rounded-full ">
                <div className="p-2 bg-red-900 rounded-full w-8 h-8 flex  justify-center  items-center"><FaUser className='' /></div>
            </div>
            <div className=" ">
                <div className="text-xl ">Total Earnings</div>
                <div className="text-md ">$169.00</div>
            </div>
        </div>


{/* ---------------------------------------------------------------------------------------------------------------------------- */}

<div className="flex bg-[#426eff] p-3 justify-around rounded-md">
            <div className="bg-white border  w-10 h-10 flex justify-center my-2 items-center  rounded-full ">
                <div className="p-2 bg-red-900 rounded-full w-8 h-8 flex  justify-center  items-center "><IoBagHandle className='' /></div>
            </div>
            <div className=" ">
                <div className="text-xl ">Total Earnings</div>
                <div className="text-md ">$169.00</div>
            </div>
        </div>


{/* --------------------------------------------------------------------------------------------------------------------------- */}

</div>


</section>



    </>
  )
}

export default Overview
