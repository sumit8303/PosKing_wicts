import React, { useState } from 'react'
import { BsCardText } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
import { CgCalendarDates } from "react-icons/cg";
import pro from '../images/Navbar/profile.webp'
import { IoMailUnreadOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";



const ViewPOSOrders = () => {


    return (
        <>


            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /
                            <span className='text-gray font-semibold'> POS Orders /</span>
                            <span className='text-gray font-semibold'> View </span>
                        </div>
                    </div>

                    {/* ----------Start View---------*/}

                    <div className=" ">

                        <div className=" mt-[2rem] gap-4 md:mt-0 shadow-md md:p-2 grid md:grid-cols-2 bg-white rounded-md antialiased ">

                            <div className="p-1 text-center md:text-justify  w-full mx-auto">

                                <div className="text-2xl md:flex items-center w-full  py-2"><span >Order ID:</span><span className='ml-3'>#1807244</span><span className='ml-5 border border-green-900 py-0 px-1  text-green-900 fount-bold bg-green-100 rounded-r-full rounded-l-full my-auto text-[.9rem]'>Paid</span></div>
                                <div className="md:flex gap-4 items-center  py-1 text-sm  w-full"><span><CgCalendarDates className='size-4 mx-auto my-1' /></span><span>06:38 PM, 18-07-2024</span></div>
                                <div className="md:flex gap-4 items-center  py-1 text-sm w-full"><span>Payment Type: Cash</span></div>
                                <div className="md:flex gap-4 items-center  py-1 text-sm w-full"><span>Order Type: Pos</span></div>

                            </div>

                            <div className="p-1  text-center flex  w-full ms-auto ">

                                <div className="p-2 md:flex w-full md:flex items-end justify-end text-center gap-5 mx-auto">
                                    <div className=''>
                                        <select className=" px-4 mr-3 flex justify-around   h-11 w-full  gap-2 mb-3 items-center py-1  font-md text-success border border-success  focus:ring-4 focus:outline-none  rounded-md  ">
                                            <option value="Paid" className="bg-white text-black p-1">Paid</option>
                                            <option value="Unpaid" className="bg-white text-black p-1">Unpaid</option>
                                        </select>
                                    </div>

                                    <div className=" px-4 mx-1 flex justify-around   md:w-auto h-11 mb-3 gap-2 items-center py-1  font-md text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                        <button type="submit" >
                                            Print Invoice
                                        </button>
                                    </div>
                                </div>


                            </div>


                        </div>

                    </div>




                    <div className=" ">

                        <div className="  ">

                            <div className="">

                                <div className=" ">

                                    <div className=" mt-[2rem]  md:mt-[2rem]  text-center md:text-justify grid md:grid-cols-2  gap-5 grid-cols-1">


                                        {/* ------Start------ */}

                                        <div className="md:text-justify  gap-4 bg-white p-2 grid h-fit md:grid-cols-1">

                                            <div className="text-xl flex  text-darkgray font-semibold  gap-2 items-center flex rounded-md">

                                                <div>Order Details</div>

                                            </div><hr />

                                            <div className=" ">

                                                <div className="md:flex gap-4 text-darkgray font-semibold px-2 gap-2 md:h-20 items-center rounded-md">

                                                    <div className='relative w-15 md:w-fit md:mx-0 mx-auto my-1'><img src={pro} alt="img" srcset="" className='w-16 rounded relative h-16 ' /> <div className='w-6 h-6 p-1 flex justify-center top-5 right-13 items-center absolute bg-black text-white rounded-full'>1</div> </div>
                                                    <div className="">
                                                        <div>Team Red Hoodie</div>
                                                        <div><span>White</span> | <span> M</span> </div>
                                                        <div>60.00₪</div>
                                                    </div>
                                                </div><hr className='my-2'/>

                                                <div className="md:flex gap-4 text-darkgray font-semibold px-2 gap-2 md:h-20 items-center p-1 rounded-md">

                                                    <div className='relative w-15 md:w-fit md:mx-0 mx-auto my-1'><img src={pro} alt="img" srcset="" className='w-16 rounded relative h-16 ' /> <div className='w-6 h-6 p-1 flex justify-center top-5 right-13 items-center absolute bg-black text-white rounded-full'>1</div> </div>
                                                    <div className="">
                                                        <div>Team Red Hoodie</div>
                                                        <div><span>White</span> | <span> M</span> </div>
                                                        <div>60.00₪</div>
                                                    </div>
                                                </div><hr className='my-2'/>

                                            </div>

                                        </div>
                                        {/* ------End------ */}

                                        <div className="">
                                            {/* ------Start------ */}
                                            <div className="bg-white mb-4 p-5 text-darkgray font-semibold shadow-sm  rounded-md">



                                                <div className=" flex space-y-2 justify-between ">

                                                    <div>Subtotal</div><div>$500.00</div>
                                                </div>
                                                <div className=" flex space-y-2 justify-between">

                                                    <div>Tax Fee</div><div>$0.00</div>
                                                </div>

                                                <div className="flex space-y-2 justify-between ">

                                                    <div>Discount</div><div>$50.00</div>
                                                </div>

                                                <div className=" flex space-y-2 justify-between">

                                                    <div>Total</div><div>$500.00</div>
                                                </div>


                                            </div>                                            {/* ------End------ */}
                                            {/* ------Start------ */}
                                            <div className="bg-white mt-2 p-5 text-darkgray font-semibold shadow-sm  rounded-md">

                                            <div className="text-xl flex   text-darkgray font-semibold my-2 gap-2 items-center flex rounded-md">

                                                <div>Information</div>

                                            </div><hr />

                                            <div className="md:flex gap-4 text-darkgray font-semibold px-2 gap-2 py-4 items-center  rounded-md">

<div className=' w-full md:w-fit md:mx-0 mx-auto '><img src={pro} alt="img" srcset="" className='w-8 shadow-md mx-auto my-2 md:mx-0 md:my-0 rounded-full relative h-8 ' /> </div>
<div className="flex justify-center items-center">
    <div>Team Red Hoodie</div>
</div>
</div><hr className='my-2'/>


<div className="md:flex  space-y-2 justify-between  ">

<div className=''><IoMailUnreadOutline className='size-5 flex mx-auto md:mx-0 justify-center items-center'/></div><div>walkingcustomer@example.com</div>
</div>

<div className=" md:flex space-y-2 justify-between">

<div className=''><BsTelephone className='size-5 flex mx-auto md:mx-0 justify-center items-center'/></div><div>+880125444455</div>
</div>


                                            </div>
                                            {/* ------End------ */}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ----------End View---------*/}

                </div>
            </section>



        </>
    )
}

export default ViewPOSOrders
