import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaFileExport } from "react-icons/fa";
import { MdFilterListAlt } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import EmployeesTable from '../components/EmployeesTable';

const Employees = () => {
    let [data, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const { name, email, phoneNumber } = data;

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:4000/api/filterEmployees', {
                params: data,
            });
            console.log("Data found:", response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const [calender, setCalender] = useState(false);
    const toggleMenu = () => {
        setCalender(!calender);
    }

    const [open, setOpen] = useState(false);
    const toggleFilter = () => {
        setOpen(!open);
    }

    return (
        <>
            <section>
                <div className="text-neutral-600 mx-auto text-md antialiased font-normal p-5">
                    <div className="p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard / <span className='text-gray font-semibold'>Employees</span></div>
                    </div>

                    <div className="mt-[2rem] md:mt-0 shadow-md md:p-2 bg-white rounded-md antialiased">
                        <div className="flex items-center justify-between p-1">
                            <div className="md:flex w-full justify-between">
                                <div className="p-2 text-xl font-semibold">Employees</div>

                                <div className="md:flex md:space-y-0 space-y-2 mx-auto md:mx-0 gap-4">
                                    <button type="button" className='px-3 flex md:w-fit w-full justify-around gap-2 items-center md:py-1.5 py-1 font-larze text-success border border-success focus:ring-4 focus:outline-none rounded-md'>
                                        <select>
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                            <option value="1000">1000</option>
                                        </select>
                                    </button>

                                    <div onClick={toggleFilter} className="px-3 flex justify-around gap-2 items-center md:py-1.5 py-1 font-larze text-success border border-success focus:ring-4 focus:outline-none rounded-md">
                                        <MdFilterListAlt />
                                        <button type="button">
                                            Filter
                                        </button>
                                        <FaAngleDown />
                                    </div>

                                    <div className="px-3 flex justify-around gap-2 items-center md:py-1.5 py-1 font-larze text-success border border-success focus:ring-4 focus:outline-none rounded-md">
                                        <FaFileExport />
                                        <button type="button">
                                            Export
                                        </button>
                                        <FaAngleDown />
                                    </div>

                                    <Link to="/admin/employees/addemployees" className="px-3 flex justify-around bg-success text-white gap-2 items-center md:py-1.5 py-1 font-larze border border-success focus:ring-4 focus:outline-none rounded-md">
                                        <CiCirclePlus className='text-white size-5' />
                                        <button type="button">
                                            Add Employees
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <hr className='my-2' />

                        {open &&
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className="flex justify-between my-1 p-1">
                                    <div className="w-full">
                                        <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 mx-auto">
                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray">
                                                    Name<span className='text-success px-1'>*</span>
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
                                                    Email<span className='text-success px-1'>*</span>
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="email"
                                                        name='email'
                                                        value={email}
                                                        onChange={handleChange}
                                                    ></input>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="" className="text-base font-medium text-gray">
                                                    Phone<span className='text-success px-1'>*</span>
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 rounded-md w-full border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="text"
                                                        name='phoneNumber'
                                                        value={phoneNumber}
                                                        onChange={handleChange}
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0 me-auto">
                                            <div className="px-3 flex justify-around gap-2 items-center py-1.5 font-larze text-white bg-success focus:ring-4 focus:outline-none rounded-md">
                                                
                                                <button type="submit">
                                                    Save
                                                </button>
                                            </div>

                                            <div className="px-3 flex justify-around gap-2 items-center py-1.5 font-larze text-white bg-gray focus:ring-4 focus:outline-none rounded-md">
                                                X
                                                <button type="button">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        }

                        <div className="flex justify-between my-1 p-1">
                            <div className="w-full">
                                <EmployeesTable />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Employees;
