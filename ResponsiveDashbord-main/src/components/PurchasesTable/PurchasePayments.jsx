import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { GrSecure } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { TiImage } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdFilterListAlt } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";


const PurchasePayments = () => {

    const data = [
        { id: 1, Date: "23/02/2021", ReferenceNo: "123", Amount: "20", PaymentMethod: "card" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    // Calculate the start and end index of the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Get the current page's data
    const currentData = data.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / rowsPerPage);

    return (
        <>
            {/* ----------------------Table------------------------------- */}



            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /  <span className='text-gray font-semibold'>Purchases</span></div>
                    </div>
                    {/* ----------Start---------- */}


                    <div className=" ">

                        <div className=" mt-[2rem]  md:mt-0  shadow-md md:p-2 bg-white rounded-md antialiased ">

                            <div className="py-3  text-xl font-semibold border-b ">Purchase Payments</div>
                            <div className="flex items-center justify-between  p-1  mt-2">

                                <div className="flex  w-full justify-between ">


                                    <div className="  text-base font-medium text-darkgray grid md:grid-cols-1 md:gap-2 xl:grid-cols-1 w-full rounded-md  mx-auto ">

                                        <div class="relative overflow-auto ">
                                            <table class="w-full  text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead class="text-xs shadow  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr className=''>
                                                        <th scope="col" class="px-4 py-3">
                                                            Date
                                                        </th>
                                                        <th scope="col" class="px-4  py-3">
                                                            Reference No
                                                        </th>
                                                        <th scope="col" class="px-4  py-3">
                                                            Amount
                                                        </th>
                                                        <th scope="col" class="px-4  py-3">
                                                            Payment Method
                                                        </th>
                                                        <th scope="col" class="px-4 py-3 text-center">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {currentData.map((row) => (
                                                        <tr key={row.id} className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <td className="py-2 px-4 border-b">{row.Date}</td>
                                                            <td className="py-2 px-4 border-b">{row.ReferenceNo}</td>
                                                            <td className="py-2 px-4 border-b">{row.Amount}</td>
                                                            <td className="py-2 px-4 border-b">{row.PaymentMethod}</td>
                                                            <td class="px-6 py-4 flex gap-2 justify-center">
                                                                <Link to="" className='text-lightsuccess pointer'><GrFormView size={20} /></Link>
                                                                <Link to=""><FaRegEdit className='text-green-400 pointer' size={20} /></Link>
                                                                <span><MdOutlineDeleteOutline className='text-red-400 pointer' size={20} /></span>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="flex h-11 justify-center mt-4">
                                            <button
                                                className="px-4 py-1  mx-1 bg-success text-white rounded "
                                                onClick={() => setCurrentPage(currentPage - 1)}
                                                disabled={currentPage === 1}
                                            >
                                                Previous
                                            </button>
                                            <span className="px-4  py-2">
                                                Page {currentPage} of {totalPages}
                                            </span>
                                            <button
                                                className="px-4 py-1 mx-1 bg-success text-white rounded "
                                                onClick={() => setCurrentPage(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                            >
                                                Next
                                            </button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* -----------Table End--------------------------- */}


        </>
    )
}

export default PurchasePayments
