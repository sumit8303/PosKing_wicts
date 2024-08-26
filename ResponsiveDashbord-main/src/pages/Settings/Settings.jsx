import React, { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { GrSecure } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { TiImage } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdFilterListAlt } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import CountriesTable from '../../components/Setting/CountriesTable';
import StatesTable from '../../components/Setting/StatesTable';
import CitiesTable from '../../components/Setting/CitiesTable';
import CurrenciesTable from '../../components/Setting/CurrenciesTable';
import ProductCategoriesTable from '../../components/Setting/ProductCategoriesTable';
import ProductAttributesTable from '../../components/Setting/ProductAttributesTable';
import ProductBrandsTable from '../../components/Setting/ProductBrandsTable';
import SuppliersTable from '../../components/Setting/SuppliersTable';
import UnitsTable from '../../components/Setting/UnitsTable';
import TaxesTable from '../../components/Setting/TaxesTable';
import RolePermissionsTable from '../../components/Setting/RolePermissionsTable';


const Settings = () => {

    const [activeTab, setActiveTab] = useState('Company');

    const [active, setActive] = useState('tab1');


    const [countries, setCountries] = useState(false);

    const Countries = () => {
        setCountries(!countries)
    }

    const [states, setStates] = useState(false);

    const States = () => {
        setStates(!states)
    }

    const [cities, setCities] = useState(false);

    const Cities = () => {
        setCities(!cities)
    }



    const handleChange = (tab) => {
        setActive(tab);
    };

    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /  <span className='text-gray font-semibold'>Settings / </span>
                            <span className='text-gray font-semibold'>{`${activeTab}`} </span>
                        </div>

                    </div>
                    {/* ----------Start---------- */}

                    <div className=" ">


                        <div className="md:flex bg-white p-5 shadow-md">
                            {/* Sidebar */}
                            <div className="md:w-1/4 p-4 w-full md:border-r">
                                <ul className="space-y-2">
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Company' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Company')}
                                    >
                                        Company
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded  p-2 ${activeTab === 'Mail' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Mail')}
                                    >
                                        Mail
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Location Setup' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Location Setup')}
                                    >
                                        Location Setup
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Currencies' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Currencies')}
                                    >
                                        Currencies
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Product Categories' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Product Categories')}
                                    >
                                        Product Categories
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Product Attributes' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Product Attributes')}
                                    >
                                        Product Attributes
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Product Brands' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Product Brands')}
                                    >
                                        Product Brands
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Suppliers' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Suppliers')}
                                    >
                                        Suppliers
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Units' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Units')}
                                    >
                                        Units
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Taxes' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Taxes')}
                                    >
                                        Taxes
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'Role & Permissions' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('Role & Permissions')}
                                    >
                                        Role & Permissions
                                    </li>
                                    <li
                                        className={`cursor-pointer rounded p-2 ${activeTab === 'License' ? 'bg-success rounded shadow-md  text-white' : 'hover:bg-lightsuccess'}`}
                                        onClick={() => setActiveTab('License')}
                                    >
                                        License
                                    </li>
                                </ul>
                            </div>

                            {/* Content Area */}
                            <div className="w-3/4 p-4">
                                {activeTab === 'Company' && <div>

                                    {/* -------Start----------- */}
                                    <div className="w-full  text-xl ">Company<hr className='my-4' /></div>
                                    <div className="">

                                        <div className="w-full">

                                            <form action="" method="post">
                                                <div className="">

                                                    {/* ---------------Start---------------------- */}

                                                    <div className="w-full p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Name<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Latitude/Longitude<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="flex mt-2">
                                                                <input
                                                                    className="flex h-10 w-full rounded-l-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                                <input
                                                                    className="flex h-10 w-full rounded-r-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Email<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="email"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Phone<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="flex mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="number"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Website<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                City<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="flex mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="number"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                State<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Country Code<span className='text-success px-1'>*</span>
                                                            </label>

                                                            <div className="mt-2">
                                                                <select className="flex h-10  w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                                                    <option selected className='text-gray-400 '>--</option>
                                                                    <option value="US">United States</option>
                                                                    <option value="CA">Canada</option>
                                                                    <option value="FR">France</option>
                                                                    <option value="DE">Germany</option>
                                                                </select>
                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Zip Code<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                    </div>



                                                    <div className="w-full p-3 grid grid-cols-1 md:gap-5   mx-auto ">
                                                        {/* -------------------------Text Area Start--------------------------------- */}

                                                        <div className=''>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Address<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2 ">

                                                                <textarea placeholder='' className="resize-none  rounded-md overflow-hidden scroll-smooth overflow-y-scroll flex md:h-40 sm:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"></textarea>

                                                            </div>
                                                        </div>
                                                        {/* -------------------------Text Area End--------------------------------- */}
                                                    </div>

                                                    {/* ------------Button----------- */}
                                                    <div className="p-3 grid grid-cols-1 md:gap-5  md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                        <div className="px-3 w-full flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                            <FaCircleCheck className=' ' />
                                                            <button type="button" >
                                                                Save
                                                            </button>
                                                        </div>

                                                    </div>
                                                    {/* -----------Button End--------------- */}

                                                    {/* ---------------End---------------------- */}

                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                    {/* -----------End---------- */}

                                </div>}
                                {activeTab === 'Mail' && <div>

                                    {/* -------Start----------- */}
                                    <div className="w-full  text-xl ">Mail<hr className='my-4' /></div>
                                    <div className="">

                                        <div className="w-full">

                                            <form action="" method="post">
                                                <div className="">

                                                    {/* ---------------Start---------------------- */}

                                                    <div className="w-full p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Mail Host<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Mail Port<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="flex mt-2">
                                                                <input
                                                                    className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Mail Username<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="email"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Mail Password<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="flex mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="number"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-2  mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Mail From Name<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="text"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Mail From Email<span className='text-success px-1'>*</span>
                                                            </label>
                                                            <div className="flex mt-2">
                                                                <input
                                                                    className="flex h-10 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                    type="number"
                                                                ></input>
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div className=" p-3 grid grid-cols-1 md:grid-cols-2 md:gap-5   mx-auto ">

                                                        <div>
                                                            <label htmlFor="" className="text-base font-medium text-gray">
                                                                {' '}
                                                                Mail Encryption<span className='text-success w-full '>*</span>
                                                            </label>
                                                            <div className="mt-2 flex  justify-between items-center ">
                                                                <div class="flex w-full items-center  mb-4">
                                                                    <input id="SSL" type="radio" value="SSL" name="Encryption" className='accent-success h-4 w-4 ' />
                                                                    <label for="SSL" class="ms-2 text-base font-medium text-gray">SSL</label>
                                                                </div>
                                                                <div class="flex w-full items-center mb-4 ">
                                                                    <input id="TLS" type="radio" value="TLS" name="Encryption" className='accent-success h-4 w-4 ' />
                                                                    <label for="TLS" class="ms-2 text-base font-medium text-gray">TLS</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>






                                                    {/* ------------Button----------- */}
                                                    <div className="p-3 grid grid-cols-1 md:gap-5  md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                        <div className="px-3 w-full flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                            <FaCircleCheck className=' ' />
                                                            <button type="button" >
                                                                Save
                                                            </button>
                                                        </div>

                                                    </div>
                                                    {/* -----------Button End--------------- */}

                                                    {/* ---------------End---------------------- */}

                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                    {/* -----------End---------- */}


                                </div>}
                                {activeTab === 'Location Setup' && <div>


                                    {/* Location setup and management. Start */}

                                    <div className=" mx-auto min-w-[208px] md:w-full text-center md:text-justify grid grid-cols-1  ">
                                        <div className="md:flex  space-y-3 md:space-y-0 gap-4 ">

                                            <div className={`px-4 py-2  items-center mx-auto font-larze flex justify-around shadow  w-full  font-medium text-center rounded-md ${active === 'tab1' ? 'bg-success  shadow-md text-white' : 'border-transparent text-darkgray hover:text-success'}`}
                                                onClick={() => handleChange('tab1')}>
                                                <button>Countries</button>
                                            </div>

                                            <div className={`px-4 py-2 items-center mx-auto font-larze flex justify-around shadow w-full  font-medium text-center rounded-md ${active === 'tab2' ? 'bg-success shadow-md  text-white' : 'border-transparent text-darkgray hover:text-success'}`}
                                                onClick={() => handleChange('tab2')} >
                                                <button>States</button>
                                            </div>


                                            <div className={`px-4 py-2 items-center mx-auto font-larze flex  justify-around shadow w-full  font-medium text-center rounded-md ${active === 'tab3' ? 'bg-success  shadow-md text-white' : 'border-transparent text-darkgray hover:text-success'}`}
                                                onClick={() => handleChange('tab3')} >
                                                <button>Cities</button>
                                            </div>

                                        </div>

                                        <div className="mt-[1rem]  md:mt-[2rem]  shadow-md md:p-2 bg-white rounded-md antialiased  ">
                                            {active === 'tab1' && (
                                                <div>

                                                    {/* -------------Tab1 Start------------ */}


                                                    <div>
                                                        <div className="  ">

                                                            <div className=" md:flex justify-between  ">

                                                                <div className="p-3 text-xl font-semibold">Countries</div>


                                                                <div className="p-3 md:flex gap-3  ms-auto space-y-3 md:space-y-0  ">

                                                                    <button type="button" className='px-3 flex md:w-fit w-full justify-around  gap-2 items-center md:py-1.5 py-1  font-larze text-success border border-success  focus:ring-4 focus:outline-none  rounded-md '>
                                                                        <select className="">
                                                                            <option value="10">10</option>
                                                                            <option value="25">25</option>
                                                                            <option value="50">50</option>
                                                                            <option value="100">100</option>
                                                                            <option value="1000">1000</option>
                                                                        </select>
                                                                    </button>


                                                                    <div onClick={Countries} className="px-3 flex justify-around  gap-2 items-center md:py-1.5 py-1  font-larze text-success border border-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                        <MdFilterListAlt className='size-5' />
                                                                        <button type="button" >
                                                                            Filter
                                                                        </button>
                                                                        <FaAngleDown className=' ' />
                                                                    </div>

                                                                    <Link to="/admin/settings/addCountries" className="px-3  flex justify-around md:w-fit  w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                        <CiCirclePlus className='size-5 ' />
                                                                        <button type="submit" >
                                                                            Add Countries
                                                                        </button>
                                                                    </Link>


                                                                </div>

                                                            </div>

                                                            <hr />




                                                            {countries &&

                                                                <form action="" method="post">
                                                                    <div className="flex  justify-between  my-1 p-1  ">

                                                                        <div className="w-full">

                                                                            <div className="">

                                                                                {/* ---------------Start---------------------- */}

                                                                                <div className=" p-3 grid md:grid-cols-3 md:gap-5 sm:grid-cols-1  mx-auto ">


                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            Name<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <input
                                                                                                className="flex h-10 rounded-md w-full border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                                                type="text"
                                                                                            ></input>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            Code<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <input
                                                                                                className="flex h-10 rounded-md w-full border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                                                type="text"
                                                                                            ></input>
                                                                                        </div>
                                                                                    </div>


                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            Status<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                                                                                <option selected className='text-gray-400 '>--</option>
                                                                                                <option value="US">United States</option>
                                                                                                <option value="CA">Canada</option>
                                                                                                <option value="FR">France</option>
                                                                                                <option value="DE">Germany</option>
                                                                                            </select>

                                                                                        </div>
                                                                                    </div>


                                                                                </div>

                                                                                {/* ------------Button----------- */}
                                                                                <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                                                    <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                                        <FaCircleCheck className=' ' />
                                                                                        <button type="button" >
                                                                                            Search
                                                                                        </button>
                                                                                    </div>

                                                                                    <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                                                        X
                                                                                        <button type="button" >
                                                                                            Clear
                                                                                        </button>
                                                                                    </div>


                                                                                </div>
                                                                                {/* -----------Button End--------------- */}
                                                                                {/* ------------------------------------- */}
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </form>
                                                            }


                                                            {/* ----------------------Table------------------------------- */}


                                                            <CountriesTable />

                                                            {/* -----------Table End--------------------------- */}



                                                        </div>
                                                    </div>

                                                    {/* -------------Tab1 End------------ */}

                                                </div>
                                            )}
                                            {active === 'tab2' && (
                                                <div>


                                                    {/* -------------Tab2 Start------------ */}


                                                    <div>
                                                        <div className="  ">

                                                            <div className=" md:flex justify-between  ">

                                                                <div className="p-3 text-xl font-semibold">States</div>


                                                                <div className="p-3 md:flex gap-3  ms-auto space-y-3 md:space-y-0  ">

                                                                    <div onClick={States} className="px-3 flex justify-around  gap-2 items-center md:py-1.5 py-1  font-larze text-success border border-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                        <MdFilterListAlt className='size-5' />
                                                                        <button type="button" >
                                                                            Filter
                                                                        </button>
                                                                        <FaAngleDown className=' ' />
                                                                    </div>

                                                                    <Link to="/admin/settings/addStates" className="px-3  flex justify-around md:w-fit  w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                        <CiCirclePlus className='size-5 ' />
                                                                        <button type="submit" >
                                                                            Add States
                                                                        </button>
                                                                    </Link>


                                                                </div>

                                                            </div>

                                                            <hr />




                                                            {states &&

                                                                <form action="" method="post">
                                                                    <div className="flex  justify-between  my-1 p-1  ">

                                                                        <div className="w-full">

                                                                            <div className="">

                                                                                {/* ---------------Start---------------------- */}

                                                                                <div className=" p-3 grid md:grid-cols-3 md:gap-5 sm:grid-cols-1  mx-auto ">


                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            Name<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <input
                                                                                                className="flex h-10 rounded-md w-full border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                                                type="text"
                                                                                            ></input>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            Country<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                                                                                <option selected className='text-gray-400 '>--</option>
                                                                                                <option value="US">United States</option>
                                                                                                <option value="CA">Canada</option>
                                                                                                <option value="FR">France</option>
                                                                                                <option value="DE">Germany</option>
                                                                                            </select>

                                                                                        </div>
                                                                                    </div>


                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            Status<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                                                                                <option selected className='text-gray-400 '>--</option>
                                                                                                <option value="US">United States</option>
                                                                                                <option value="CA">Canada</option>
                                                                                                <option value="FR">France</option>
                                                                                                <option value="DE">Germany</option>
                                                                                            </select>

                                                                                        </div>
                                                                                    </div>


                                                                                </div>

                                                                                {/* ------------Button----------- */}
                                                                                <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                                                    <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                                        <FaCircleCheck className=' ' />
                                                                                        <button type="button" >
                                                                                            Search
                                                                                        </button>
                                                                                    </div>

                                                                                    <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                                                        X
                                                                                        <button type="button" >
                                                                                            Clear
                                                                                        </button>
                                                                                    </div>


                                                                                </div>
                                                                                {/* -----------Button End--------------- */}
                                                                                {/* ------------------------------------- */}
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </form>
                                                            }


                                                            {/* ----------------------Table------------------------------- */}

                                                            <StatesTable />

                                                            {/* -----------Table End--------------------------- */}



                                                        </div>
                                                    </div>

                                                    {/* -------------Tab2 End------------ */}

                                                </div>
                                            )}
                                            {active === 'tab3' && (
                                                <div>

                                                    {/* -------------Tab3 Start------------ */}


                                                    <div>
                                                        <div className="  ">

                                                            <div className=" md:flex justify-between  ">

                                                                <div className="p-3 text-xl font-semibold">Cities</div>


                                                                <div className="p-3 md:flex gap-3  ms-auto space-y-3 md:space-y-0  ">


                                                                    <div onClick={Cities} className="px-3 flex justify-around  gap-2 items-center md:py-1.5 py-1  font-larze text-success border border-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                        <MdFilterListAlt className='size-5' />
                                                                        <button type="button" >
                                                                            Filter
                                                                        </button>
                                                                        <FaAngleDown className=' ' />
                                                                    </div>

                                                                    <Link to="/admin/settings/addCities" className="px-3  flex justify-around md:w-fit  w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                        <CiCirclePlus className='size-5 ' />
                                                                        <button type="submit" >
                                                                            Add Cities
                                                                        </button>
                                                                    </Link>


                                                                </div>

                                                            </div>

                                                            <hr />




                                                            {cities &&

                                                                <form action="" method="post">
                                                                    <div className="flex  justify-between  my-1 p-1  ">

                                                                        <div className="w-full">

                                                                            <div className="">

                                                                                {/* ---------------Start---------------------- */}

                                                                                <div className=" p-3 grid md:grid-cols-3 md:gap-5 sm:grid-cols-1  mx-auto ">


                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            Name<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <input
                                                                                                className="flex h-10 rounded-md w-full border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                                                                type="text"
                                                                                            ></input>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            State<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                                                                                <option selected className='text-gray-400 '>--</option>
                                                                                                <option value="US">United States</option>
                                                                                                <option value="CA">Canada</option>
                                                                                                <option value="FR">France</option>
                                                                                                <option value="DE">Germany</option>
                                                                                            </select>

                                                                                        </div>
                                                                                    </div>


                                                                                    <div>
                                                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                                                            {' '}
                                                                                            Status<span className='text-success px-1'>*</span>
                                                                                        </label>
                                                                                        <div className="mt-2">
                                                                                            <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                                                                                <option selected className='text-gray-400 '>--</option>
                                                                                                <option value="US">United States</option>
                                                                                                <option value="CA">Canada</option>
                                                                                                <option value="FR">France</option>
                                                                                                <option value="DE">Germany</option>
                                                                                            </select>

                                                                                        </div>
                                                                                    </div>


                                                                                </div>

                                                                                {/* ------------Button----------- */}
                                                                                <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                                                    <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                                                        <FaCircleCheck className=' ' />
                                                                                        <button type="button" >
                                                                                            Search
                                                                                        </button>
                                                                                    </div>

                                                                                    <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                                                        X
                                                                                        <button type="button" >
                                                                                            Clear
                                                                                        </button>
                                                                                    </div>


                                                                                </div>
                                                                                {/* -----------Button End--------------- */}
                                                                                {/* ------------------------------------- */}
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </form>
                                                            }


                                                            {/* ----------------------Table------------------------------- */}


                                                            <CitiesTable />

                                                            {/* -----------Table End--------------------------- */}



                                                        </div>
                                                    </div>

                                                    {/* -------------Tab3 End------------ */}

                                                </div>
                                            )}

                                        </div>


                                    </div>







                                    {/* Location setup and management. End */}


                                </div>}
                                {activeTab === 'Currencies' && <div>
                                    {/* Manage different currencies here. */}

                                    <CurrenciesTable />

                                </div>}
                                {activeTab === 'Product Categories' && <div>

                                    {/* Product categories information. */}
                                    <ProductCategoriesTable />

                                </div>}
                                {activeTab === 'Product Attributes' && <div>

                                    {/* Set product attributes. */}
                                    <ProductAttributesTable />


                                </div>}
                                {activeTab === 'Product Brands' && <div>

                                    {/* Product brands details. */}

                                    <ProductBrandsTable />

                                </div>}
                                {activeTab === 'Suppliers' && <div>
                                    {/* Manage your suppliers. */}
                                    <SuppliersTable />
                                </div>}
                                {activeTab === 'Units' && <div>
                                    {/* Unit configuration and settings. */}
                                    <UnitsTable />
                                </div>}
                                {activeTab === 'Taxes' && <div>
                                    {/* Tax setup and configuration. */}
                                    <TaxesTable />
                                </div>}
                                {activeTab === 'Role & Permissions' && <div>
                                    {/* Manage roles and permissions here. */}
                                    <RolePermissionsTable />
                                </div>}
                                {activeTab === 'License' && <div>

                                    {/* License details and management. */}

                                    <div className=" mt-[2rem]  md:mt-0 md:p-2 bg-white rounded-md antialiased ">
                                        <div className="w-full  text-xl ">License<hr className='my-4' /></div>
                                        <div className=" ">

                                            <div className=" p-3 grid md:grid-cols-1 w-full sm:grid-cols-1 md:gap-5 mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        License Key
                                                        <span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            value="k8r05ti8-c7b2-41p3-1956-k516m31017k123"
                                                            readOnly
                                                        ></input>
                                                    </div>
                                                </div>


                                            </div>




                                        </div>

                                    </div>
                                </div>}
                            </div>
                        </div>






                    </div>
                    {/* ----------End---------- */}

                </div>
            </section>

        </>
    )
}

export default Settings
