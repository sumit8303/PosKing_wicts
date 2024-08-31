
"use client";
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import axios from 'axios'



const AddProducts = () => {

    let navigation = useNavigate()
    let [showCategory , setShowCategory] = useState([])


    let [productName, setproductName] = useState('');
    let [sku, setSku] = useState('');
    let [category, setCategory] = useState('');
    let [barcode, setBarcode] = useState('');
    let [buyingprice, setbuyingPrice] = useState('');
    let [sellingprice, setsellingPrice] = useState('');
    let [tax, setTax] = useState('');
    let [brand, setBrand] = useState('');
    let [status, setStatus] = useState('');
    let [canpurchasable, setcanPurchasable] = useState('');
    let [showstockout, setshowStockout] = useState('');
    let [refundable, setRefundable] = useState('');
    let [maximumpurchasequantity, setmaximumPurchaseQuantity] = useState('');
    let [lowstockquantitywarning, setlowStockQuantityWarning] = useState('');
    let [unit, setUnit] = useState('');
    let [weight, setWeight] = useState('');
    let [tags, setTags] = useState('');
    let [description, setDescription] = useState('');
    let [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = new FormData();
      user.append('image', image);
      user.append('productName', productName);
      user.append('sku', sku);
      user.append('category', category);
      user.append('barcode', barcode);
      user.append('buyingprice', buyingprice);
      user.append('sellingprice', sellingprice);
      user.append('tax', tax);
      user.append('brand', brand);
      user.append('status', status);
      user.append('canpurchasable', canpurchasable);
      user.append('showstockout', showstockout);
      user.append('refundable', refundable);
      user.append('maximumpurchasequantity', maximumpurchasequantity);
      user.append('lowstockquantitywarning', lowstockquantitywarning);
      user.append('unit', unit);
      user.append('weight', weight);
      user.append('tags', tags);
      user.append('description', description);

      
      try {
          await axios.post('http://localhost:4000/api/saveProduct', user, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
         
          navigation("/admin/products")
      } catch (error) {
          alert('Failed to upload product.');
      }
  }



  useEffect(()=>{
    getCategory()
}, [])
async function getCategory(){
    let result = await axios.get('http://localhost:4000/api/getCategory')
    setShowCategory(result.data)
}
    
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3'];



    const handleBlur = () => {
        // Delay hiding the dropdown to allow clicking on an option
        setTimeout(() => setIsDropdownOpen(false), 200);
    };

    const handleFocus = () => {
        setIsDropdownOpen(true);
    };

    const handleClick = (option) => {
        setSearchTerm(option);
        setIsDropdownOpen(false);
    };



    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /
                            <span className='text-gray font-semibold'>Products /</span>
                            <span className='text-gray font-semibold'>Add Products</span>
                        </div>
                    </div>

                    {/* ----------Start Form---------*/}

                    <div className=" ">

                        <div className=" mt-[2rem]  md:mt-0  shadow-md md:p-2 bg-white rounded-md antialiased ">

                            <div className="flex items-center justify-between  p-1  ">

                                <div className="md:flex  w-full justify-between ">

                                    <div className="p-2 text-xl font-semibold">Products</div>


                                </div>




                            </div>

                            <hr className='my-2' />
                            {/* ---------------------------------------------------- */}


                            {/* -----------From-------------------- */}

                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className="flex  justify-between  my-1 p-1  ">

                                    <div className="w-full">

                                        <div className="">

                                            {/* ---------------Start---------------------- */}

                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Name<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='productName'
                                                            value={productName}
                                                            onChange={(e)=>setproductName(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        SKU<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">

                                                        <div className=' flex justify-around  w-full  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 '>



                                                            <div className="relative  mx-auto  flex justify-around w-full   ">
                                                                <input
                                                                    type="text"
                                                                    name='sku'
                                                                    value={sku}
                                                                    onChange={(e)=>setSku(e.target.value)}
                                                                    onBlur={handleBlur}
                                                                    onFocus={handleFocus}
                                                                    placeholder=""
                                                                    className="w-full p-2 "
                                                                />

                                                            </div>

                                                            <MdOutlinePublishedWithChanges className="w-5 h-5 m-2 items-center text-gray-500 dark:text-gray-400" />



                                                        </div>

                                                    </div>
                                                </div>



                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Category<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                       
                                                        onChange={(e)=>setCategory(e.target.value)}>
                                                            <option>---Select Category---</option>
                                                            {showCategory.map((data)=>(
                                                                <option>{data.alltypecategory}</option>
                                                            ))}
                                                            
                                                            
                                                        </select>

                                                    </div>
                                                </div>






                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Barcode<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                       
                                                        onChange={(e)=>setBarcode(e.target.value)}>
                                                           <option>---Select Barcode---</option>
                                                            {showCategory.map((data)=>(
                                                                <option>{data.barcode}</option>
                                                            ))}
                                                        </select>

                                                    </div>
                                                </div>




                                            </div>

                                            {/* ------------------------------------- */}

                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Buying Price<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='buyingprice'
                                                            value={buyingprice}
                                                            onChange={(e)=>setbuyingPrice(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>



                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Selling Price<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='sellingprice'
                                                            value={sellingprice}
                                                            onChange={(e)=>setsellingPrice(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>





                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Tax<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                       
                                                        onChange={(e)=>setTax(e.target.value)}>
                                                            <option>---Select Tax---</option>
                                                            {showCategory.map((data)=>(
                                                                <option>{data.tax}</option>
                                                            ))}
                                                        </select>

                                                    </div>
                                                </div>



                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Brand<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        
                                                        onChange={(e)=>setBrand(e.target.value)}>
                                                            <option>---Select Brand---</option>
                                                            {showCategory.map((data)=>(
                                                                <option>{data.brand}</option>
                                                            ))}
                                                        </select>

                                                    </div>
                                                </div>




                                            </div>

                                            {/* ----------------------------------------- */}

                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Status<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 flex  justify-between items-center">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Active" type="radio"  value="Active" name="status"  onChange={(e)=>setStatus(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Active" className="ms-2 text-base font-medium text-gray">Active</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="Inactive" type="radio"  value="Inactive" name="status" onChange={(e)=>setStatus(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Inactive" className="ms-2 text-base font-medium text-gray">Inactive</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Can Purchasable<span className='text-success px-1'>*</span>
                                                    </label>

                                                    <div className="mt-2 flex  justify-between items-center ">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Yes" type="radio" value="Yes" name="canpurchasable" onChange={(e)=>setcanPurchasable(e.target.value)}   className='accent-success h-4 w-4 ' />
                                                            <label for="Yes" class="ms-2 text-base font-medium text-gray">Yes</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="No" type="radio" value="No" name="canpurchasable" onChange={(e)=>setcanPurchasable(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="No" class="ms-2 text-base font-medium text-gray">No</label>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Show Stock Out<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 flex  justify-between items-center ">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Enable" type="radio" value="Enable" name="showstockout" onChange={(e)=>setshowStockout(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Enable" class="ms-2 text-base font-medium text-gray">Enable</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="Disable" type="radio" value="Disable" name="showstockout" onChange={(e)=>setshowStockout(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Disable" class="ms-2 text-base font-medium text-gray">Disable</label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Refundable<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 flex  justify-between items-center ">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Yes" type="radio" value="Yes" name="refundable" onChange={(e)=>setRefundable(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Yes" class="ms-2 text-base font-medium text-gray">Yes</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="No" type="radio" value="No" name="refundable" onChange={(e)=>setRefundable(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="No" class="ms-2 text-base font-medium text-gray">No</label>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                            {/* ---------------------------------------------- */}





                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Maximum Purchase Quantity<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='maximumpurchasequantity'
                                                            value={maximumpurchasequantity}
                                                            onChange={(e)=>setmaximumPurchaseQuantity(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Low Stock Quantity Warning<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='lowstockquantitywarning'
                                                            value={lowstockquantitywarning}
                                                            onChange={(e)=>setlowStockQuantityWarning(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Unit<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        onChange={(e)=>setUnit(e.target.value)}>
                                                            <option>---Select Unit---</option>
                                                            {showCategory.map((data)=>(
                                                                <option>{data.unit}</option>
                                                            ))}
                                                        </select>

                                                    </div>
                                                </div>





                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Weight<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='weight'
                                                            value={weight}
                                                            onChange={(e)=>setWeight(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>



                                            </div>

                                            {/* --------------------------------------- */}

                                            <div className=" p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4  mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Tags<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='tags'
                                                            value={tags}
                                                            onChange={(e)=>setTags(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>

                                                {/* -------------------------Text Area Start------------------------------- */}


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Image<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="file"
                                                            accept='image/*'
                                                            onChange={(e)=>setImage(e.target.files[0])}
                                                        ></input>
                                                    </div>
                                                </div>
                                               

                                                    <div className='col-span-2'>
                                                        <label htmlFor="" className="text-base font-medium text-gray">
                                                            {' '}
                                                            Description<span className='text-success px-1'>*</span>
                                                        </label>
                                                        <div className="mt-2 ">

                                                            <textarea class="resize-none rounded-md overflow-hidden scroll-smooth overflow-y-scroll flex md:h-60 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            name='description' 
                                                            value={description} 
                                                            onChange={(e)=>setDescription(e.target.value)}></textarea>

                                                        </div>
                                                    </div>

                                                {/* -------------------------Text Area End--------------------------------- */}


                                            </div>
                                          
                                            {/* ------------------------End--------------------------------- */}



                                            {/* ------------Button----------- */}
                                            <div className="p-3 grid md:grid-cols-2 md:gap-5 xl:grid-cols-4 md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                                                <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                                    <FaCircleCheck className=' ' />
                                                    <button type="submit" >
                                                        Save
                                                    </button>
                                                </div>

                                                <Link to="/admin/products" className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                    X
                                                    <button type="reset" >
                                                        Clear
                                                    </button>
                                                </Link>


                                            </div>
                                            {/* -----------Button End--------------- */}
                                        </div>


                                    </div>
                                </div>
                            </form>




                            {/* -----------From End-------------------- */}


                        </div>

                    </div>


                    {/* ----------End Form---------- */}

                </div>

            </section>

        </>
    )
}

export default AddProducts
