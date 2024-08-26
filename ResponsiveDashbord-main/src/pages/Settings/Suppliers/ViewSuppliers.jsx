import React, { useState } from 'react'
import { BsCardText } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
import pro from '../../../images/Navbar/profile.webp'
import { IoIosPerson } from "react-icons/io";
import { GrSecure } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { TiImage } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";



const ViewSuppliers = () => {

    const [selectImage, setSelectImage] = useState()


    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    return (
        <>


            <section>
                <div className=" md:mt-8 mt-4 text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /
                            <span className='text-gray font-semibold'> Suppliers /</span>
                            <span className='text-gray font-semibold'> View </span>
                        </div>
                    </div>

                    {/* ----------Start View---------*/}

                    <div className=" ">

                        <div className="  shadow-md md:p-2 bg-white rounded-md antialiased ">

                            <div className="md:flex  w-full gap-3 justify-start  items-center ">

                                <div className="">

                                    <div className=" mb-1 md:mb-0 px-2 rounded  text-center  p-2">

                                        <img src={pro} alt="" srcset="" className='shadow-sm  md:w-30 md:h-30 rounded  object-fit ' />

                                    </div>

                                </div>



                                    <div className=" w-full  md:h-30">
                                        <div className="mb-2 text-center md:text-justify  fount-bold capitalize text-2xl">Md. Smith Pio</div>
                                        <div className="py-2  ">
                                            <div className="bg-orange-100 w-fit text-orange-900 text-sm md:text-md mx-auto md:mx-0 text-black capitalize w-15 text-center rounded text-sm p-1">
                                                Customer
                                            </div>
                                        </div>
                                    </div>




                            </div>

                        </div>

                    </div>




                    <div>
                                    <div className="  bg-white md:mt-8 mt-4">
                                        <div className=" text-xl font-semibold px-5  py-3 w-full">Basic Information</div><hr />

                                        <div className="grid md:grid-cols-2  py-3 px-5 gap-3 space-x-4 ">
                                            <div className="md:flex justify-between">
                                                <div className="">Company</div>
                                                <div className="text-gray">Camper Company
                                                </div>
                                            </div>
                                            <div className="md:flex justify-between">
                                                <div className="">Email</div>
                                                <div className="text-gray">smith@example.com
                                                </div>
                                            </div>
                                            <div className="md:flex justify-between">
                                                <div className="">Phone</div>
                                                <div className="text-gray">+8801254875855</div>
                                            </div>
                                            <div className="md:flex justify-between">
                                                <div className="">City</div>
                                                <div className="text-gray">Dhaka</div>
                                            </div>
                                            <div className="md:flex justify-between">
                                                <div className="">State</div>
                                                <div className="text-gray">Dhaka District
                                                </div>
                                            </div>
                                            <div className="md:flex justify-between">
                                                <div className="">Zip Code
                                                </div>
                                                <div className="text-gray">1216</div>
                                            </div>
                                            <div className="md:flex justify-between">
                                                <div className="">Address</div>
                                                <div className="text-gray">Dhaka Bangladesh
                                                </div>
                                            </div>

                                            
                                        </div>

                                    </div>
                                </div>


                    {/* <div className="px-3 my-3 flex justify-around md:w-fit w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-green-500  focus:ring-4 focus:outline-none  rounded-md ">
                        <IoMdPrint className=' ' />
                        <button type="submit" >
                            Print
                        </button>
                    </div> */}



                    {/* ----------End View---------*/}

                </div>
            </section>



        </>
    )
}

export default ViewSuppliers
