import React, { useState } from 'react'
import { GoBell } from 'react-icons/go'
import pro from '../../images/Navbar/profile.webp'
import { FaPen } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { LuKeyRound } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom'



const ManagerHeader = () => {

  const [profileData, setProfileData] = useState(false)


  const products = () => {
    setProfileData(!profileData)
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
                    <div  className="flex items-center space-x-5">
                        <button className='relative text-2xl text-gray-600 '>
                            <GoBell size={32}/>
                            <span className='absolute top-0 right-0 -mt-1-mr-1 flex justify-center items-center bg-[#ff9248] font-semibold 
                            text-[10px] w-5 h-4 rounded-full border-2 border-white '>9</span>
                        </button>
                        <img src={pro} alt="profile" onClick={products} srcset="" className='w-8 h-8 g-8 shadow-md rounded-full border-2 border-lightsuccess '/>
                    </div>
                </div>

            </div>


{/* ----------------------------Profile ---------------------- */}
{ profileData &&  
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


        </>
    )
}

export default ManagerHeader
