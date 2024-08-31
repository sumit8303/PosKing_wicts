
import React, { useEffect, useState } from 'react'
// import { Rating } from "@material-tailwind/react";
import product from '../../../images/Products/products.avif'
import Rating from '../../../components/Rating';
import axios from 'axios';


const TopProducts = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let result = await axios.get("http://localhost:4000/api/getproductFilter");
    setData(result.data);
    console.log(result.data)
    }

  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };



  return (
    <>


      <section>
        <div className="p-5 ">

          <div className=" border shadow-md p-2 bg-white rounded-md antialiased ">

            <div className="flex items-center justify-between my-1 p-1  ">


              <div className="">
                <div className=" p-2 text-xl  font-semibold  ">
                  Top Products
                </div>
              </div>



            </div>

            <hr />
            {/* ---------------------------------------------------- */}

            <div className="flex  justify-between  my-1 p-1  ">


            </div>

            <div className=" grid md:grid-cols-2  sm:grid-cols-1  md:gap-5 xl:grid-cols-4  mx-auto  my-1 p-1">

              {
                data.map((data) => (

                  <div className=" lg:w-64 lg:h-96  mx-auto relative p-2 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                      <img
                        src={`http://localhost:4000/${data.image}`}
                        alt="Product"
                        className="lg:h-64 lg:w-64 object-fit object-cover rounded-xl"
                      />
                      <div className="px-4 py-3 lg:w-64">
                        <p className="text-lg font-bold text-black truncate block capitalize">
                          {data.productName}
                        </p>

                        <span className=" justify-between   flex  items-center h-2 py-3 text-black ">

                          <Rating totalStars={5}
                            initialRating={rating}
                            onRatingChange={handleRatingChange} />
                          
                        </span>

                        <div className="flex items-center">
                          <p className="text-lg font-semibold text-black cursor-auto my-3">
                            ${data.sellingprice}
                          </p>
                          <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">${data.productDiscount}</p>
                          </del>
                          <div className="ml-auto">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              fill="currentColor"
                              className="bi bi-bag-plus"
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
                      <div className=" absolute top-5 left-5  bg-black text-white rounded-[5rem] p-1 text-center w-[7rem] text-[.9rem] font-medium"> {data.flashSale} </div>
                    </a>
                  </div>


                ))

              }




              {/* ----------------Product End-------------------- */}


            </div>

          </div>

        </div>
      </section>


    </>
  )
}

export default TopProducts
