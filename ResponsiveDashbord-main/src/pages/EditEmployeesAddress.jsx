import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { FaFileExport } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Table from '../components/Table';
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import axios from 'axios';



const EditEmployeesAddress = () => {
    const navigation = useNavigate()
    const [showCategory, setShowCategory] = useState([])
    const [employeeAddress, setEmployeeAddress] = useState({
        name : "",
        email : "",
        phoneNumber : "",
        country : "",
        state : "",
        city : "",
        zipCode : "",
        streetAddress : "",
    })
    const {name, email, phoneNumber, country, state, city, zipCode, streetAddress} = employeeAddress

    function handleChange(e){
        setEmployeeAddress({...employeeAddress, [e.target.name]: e.target.value})
    }

    let {id} = useParams()
    useEffect(()=>{
        viewEmployeeAddress()
    },[])
    async function viewEmployeeAddress() {
        let result = await axios.get(`http://localhost:4000/api/viewAddressEmployee/${id}`)
        setEmployeeAddress(result.data[0]) 
    }

    
    useEffect(() => {
        getAddressCategory()
    }, [])
    async function getAddressCategory() {
        const result = await axios.get('http://localhost:4000/api/getAllCategory')
        setShowCategory(result.data)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.put(`http://localhost:4000/api/updateEmployeeAddress/${id}`, employeeAddress)
        navigation('/admin/employees')   
    }
    
    const [open, Setopen] = useState(false)

    const toggleFilter = () => {
        Setopen(!open)
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
                    <div className="text-xl md:py-5 py-3">Dashboard /  <span className='text-gray font-semibold'>Employees /</span>
                        <span className='text-gray font-semibold'> Address</span>
                    </div>
                </div>

                {/* ----------Start---------- */}


                <div className=" ">

                    <div className=" mt-[2rem]  md:mt-0  shadow-md md:p-2 bg-white rounded-md antialiased ">

                        <div className="flex items-center justify-between  p-1  ">

                            <div className="md:flex  w-full justify-between ">

                                <div className="p-2 text-xl font-semibold">Edit</div>

                                <div className="md:flex md:space-y-0 space-y-2 mx-auto md:mx-0  gap-4 ">

                                    <Link to="/admin/employees/viewemployees" className="px-3 flex justify-around bg-gray text-white rounded-full gap-2 items-center md:py-1.5 py-1 font-larze hover:bg-black focus:ring-4 focus:outline-none  rounded-md ">
                                        <span className='text-white'>X</span>
                                    </Link>

                                </div>

                            </div>

                        </div>



                        {/* -----------From-------------------- */}
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="flex  justify-between  my-1 p-1  ">

                                <div className="w-full">

                                    <div className="">

                                        {/* ---------------Start---------------------- */}

                                        <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray">
                                                    {' '}
                                                    Full Name<span className='text-success px-1'>*</span>
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="text"
                                                        name='name'
                                                        value={name}
                                                        onChange={handleChange}
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
                                                        type="text"
                                                        name='email'
                                                        value={email}
                                                        onChange={handleChange}
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
                                                        onChange={handleChange}
                                                    ></input>
                                                </div>
                                            </div>





                                            <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Country<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"name="country" value={country} onChange={handleChange}>
                                                            <option >---Select Category---</option>
                                                            {showCategory.map((data) => (
                                                                <option>{data.country}</option>
                                                            ))}
                                                        </select>

                                                    </div>
                                                </div>



                                        </div>

                                        {/* ------------------------------------- */}

                                        <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                                        <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        State<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='state'
                                                            value={state}
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                </div>





                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        City<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='city'
                                                            value={city}
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                </div>



                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray">
                                                    {' '}
                                                    Zip Code<span className='text-success px-1'>*</span>
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="text"
                                                        name='zipCode'
                                                        value={zipCode}
                                                        onChange={handleChange}
                                                    ></input>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray">
                                                    {' '}
                                                    Street Address<span className='text-success px-1'>*</span>
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="text"
                                                        name='streetAddress'
                                                        value={streetAddress}
                                                        onChange={handleChange}
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

export default EditEmployeesAddress
