import React, { useEffect, useState } from 'react'
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
import { Link, useParams } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { TiImage } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";
import axios from 'axios';



const ViewProductCategories = () => {

    // const id = useParams()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     viewSettingProduct()
    // }, [])
    // async function viewSettingProduct() {
    //     const result = await axios.get(`http://localhost:4000/api/viewSettingProduct/${id}`)
    //     setData(result.data)
    // }

    let { id } = useParams()
    let [data, setData] = useState([])
    useEffect(() => {
        viewSettingProduct()
    }, [])
    async function viewSettingProduct() {
        let result = await axios.get(`http://localhost:4000/api/viewSettingProduct/${id}`)

        setData(result.data)

    }



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
                            <span className='text-gray font-semibold'> Product Categories
                                /</span>
                            <span className='text-gray font-semibold'> View </span>
                        </div>
                    </div>

                    {/* ----------Start View---------*/}

                    <div className=" ">

                        <div className="  shadow-md md:p-2 bg-white rounded-md antialiased ">
                            <div className="w-full py-2 mx-2 md:mx-0 text-xl ">Product Categories<hr className='my-4' /></div>

                            {data.map((data)=>(
                            <div className="md:flex  w-full gap-3 justify-start  items-center ">


                                    <div className="">

                                        <div className=" mb-1 md:mb-0 px-2 rounded  text-center  ">

                                            <img src={`http://localhost:4000/${data.image}`} alt="" srcset="" className='shadow-sm mx-auto md:mx-0 md:w-80 md:h-80 rounded  object-fit ' />

                                        </div>

                                    </div>




                                <div className=" w-full md:h-80  ">
                                    <div className="">
                                        <div className="mb-2 text-center md:text-justify  fount-bold capitalize text-2xl">{data.name}</div>
                                        <div className="py-2  ">
                                            <div className="bg-green-100 w-fit text-green-900 text-sm md:text-md mx-auto md:mx-0 text-black capitalize w-15 text-center rounded text-sm p-1">
                                                {data.status}
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

))}
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

export default ViewProductCategories
