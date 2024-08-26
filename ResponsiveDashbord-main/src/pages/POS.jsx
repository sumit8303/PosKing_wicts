import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import posImage from '../images/POS/empty-cart.gif'
import TopProducts from './posDashbord/Dashbord/TopProducts';
import product from '../images/Products/products.avif'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import axios from 'axios';

const POS = () => {

  const [data, setData] = useState([])
  const [records, setRecords] = useState([])
  const [showCategory, setShowCategory] = useState([])


  useEffect(() => {
    axios.get("http://localhost:4000/api/getproductFilter")
      .then(res => {
        setData(res.data)
        setRecords(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  const filter = (event) => {
    setRecords(data.filter(f => f.productName.toLowerCase().includes(event.target.value)))
  }
 


  useEffect(() => {
    getCategory()

  }, [])
  async function getCategory() {
    let result = await axios.get(`http://localhost:4000/api/getCategory`)
    setShowCategory(result.data)
  }






  const [rating, setRating] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };



  return (
    <>

      <section>
        <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

          <div className=" p-2  relative  top-5 my-5 mt-5  antialiased">


            <div className="  lg:flex gap-5  space-y-4  md:space-y-0  w-full justify-between ">

              <div className=" lg:w-4/6 w-full  ">

                <form action="" method="post">
                  <div className=" p-3 grid md:grid-cols-1 sm:grid-cols-1 md:gap-5 lg:grid-cols-3  mx-auto ">

                    <div>

                      <div className="mt-2">
                        <div className="relative ">
                          <div className="absolute inset-y-0 start-0 flex items-center  ps-3 pointer-events-none">
                            <svg className="md:w-4  md:h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                          </div>
                          <input type="search" id="default-search" className="flex h-10  bg-white rounded-md w-full border border-gray bg-transparent md:px-[2.2rem] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" onChange={filter} placeholder="Search Here..." />

                        </div>
                      </div>
                    </div>


                    <div>
                      <div className="mt-2">
                        <select
                          className="flex h-10 w-full rounded-md border border-gray bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                         
                        >
                          <option value="">---Select Category---</option>
                          {showCategory.map((data) => (
                            <option>{data.alltypecategory}</option>
                          ))}
                        </select>
                      </div>
                    </div>




                    <div>
                      <div className="mt-2">
                        <select className="flex h-10 w-full rounded-md border border-gray bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option>---Select Brand---</option>
                          {showCategory.map((data) => (
                            <option>{data.brand}</option>
                          ))}
                        </select>

                      </div>
                    </div>



                  </div>

                </form>


                <div className="p-2">


                  <div className=" grid md:grid-cols-1  sm:grid-cols-1 gap-5 xl:grid-cols-3  m-auto  my-1 p-1">

                    {
                      records.map((d) => (

                        <div className=" lg:w-55 lg:h-80 md:w-56  m-auto relative p-2 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                          <a href="#">
                            <img
                              src={`http://localhost:4000/${d.image}`}
                              alt="Product"
                              className=" object-fit  object-cover rounded-xl"
                            />
                            <div className="px-4 py-3 lg:w-64">
                              <p className="text-md font-bold text-black truncate block capitalize">
                                {d.productName}
                              </p>

                              <span className=" justify-between   flex  items-center h-2 py-3 text-sm text-black ">

                                <Rating totalStars={5}
                                  initialRating={rating}
                                  onRatingChange={handleRatingChange} />
                                <span>{rating}</span>
                              </span>

                              <div className="flex items-center  md:w-3/4 mt-2 w-full ">
                                <p className="text-md font-semibold text-black cursor-auto ">
                                  ${d.sellingprice}
                                </p>
                                <del>
                                  <p className="text-sm text-gray-600 cursor-auto ml-2">${d.productDiscount}</p>
                                </del>
                                <div className="ml-auto">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    fill="currentColor"
                                    className="bi bi-bag-plus text-sm"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                    />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className=" absolute top-5 left-5  bg-black text-white rounded-[5rem] p-1 text-center w-[7rem] text-[.9rem] font-medium"> {d.flashSale} </div>
                          </a>
                        </div>


                      ))

                    }




                    {/* ----------------Product End-------------------- */}


                  </div>




                </div>











              </div>

              <div className=" lg:w-2/6  w-full    mx-auto    ">

                <div className="  ">


                  <div className=" md:w-[350px] mt-5 md:h-full mx-auto lg:fixed  grid md:grid-cols-1  md:gap-0 xl:grid-cols-1  shadow-sm   justify-items-center  bg-white rounded-t-md     ">

                    <div className="p-2  ">




                      <div className="flex justify-between gap-3">
                        <select className="flex outline-0 bg-white w-full  border border-gray rounded-md text-gray h-11 p-2  text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:success-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                          <option selected className='text-gray-400 '>Select Customer</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>

                        <Link to='/admin/pos/addcustomers'>
                          <button
                            type="button"
                            className="inline-flex mb-2 items-center h-11 justify-center rounded-[.5rem] bg-success px-3.5 py-2.5 font-semibold leading-7 text-white "
                          >
                            Add
                          </button>
                        </Link>


                        {/* -----------------------Add Data start------------------------------*/}
                        {/* <!-- Main modal --> */}



                        {/* <!-- Main End --> */}
                        {/* -----------------------Add Data End------------------------------- */}


                      </div>




                      <div className=" ">


                        <div className="py-2 ">
                          <img src={posImage} alt="posImage" srcset="" className='p-[3rem]' />
                        </div>

                        <div className="px-2 text-md">

                          <div className=" text-gray-900 flex mb-1 justify-between">
                            Sub Total <span className=''>$0.00</span>
                          </div>
                          <div className=" text-gray-400 mb-1 flex justify-between">
                            Tax <span>$0.00</span>
                          </div>
                          <div className=" text-gray-400 mb-1 flex justify-between">
                            Discount <span>$0.00</span>
                          </div>
                          <div className=" text-gray-400 mb-1 flex justify-between">
                            Total <span>$0.00</span>
                          </div>

                        </div>

                      </div>







                    </div>



                  </div>

                </div>






              </div>



            </div>



          </div>







        </div>
      </section>



    </>
  )
}

export default POS
