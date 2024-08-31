import React, { useState } from 'react'
import { GoBell } from 'react-icons/go'
import pro from '../../images/Navbar/profile.webp'
import { FaPen } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { LuKeyRound } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom'



const WictsHeader = () => {

    const [profileData, setProfileData] = useState(false)
    const [showModal, setShowModal] = React.useState(false);

    const products = () => {
        setProfileData(!profileData)
    }

    const showData = () => {
        setShowModal(true)
    }


    return (
        <>

            <section>
                <div className=" fixed z-30 top-0 w-5/6 bg-white">
                    <div className=" mx-auto flex max-w-7xl  justify-between items-center p-4">
                        <div className="">
                            <h1 className='text-xs'>Welcome Back!</h1>
                            <p className='text-xl font-semibold'>Anadi</p>
                        </div>
                        <div className="flex items-center space-x-5" >
                            <div className="flex items-center space-x-5">
                                <button onClick={() => showData()} className='bg-success py-1 px-3 rounded-md text-white '>License</button>
                                <button className='relative text-2xl text-gray-600 '>
                                    <GoBell size={32} />
                                    <span className='absolute top-0 right-0 -mt-1-mr-1 flex justify-center items-center bg-[#ff9248] font-semibold 
                            text-[10px] w-5 h-4 rounded-full border-2 border-white '>9</span>
                                </button>
                                <img src={pro} alt="profile" onClick={products} srcset="" className='w-8 h-8 g-8 shadow-md rounded-full border-2 border-lightsuccess ' />
                            </div>
                        </div>

                    </div>


                    {/* ----------------------------Profile ---------------------- */}
                    {profileData &&
                        <div>
                            <div className=" md:h-[25rem] w-full md:mr-2 md:w-[20rem] rounded-md absolute  right-0 top-17 bg-white shadow-2xl	  ">
                                <div className="">
                                    <div className="items-center py-3 rounded text-center ">
                                        <div className=" p-1">
                                            <input type="file" value="" name='' className='h-[8rem] focus:ring-4 shadow-xl rounded-full m-auto relative w-[8rem]' />
                                            <button type='submit' className='absolute outline-0 border-b-gray-500 border-t-0 border-l-0 border-r-0 shadow-xl top-30 p-2 rounded-full left-36 bg-white '> <FaPen className='text-[1rem]' /> </button>
                                        </div>

                                        <div className="text-[1.2rem] ">Anadi Sharma</div>

                                        <div className="text-md">posoperator@example.com</div>

                                        <div className="text-sm">+880156873641</div>

                                        <div className="text-sm">$0.00</div>
                                    </div>

                                </div>


                                <div className=" mt-3">

                                    <Link to="/admin/profile/edit" onClick={() => setProfileData(false)} class="px-5 flex w-full  text-[1rem] outline-0   space-x-5  items-center py-2.5  text-sm text-gray-500 ">
                                        <FaRegPenToSquare className='' />
                                        <span>Edit Profile</span>
                                    </Link>

                                    <Link to="/admin/profile/changePassword" onClick={() => setProfileData(false)} class="px-5 flex w-full border border-[#f5f2eb] border-y-sm text-[1rem]  border-x-0  space-x-5  items-center py-2.5  text-sm text-gray-500   ">
                                        <LuKeyRound className='' />
                                        <span>Change Password</span>
                                    </Link>


                                    <Link to="/" class="px-5 flex w-full  text-[1rem]    space-x-5  items-center py-2.5  text-sm text-gray-500 ">
                                        <CiLogout className='' />
                                        <span>Logout</span>
                                    </Link>


                                </div>
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eum magnam ut sed non minima odio nihil voluptas aspernatur veritatis animi iusto libero, alias aliquid velit quod quis id assumenda? */}
                            </div>
                        </div>


                    }


                    {/* ------------Profile End-------------------------------------------- */}

                </div>
            </section>






            {showModal && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="mx-auto w-6/7 lg:w-4/6  h-4/5 lg:h-auto px-4 md:px-8 ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                {/*body*/}
                                <section className="overflow-hidden">
                                    <div className="">
                                        {/*header*/}
                                        <div className="flex items-start p-4 w-full justify-between border-b border-solid border-blueGray-200 rounded-l">
                                            <h3 className="text-2xl mb-2 font-semibold">
                                                Modal Title
                                            </h3>
                                            <button
                                                className=" mb-2 p-1 ml-auto bg-transparent shadow-xl border-0 bg-red-500 rounded-full text-black flex justify-center items-center float-right  leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className=" text-red-500 m-[0.1px] h-6 w-6 bg-white flex justify-center items-center rounded-full  text-md">
                                                    X
                                                </span>
                                            </button>
                                        </div>


                                        {/* -----------From-------------------- */}

                                        <div className="flex p-5 justify-between  my-1  ">

                                            <div className="w-full">

                                                <form action="" method="POST">

                                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                                                        <div className="mb-4">
                                                            <label for="name" className="text-base font-medium text-gray-900">User Name</label>
                                                            <input type="text" id="name" name="name" className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                        </div>

                                                        <div className="mb-4">
                                                            <label for="name" className="text-base font-medium text-gray-900">Company Name</label>
                                                            <input type="text" id="name" name="name" className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                        </div>
                                                    </div>

                                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                                                        <div className="mb-6">
                                                            <label for="password" className="text-base font-medium text-gray-900">Valid Date From </label>
                                                            <input type="date" id="password" name="password" className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                            <span className="px-4 text-sm text-red-500">Time Automatically Take 00:00 AM</span>

                                                        </div>

                                                        <div className="mb-6">
                                                            <label for="password" className="text-base font-medium text-gray-900">Valid Date To </label>
                                                            <input type="date" id="password" name="password" className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                            <span className="px-4 text-sm text-red-500">Time Automatically Take 00:00 AM</span>

                                                        </div>

                                                    </div>

                                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

                                                        <div className="mb-4">
                                                            <label for="name" className="text-base font-medium text-gray-900">License Key</label>
                                                            <input type="number" id="name" name="name" placeholder='#4567@Abcd&*' className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                            <span className="px-4 text-sm text-red-500">Charcerter 4 + Number 4 + Special Character 4 </span>

                                                        </div>
                                                    </div>

                                                    <button type="submit"
                                                    onClick={()=> setShowModal(false)}
                                                        className="inline-flex text-md uppercase w-full items-center justify-center rounded-full bg-success px-3.5 py-2.5 font-semibold leading-7 text-white "
                                                    >
                                                        Submit
                                                    </button>

                                                </form>

                                            </div>

                                        </div>



                                        {/* -----------From End-------------------- */}





                                    </div>
                                </section>
                                {/*footer*/}

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}



        </>
    )
}

export default WictsHeader
