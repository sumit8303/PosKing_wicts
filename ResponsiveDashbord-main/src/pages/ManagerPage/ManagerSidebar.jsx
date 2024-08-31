import React, { useState } from 'react'

import { LuBox, LuUser, LuMessageSquare, LuCalendar } from 'react-icons/lu'
import { FaCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import Logo from '../../images/Navbar/Logo.png'
import { Link } from 'react-router-dom';
import { AiFillProduct } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { LiaHouseDamageSolid } from "react-icons/lia";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { LiaSellcast } from "react-icons/lia";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaSellsy } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";


const ManagerSidebar = () => {

    const [activeLink, setActiveLink] = useState(0)


    const handleLinkClick = (index) => {
        setActiveLink(index)
    }


    const SIDEBAR_LINKS = [
        {
            id: 1,
            path: "/Manager",
            name: "Dashboard",
            icon: AiFillProduct
        },
        {
            id: 2,
            path: "/Manager/pos",
            name: "POS",
            icon: LiaSellcast
        },
        {
            id: 3,
            path: "/Manager/posOrders",
            name: "POS Orders",
            icon: FaStore
        },
        {
            id: 4,
            path: "/Manager/customers",
            name: "Customers",
            icon: FaUserGroup
        },
        {
            id: 5,
            path: "/Manager/employees",
            name: "Employees",
            icon: FaUserTie
        },
        {
            id: 6,
            path: "/Manager/salesReport",
            name: "Sales Report",
            icon: FaSellsy
        },
    ]


    return (
        <>
            <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-slate-50  pt-8 px-4 bg-white">
                {/* logo */}
                <div className='mb-8'>
                    <img src={Logo} alt="logo" className='w-28 hidden md:flex' srcset="" />
                    <img src={Logo} alt="logo" className='w-8 flex md:hidden' srcset="" />
                </div>
                <div className="">
                    {/* <div className='fixed rounded-r-full text-center items-center justify-center flex p-2 z-10 w-8 h-10 left-15 top-19 border border-lightsuccess bg-red-900 text-white hover:bg-success hover:text-white shadow-xl  md:hidden right-0 '>
                        <IoMenuOutline className='text-bold  size-1'  />
                    </div> */}
                </div>
                {/* Navigation Links */}
                <ul className='mt-6 space-y-4 '>
                    {
                        SIDEBAR_LINKS.map((link, index) => (
                            <li key={index} className={`font-medium text-black rounded-md py-2 px-5 hover:bg-lightsuccess 
                            hover:text-white ${activeLink === index ? 'bg-success text-white' : ''}`}>
                                <Link to={link.path}
                                    onClick={() => handleLinkClick(index)}
                                    className='flex justify-center md:justify-start items-center md:space-x-5 '>
                                    <span>{link.icon()}</span>
                                    <span className={`text-sm text-gray-500 hidden md:flex `}  >{link.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </div>


        </>
    )
}

export default ManagerSidebar
