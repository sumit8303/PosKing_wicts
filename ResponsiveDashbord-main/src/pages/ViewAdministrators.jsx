import React, { useEffect, useState } from 'react'
import { BsCardText } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
import pro from '../images/Navbar/profile.webp'
import { IoIosPerson } from "react-icons/io";
import { GrSecure } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { TiImage } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";
import axios from 'axios';



const ViewAdministrators = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [administratorAddress, setadministratorAddress] = useState([])

    const navigation = useNavigate()
    useEffect(() => {
        viewAdministrator()
    }, [])
    async function viewAdministrator() {
        let result = await axios.get(`http://localhost:4000/api/viewAdministrator/${id}`)
        setData(result.data)
        console.log(result.data)
    }

    const [administrator, SetAdministrator] = useState({
        password: "",
        confirmPassword: "",
    })

    const { password, confirmPassword } = administrator

    function handleChange(e) {
        SetAdministrator({ ...administrator, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.put(`http://localhost:4000/api/updateAdministrator/${id}`, administrator)
        navigation('/admin/administrators')
    }




    const [selectImage, setSelectImage] = useState()


    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        getAdministratorAddress()
    }, [])

    async function getAdministratorAddress() {
        let result = await axios.get("http://localhost:4000/api/getAllAdminstratorAddress")
        setadministratorAddress(result.data)
        console.log(result.data)
    }


    async function deleteAdministratorAddress(_id) {
        const result = confirm("Are you sure to delete")
        if (result === true) {
            await axios.delete(`http://localhost:4000/api/deleteAdministratorAddress/${_id}`)
            getAdministratorAddress()
        }
    }


    return (
        <>


            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /
                            <span className='text-gray font-semibold'>Administrators /</span>
                            <span className='text-gray font-semibold'> View </span>
                        </div>
                    </div>

                    {/* ----------Start View---------*/}

                    <div className=" ">
                    {data.map((data) => (

                        <div className=" mt-[1rem] md:mt-0 md:h-40   shadow-md md:p-2 bg-white rounded-md antialiased ">


                            <div className="md:flex relative w-full gap-3  md:float-left items-center ">

                                <div className="">

                                    <div className="p-2  mb-1 md:mb-0 px-2 rounded  text-center  ">

                                        {/* <img src={selectImage} alt="" srcset="" className=' md:w-30 md:h-30  object-fit ' /> */}
                                        <img src={`http://localhost:4000/${data.image}`} alt="" srcset="" className='shadow-sm md:w-30 md:h-30 rounded  object-fit ' />


                                    </div>
                                </div>


                                <div className="text-center p-2 md:text-justify">

                                    <div className="py-1  fount-bold capitalize text-2xl">{data.name}</div>
                                    <div className="py-1  ">
                                        <div className="bg-orange-100 text-sm md:text-md mx-auto md:mx-0 text-black capitalize w-15 text-center rounded text-sm p-1">
                                            Admin
                                        </div>
                                    </div>
                                    {/* <div className="my-2 px-6 flex mb-1 md:mb-0 justify-around w-full  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md">
                                        <TiImage className=' ' />
                                        <input type="file" placeholder='Save' accept='image/*' onChange={(e)=>{
    const file = e.target.files?.[0];
    setSelectImage( file ? URL.createObjectURL(file): undefined);
}}  className=' display-none '/> 
                                        <button type="submit">
                                            Upload New Photo
                                        </button>

                                    </div> */}

                                </div>


                                {/* <div className="p-2">

                                    <div className="md:mt-22 px-6 mb-1 md:mb-0 flex justify-around w-full  gap-2 items-center py-1.5 md:w-30 font-larze text-white bg-green-500  focus:ring-4 focus:outline-none  rounded-md ">
                                        <FaCircleCheck className=' ' />
                                        <button type="submit" >
                                            Save
                                        </button>
                                    </div>
                                </div> */}


                                {/* <div className="p-2">

                                    <div className="md:mt-22 px-6 flex mb-1 md:mb-0 justify-around w-full  gap-2 items-center py-1.5 border border-red-500 md:w-30 font-larze text-red-500 bg-white  focus:ring-4 focus:outline-none  rounded-md ">
                                        <GrPowerReset className=' ' />
                                        <button type="submit" >
                                            Reset
                                        </button>
                                    </div>

                                </div> */}



                            </div>



                        </div>

))}
                    </div>




                    <div className=" w-full mx-auto p-3 text-center md:text-justify grid grid-cols-1 mt-[2rem]  md:mt-[2rem] ">
                        <div className="md:flex md:w-[40rem] space-y-3 md:space-y-0 gap-4 ">

                            <div className={`px-4 py-2 items-center mx-auto font-larze flex justify-around shadow  w-full  font-medium text-center rounded-md ${activeTab === 'tab1' ? 'bg-success  shadow-md text-white' : 'border-transparent text-darkgray hover:text-success'}`}
                                onClick={() => handleTabChange('tab1')}>
                                <IoIosPerson className='size-5' />
                                <button>Profile</button>
                            </div>

                            <div className={`px-4 py-2 items-center mx-auto font-larze flex justify-around shadow w-full  font-medium text-center rounded-md ${activeTab === 'tab2' ? 'bg-success shadow-md  text-white' : 'border-transparent text-darkgray hover:text-success'}`}
                                onClick={() => handleTabChange('tab2')} >
                                <GrSecure className='size-5' />
                                <button>Securify</button>
                            </div>


                            <div className={`px-4 py-2 items-center mx-auto font-larze flex justify-around shadow  w-full  font-medium text-center rounded-md ${activeTab === 'tab3' ? 'bg-success  shadow-md text-white' : 'border-transparent text-darkgray hover:text-success'}`}
                                onClick={() => handleTabChange('tab3')} >
                                <IoLocationSharp className='size-5' />
                                <button>Address</button>
                            </div>


                            <div className={`px-4 py-2 items-center mx-auto font-larze flex justify-around shadow  w-full  font-medium text-center rounded-md ${activeTab === 'tab4' ? 'bg-success shadow-md  text-white' : 'border-transparent text-darkgray hover:text-success'}`}
                                onClick={() => handleTabChange('tab4')} >
                                <IoBag className='size-5' />
                                <button>My Orders</button>
                            </div>




                        </div>

                        <div className="mt-[1rem]  md:mt-[2rem]  shadow-md md:p-2 bg-white rounded-md antialiased  ">
                            {activeTab === 'tab1' && (
                                <div>
                                    {data.map((data) => (

                                        <div className="  ">
                                            <div className=" text-xl font-semibold px-5 py-3 w-full">Basic Information</div><hr />

                                            <div className="grid md:grid-cols-2  py-3 px-5 gap-3 ">
                                                <div className="md:flex justify-between">
                                                    <div className="">Email</div>
                                                    <div className="text-gray">{data.email}</div>
                                                </div>
                                                <div className="md:flex justify-between">
                                                    <div className="">Phone</div>
                                                    <div className="text-gray">+{data.phoneNumber}</div>
                                                </div>
                                                <div className="md:flex justify-between">
                                                    <div className="">Status</div>
                                                    <div className="bg-green-100 text-sm md:text-md mx-auto md:mx-0 text-black capitalize w-15 text-center rounded text-sm p-1">
                                                        {data.status}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'tab2' && (
                                <div>

                                    <div className="  ">
                                        <div className=" text-xl font-semibold px-5 py-3 w-full">Change Password
                                        </div><hr />

                                        <form action="" method="post" onSubmit={handleSubmit}>
                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

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
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Confirm Password<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='confirmPassword'
                                                            value={confirmPassword}
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ------------Button----------- */}
                                            <div className="p-3 grid md:grid-cols-1 md:gap-5 xl:grid-cols-1 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                <div className="px-3 flex justify-around w-full gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                    <FaCircleCheck className=' ' />
                                                    <button type="submit" >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            )}
                            {activeTab === 'tab3' && (
                                <div>
                                    <div>
                                        <div className="  ">

                                            <div className=" md:flex justify-between w-full ">

                                                <div className="p-3 text-xl font-semibold">Address</div>


                                                <div className="p-3 md:flex gap-3  ms-auto space-y-3 md:space-y-0  ">

                                                    <Link to="/admin/administrators/viewadministrators/addAddress" className="px-3  flex justify-around md:w-fit  w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                        <CiCirclePlus className='size-5 ' />
                                                        <button type="submit" >
                                                            Add Address
                                                        </button>
                                                    </Link>

                                                    {/* <Link to="/admin/administrators/viewadministrators/addCategory" className="px-3  flex justify-around md:w-fit w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                        <CiCirclePlus className='size-5 ' />
                                                        <button type="submit" >
                                                            Add Category
                                                        </button>
                                                    </Link> */}

                                                </div>

                                            </div>

                                            <hr />


                                            {/* ----------------------Table------------------------------- */}

                                            <div className="  text-base font-medium text-darkgray grid md:grid-cols-1 md:gap-2 xl:grid-cols-1 w-full rounded-md  mx-auto ">

                                                <div class="relative overflow-x-auto">
                                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                            <tr>
                                                                <th scope="col" class="px-4 py-3">
                                                                    Name
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    Email
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    Phone
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    Address
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    Country
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    State
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    City
                                                                </th>
                                                                <th scope="col" class="px-4 py-3">
                                                                    Zip Code
                                                                </th>
                                                                <th scope="col" class="px-4 py-3 text-center">
                                                                    Action
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {Array.isArray(administratorAddress) && administratorAddress.map((administratorAddress) => (
                                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                    <td class="px-4 py-4">
                                                                        {administratorAddress.name}
                                                                    </td>
                                                                    <td class="px-4 py-4">
                                                                        {administratorAddress.email}
                                                                    </td>
                                                                    <td class="px-4 py-4">
                                                                        {administratorAddress.phoneNumber}
                                                                    </td>
                                                                    <td class="px-4 py-4">
                                                                        {administratorAddress.streetAddress}
                                                                    </td>
                                                                    <td class="px-4 py-4">
                                                                        {administratorAddress.country}
                                                                    </td>
                                                                    <td class="px-4 py-4">
                                                                        {administratorAddress.state}
                                                                    </td>
                                                                    <td class="px-4 py-4">
                                                                        {administratorAddress.city}
                                                                    </td>
                                                                    <td class="px-4 py-4">
                                                                        {administratorAddress.zipCode}
                                                                    </td>
                                                                    <td class="px-6 py-4 flex gap-2 justify-center">
                                                                        <Link to={`/admin/administrators/viewadministrators/editAddress/${administratorAddress._id}`}><FaRegEdit className='text-green-400 pointer' size={20} /></Link>

                                                                        <Link onClick={() => deleteAdministratorAddress(administratorAddress._id)}><MdOutlineDeleteOutline className='text-red-400 pointer' size={20} /></Link>
                                                                    </td>
                                                                </tr>
                                                            ))}

                                                        </tbody>
                                                    </table>
                                                </div>


                                            </div>
                                            {/* -----------Table End--------------------------- */}



                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'tab4' && (
                                <div>
                                </div>
                            )}
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

export default ViewAdministrators