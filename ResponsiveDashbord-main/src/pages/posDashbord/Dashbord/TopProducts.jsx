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
                          
                        </div>

                        <div className=" absolute top-5 left-5  bg-black text-white rounded-[5rem] p-1 text-center w-[7rem] text-[.9rem] font-medium"> {data.flashSale} </div>
                      </div>
                      
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
