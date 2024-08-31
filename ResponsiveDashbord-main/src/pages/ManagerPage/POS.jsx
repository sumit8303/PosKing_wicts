import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import posImage from '../../images/POS/empty-cart.gif'
import TopProducts from './posDashbord/Dashbord/TopProducts';
import product from '../../images/Products/products.avif'
import Rating from '../../components/Rating';
import { Star, ChevronDown } from 'lucide-react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const POS = () => {

  const Products = [

    {
      id: 1,
      name: "Product Name1",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      image: product
    },
    {
      id: 2,
      name: "Product Name2",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      image: product
    },
    {
      id: 3,
      name: "Product Name3",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      rating: 5,
      image: product
    },
    {
      id: 4,
      name: "Product Name4",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      rating: 5,
      image: product
    },
    {
      id: 5,
      name: "Product Name5",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      rating: 5,
      image: product
    },
    {
      id: 6,
      name: "Product Name6",
      productPrice: "149",
      productDiscount: "199",
      flashSale: "Flash Sale",
      rating: 5,
      image: product
    }
  ]
  // 'bg-orange-400', 'bg-pink-400', 'bg-violet-600', 'bg-red-500'
  const myColor = [
    {
      colorName: "orange",
      colorCode: "bg-orange-400"
    },
    {
      colorName: "pink",
      colorCode: "bg-pink-400"
    },
    {
      colorName: "violet",
      colorCode: "bg-violet-600"
    },
    {
      colorName: "red",
      colorCode: "bg-orange-500"
    },
  ]

  const [rating, setRating] = useState(false);

  const [showModal, setShowModal] = React.useState(false);

  const [openModal, setOpenModal] = useState(false);

  // Initial state for cart
  const [cart, setCart] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowModal(false)
  };


  const showData = (items) => {
    setShowModal(true)
    setSelectedProduct(items,);
  }


  return (
    <>

      <section>
        <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

          <div className="   relative  top-5 my-5 mt-7  antialiased">


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
                          <input type="search" id="default-search" className="flex h-10  bg-white rounded-md w-full border border-gray bg-transparent md:px-[2.2rem] px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Search Here..." />
                        </div>
                      </div>
                    </div>


                    <div>

                      <div className="mt-2">
                        <select className="flex h-10 w-full rounded-md border border-gray bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                          <option selected className='text-gray-400 '>Select Category</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>

                      </div>
                    </div>




                    <div>
                      <div className="mt-2">
                        <select className="flex h-10 w-full rounded-md border border-gray bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                          <option selected className='text-gray-400 '>Select Brand</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>

                      </div>
                    </div>



                  </div>

                </form>


                <div className="p-2">

                  <div className=" grid md:grid-cols-1  sm:grid-cols-1 gap-5 xl:grid-cols-3  m-auto  my-1 p-1">

                    {
                      Products.map((items, index) => (

                        <div key={index} onClick={() => showData(items)} className=" lg:w-55 lg:h-80 md:w-56  m-auto relative p-2 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                          <a href="#">
                            <img
                              src={items.image}
                              alt="Product"
                              className=" object-fit  object-cover rounded-xl"
                            />
                            <div className="px-4 py-3 lg:w-64">
                              <p className="text-md font-bold text-black truncate block capitalize">
                                {items.name}
                              </p>

                              <span className=" justify-between   flex  items-center h-2 py-3 text-sm text-black ">

                                <Rating totalStars={5}
                                  initialRating={rating}
                                  onRatingChange={handleRatingChange} />
                                <span>{rating}</span>
                              </span>

                              <div className="flex items-center  md:w-3/4 mt-2 w-full ">
                                <p className="text-md font-semibold text-black cursor-auto ">
                                  ${items.productPrice}
                                </p>
                                <del>
                                  <p className="text-sm text-gray-600 cursor-auto ml-2">${items.productDiscount}</p>
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
                            <div className=" absolute top-5 left-5  bg-black text-white rounded-[5rem] p-1 text-center w-[7rem] text-[.9rem] font-medium"> {items.flashSale} </div>
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

                      <div className="flex justify-between w-full gap-3">
                        <select className="flex outline-0 bg-white w-full  border border-gray rounded-md text-gray h-11 p-2  text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:success-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                          <option selected className='text-gray-400 '>Select Customer</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>

                        <Link to='/Manager/pos/addcustomers'>
                          <button
                            type="button"
                            className="inline-flex mb-2 items-center h-11 justify-center rounded-[.5rem] bg-success px-3.5 py-2.5 font-semibold leading-7 text-white "
                          >
                            Add
                          </button>
                        </Link>


                      </div>


                      <div className="w-full  p-1 overflow-hidden lg:h-1/2">

                        {cart.length === 0 ? (
                          <div className="">
                            <img src={posImage} alt="posImage" srcset="" className='' />
                          </div>
                        ) : (
                          <div className="  h-75 overflow-x-hidden overflow-y-auto">
                            <ul className=" ">
                              {cart.map((data, index) => (

                                <li key={index} className="">

                                  <div className=" flex w-full   gap-1">
                                    <div className=" text-heading mb-2 mr-2  flex h-9 w-9 mt-2 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-18 md:w-18 md:text-sm">
                                      <img src={data.image} alt={data.name} className='block h-full w-full rounded' />
                                    </div>
                                    <div className=" w-full space-y-[0.1rem]">
                                      <div className="text-md">{data.name}</div>
                                      <span className='flex gap-2 text-xs'> <div className="">White</div> | <div className="">S</div> </span>
                                      <div className='text-sm'>${data.productPrice}</div>
                                      <div className='flex w-full justify-between'>
                                        <div className="flex gap-2 border justify-center items-center  rounded-xl">
                                          <span className='bg-lightsuccess w-4 h-4 flex justify-center mx-1 text-white items-center rounded-full font-medium'> - </span> <span className='font-bold'>2</span> <span className='bg-lightsuccess mx-1 w-4 h-4 flex justify-center text-white items-center rounded-full font-medium'> + </span>
                                        </div>
                                        <div className="flex justify-center items-center gap-1 bg-red-100 rounded-xl px-3 text-red-500 text-sm"> <MdOutlineDeleteOutline/> Remove </div>
                                      </div>

                                    </div>
                                  </div>



                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>

                      <div className="flex justify-between w-full">
                        <select className="flex outline-0 bg-white   border border-gray  text-gray h-11 p-2  text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:success-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                          <option selected className='text-gray-400 '>Persentage</option>
                          <option value="US">Fixed</option>
                        </select>
                        <div className="">
                          <input
                            className="flex outline-0 bg-white w-full  border border-gray  text-gray h-11 p-2  text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:success-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder='Add Discount'
                          ></input>
                        </div>

                        <button
                          type="button"
                          className="inline-flex mb-2 items-center h-11 justify-center bg-success px-3.5 py-2.5 font-semibold leading-7 text-white "
                        >
                          Apply
                        </button>


                      </div>

                      <div>
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

      {showModal && selectedProduct && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="mx-auto w-6/7 lg:w-5/6  h-4/5 lg:h-auto px-4 md:px-8 ">
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
                    <div className="mx-auto flex p-2  justify-around flex-wrap items-center py-5 w-full lg:w-4/5">
                      <img
                        alt="Nike Air Max 21A"
                        className="h-64 w-full rounded object-cover  hover:shadow-lg  lg:h-96  lg:w-1/2 "
                        src={selectedProduct.image}
                      />
                      <div className="mt-6 w-full  lg:mt-0 lg:w-1/2 lg:pl-10">

                        <div className=" border-b border-gray-300 ">
                          <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                            {selectedProduct.name}
                          </h2>
                        </div>
                        <div className="border-b border-gray-300 pb-3 mt-4 ">
                          <div className="mb-4">
                            <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                              size
                            </h3>
                            <ul className="colors -mr-3 flex flex-wrap">
                              {['S', 'M', 'L', 'XL'].map((size) => (
                                <li
                                  key={size}
                                  className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm "
                                >
                                  {size}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mb-4 ">
                            <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                              color
                            </h3>
                            <ul className="colors -mr-3 flex flex-wrap">
                              {myColor.map((color, index) => (
                                <li
                                  key={index}
                                  className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm"
                                >
                                  <span className={`block h-full w-full rounded ${color.colorCode}`} />
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                        <div className="mt-5 flex items-center ">
                          <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                            ${selectedProduct.productPrice}
                          </div>
                          <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                            ${selectedProduct.productDiscount}
                          </span>
                        </div>
                        <div className="space-s-4 3xl:pr-48 lg:flex space-y-3 md:space-y-0 items-center gap-2  border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                          <div className="group flex my-2 lg:my-0 h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                            <button
                              className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                              disabled
                            >
                              +
                            </button>
                            <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                              1
                            </span>
                            <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                              -
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => addToCart(selectedProduct)}
                            className="h-11 w-full rounded-md bg-success px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            Add to cart
                          </button>
                        </div>


                      </div>
                    </div>
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

export default POS
