import React, { useState } from 'react'
import { BsCardText } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";


const ViewDamages = () => {


    

    return (
        <>


            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /
                            <span className='text-gray font-semibold'> Damages /</span>
                            <span className='text-gray font-semibold'> View </span>
                        </div>
                    </div>

                    {/* ----------Start View---------*/}

                    <div className=" ">

                        <div className=" mt-[2rem]  md:mt-0 shadow-md md:p-2 bg-white rounded-md antialiased ">

                            <div className="p-4 text-center md:text-justify grid grid-cols-1    mx-auto">

  <div className="py-2 mx-auto md:mx-0 text-green-500"><BsCardText/> </div>
  <div className="text-darkgray font-semibold "><span>Reference:</span>1003</div>
  <div className="text-gray font-semibold "><span>Date:</span> 06:38 PM, 18-07-2024</div>


                            </div>
                                           
                        </div>

                    </div>




                    <div className=" ">

                        <div className=" mt-[2rem]  md:mt-[2rem]  shadow-md md:p-2 bg-white rounded-md antialiased ">

                            <div className="p-3 text-center md:text-justify grid grid-cols-1    mx-auto">


                            <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                Product
                </th>
                <th scope="col" class="px-6 py-3">
                Unit Cost
                </th>
                <th scope="col" class="px-6 py-3">
                Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                Discount
                </th>
                <th scope="col" class="px-6 py-3">
                Taxes
                </th>
                <th scope="col" class="px-6 py-3">
                SubTotal
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Total
                </th>
                <td class="px-6 py-4">
                50.00
                </td>
                <td class="px-6 py-4">
                    0.00
                </td>
                <td class="px-6 py-4">
                0.00
                </td>
                <td class="px-6 py-4">
                0.00
                </td>
                <td class="px-6 py-4">
                0.00
                </td>
            </tr>

        </tbody>
    </table>
</div>





<div className=" ">

<div className=" mt-[2rem]  md:mt-5  md:p-2 bg-white rounded-md antialiased ">

    <div className=" text-center md:text-justify grid md:grid-cols-2  gap-5 grid-cols-1">

<div className=" bg-[#f3f4f6] text-darkgray font-semibold px-2 gap-2 h-11 items-center flex rounded-md">

<div>Created Date:</div><div>06:38 PM, 18-07-2024</div>
   
 </div>       
       <div className=" p-5 text-darkgray font-semibold shadow-sm  rounded-md">
      
     <div className=" flex space-y-2 justify-between ">
        
     <div>Subtotal</div><div>$500.00</div>
    </div>
    <div className=" flex space-y-2 justify-between">

       <div>Tax Fee</div><div>$0.00</div>
    </div>

    <div className="flex space-y-2 justify-between ">

       <div>Discount</div><div>$50.00</div>
    </div>
       
       <div className=" flex space-y-2 justify-between">

       <div>Total</div><div>$500.00</div>
       </div>
      
      
       </div>
       
        </div>

      
        </div>
        </div>


                            </div>
                                           
                        </div>

                    </div>

                    <div className="px-3 my-3 flex justify-around md:w-fit w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-green-500  focus:ring-4 focus:outline-none  rounded-md ">
    <IoMdPrint className=' ' />
    <button type="submit" >
        Print
    </button>
</div>



                    {/* ----------End View---------*/}

                </div>
            </section>



        </>
    )
}

export default ViewDamages
