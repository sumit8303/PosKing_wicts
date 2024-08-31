"use client";
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import pro from '../images/Navbar/profile.webp'
import { FaCircleCheck } from "react-icons/fa6";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BiSolidOffer } from "react-icons/bi";
import axios from 'axios';

const ViewProducts = () => {
    let { id } = useParams()
    let [data, setData] = useState([])
    useEffect(() => {
        viewData()
    }, [])
    async function viewData() {
        let result = await axios.get(`http://localhost:4000/api/viewProduct/${id}`)

        setData(result.data)

    }


    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

          <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
            <div className="text-xl md:py-5 py-3">Dashboard /
              <span className='text-gray font-semibold'>Products / </span>
              <span className='text-gray font-semibold'> View </span>
            </div>
          </div>

                    {/* ----------Start View---------*/}
                    <div className=" ">

<div className=" mt-[2rem]  md:mt-0 shadow-xl md:p-2 bg-white rounded-md antialiased ">

  <div className="flex items-center justify-between  p-1  ">


    <div className=" md:flex justify-between w-full ">

      <div className="p-3 text-xl font-semibold">Products</div>


      <div className="p-3 md:flex gap-3  ms-auto space-y-3 md:space-y-0  ">

        <Link to="/admin/products/viewproducts/variation" className="px-3  flex justify-around md:w-fit  w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
          <RxDragHandleDots2 className=' ' />
          <button type="submit" >
            Variation
          </button>
        </Link>

        <Link to="/admin/products/viewproducts/offer" className="px-3  flex justify-around md:w-fit w-full gap-2 ms-auto items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
          <BiSolidOffer className=' ' />
          <button type="submit" >
            Offer
          </button>
        </Link>

      </div>

    </div>







  </div>

              <hr className='my-2' />
              {/* ---------------------------------------------------- */}


              {/* ------------------------------- */}


                            <div className="flex  justify-between  my-1 p-1  ">
                            {data.map((data)=>(

                                <div className="mt-[2rem]  text-justify grid md:grid-cols-2 md:gap-2 space-y-3 xl:grid-cols-3   w-full  gird-rows-auto gap-2 md:mt-0 border shadow-md md:p-5 bg-white rounded-md antialiased">


                                    <div className=''><span>Image: </span>
                                        <div className="mt-1"><img src={`http://localhost:4000/${data.image}`} alt="image" srcset="" className='border w-24 h-24 p-2 rounded' /></div>
                                    </div>
                                    <div><span>Name: </span>{data.productName}</div>
                                    <div><span>SKU: </span>{data.sku}</div>
                                    <div><span>Buying Price:</span>{data.buyingprice}</div>
                                    <div><span>Selling Price: </span>{data.sellingprice}</div>
                                    <div><span>Category: </span>{data.category}</div>
                                    <div><span>Brand: </span>{data.brand}</div>
                                    <div><span>Barcode: </span>{data.barcode}</div>
                                    <div><span>Tax: </span>{data.tax}</div>
                                    <div><span>Unit: </span>{data.unit}</div>
                                    <div><span>Status: </span>{data.status}</div>
                                    <div><span>Can Purchasable: </span>{data.canpurchasable}</div>
                                    <div><span>Show Stock Out: </span>{data.showstockout}</div>
                                    <div><span>Refundable: </span>{data.refundable}</div>
                                    <div><span>Description: </span>{data.description}</div>
                                </div>





))}
                            </div>


                            {/* -----------From End-------------------- */}


                        </div>

                    </div>

                    {/* ----------End View---------- */}

                </div>

            </section>

        </>
    )
}

export default ViewProducts
