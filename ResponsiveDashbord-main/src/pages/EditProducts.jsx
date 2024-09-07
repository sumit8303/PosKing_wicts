"use client";
import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import axios from 'axios';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';


const EditProducts = () => {

    let navigation = useNavigate()


    let [showCategory, setShowCategory] = useState([])


    let { id } = useParams()
    let [productName, setproductName] = useState('');
    let [sku, setSku] = useState('');
    let [category, setCategory] = useState('');
    let [barcode, setBarcode] = useState('');
    let [buyingprice, setbuyingPrice] = useState('');
    let [sellingprice, setsellingPrice] = useState('');
    let [tax, setTax] = useState('');
    let [brand, setBrand] = useState('');
    let [status, setStatus] = useState('');
    let [unit, setUnit] = useState('');
    let [canpurchasable, setcanPurchasable] = useState('');
    let [showstockout, setshowStockout] = useState('');
    let [refundable, setRefundable] = useState('');
    let [maximumpurchasequantity, setMaximumPurchaseQuantity] = useState('');
    let [lowstockquantitywarning, setLowStockQuantityWarning] = useState('');
    let [weight, setWeight] = useState('');
    let [tags, setTags] = useState('');
    let [description, setDescription] = useState('');
    let [image, setImage] = useState(null);

    useEffect(() => {
        viewData()
    }, [])

    async function viewData() {
        let response = await axios.get(`http://localhost:4000/api/viewProduct/${id}`)
        setproductName(response.data[0].productName)
        setSku(response.data[0].sku)
        setCategory(response.data[0].category)
        setBarcode(response.data[0].barcode)
        setbuyingPrice(response.data[0].buyingprice)
        setsellingPrice(response.data[0].sellingprice)
        setTax(response.data[0].tax)
        setBrand(response.data[0].brand)
        setStatus(response.data[0].status)
        setUnit(response.data[0].unit)
        setcanPurchasable(response.data[0].canpurchasable)
        setshowStockout(response.data[0].showstockout)
        setRefundable(response.data[0].refundable)
        setMaximumPurchaseQuantity(response.data[0].maximumpurchasequantity)
        setLowStockQuantityWarning(response.data[0].lowstockquantitywarning)
        setWeight(response.data[0].weight)
        setTags(response.data[0].tags)
        setDescription(response.data[0].description)
    }

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
        user.append('weight', weight);
        user.append('tags', tags);
        user.append('unit', unit);
        user.append('description', description);
        try {
            await axios.put(`http://localhost:4000/api/updateProduct/${id}`, user, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigation("/admin/products")
        } catch (error) {
            alert('Failed to upload product.');
        }
    }

    
    useEffect(() => {
        getCategory()
    }, [])
    async function getCategory() {
        let result = await axios.get(`http://localhost:4000/api/getCategory`)
        setShowCategory(result.data)
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        setIsDropdownOpen(true);
    };

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
                            <span className='text-gray font-semibold'>Edit Products</span>
                        </div>
                    </div>

                    {/* ----------Start Form---------*/}


                    <div className=" ">

                        <div className=" mt-[2rem]  md:mt-0  shadow-xl md:p-2 bg-white rounded-md antialiased ">

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
                                                            onChange={(e) => setproductName(e.target.value)}
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

                                                                    onBlur={handleBlur}
                                                                    onFocus={handleFocus}
                                                                    placeholder=""
                                                                    className="w-full p-2 "
                                                                    name='sku'
                                                                    value={sku}
                                                                    onChange={(e) => setSku(e.target.value)}
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
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 " name='category' value={category}
                                                            onChange={(e) => setCategory(e.target.value)}>
                                                            <option>---Select Category---</option>
                                                            {showCategory.map((data) => (
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
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name='barcode' value={barcode}
                                                            onChange={(e) => setBarcode(e.target.value)}>
                                                            <option>---Select Barcode---</option>
                                                            {showCategory.map((data) => (
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
                                                            className="flex h-10 rounded-md w-full border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='buyingprice'
                                                            value={buyingprice}
                                                            onChange={(e) => setbuyingPrice(e.target.value)}
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
                                                            onChange={(e) => setsellingPrice(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>





                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Tax<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name='tax' value={tax}
                                                            onChange={(e) => setTax(e.target.value)}>
                                                            <option>---Select Tax---</option>
                                                            {showCategory.map((data) => (
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
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name='brand' value={brand}
                                                            onChange={(e) => setBrand(e.target.value)}>
                                                            <option>---Select Brand---</option>
                                                            {showCategory.map((data) => (
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
                                                    <div className="mt-2 flex  justify-between items-center ">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Active" type="radio" value="Active" name="status" checked={status === "Active"} onChange={(e) => setStatus(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Active" class="ms-2 text-base font-medium text-gray">Active</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="Inactive" type="radio" value="Inactive" name="status" checked={status === "Inactive"} onChange={(e) => setStatus(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Inactive" class="ms-2 text-base font-medium text-gray">Inactive</label>
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
                                                            <input id="Yes" type="radio" value="Yes" name="canpurchasable" checked={canpurchasable === "Yes"} onChange={(e) => setcanPurchasable(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Yes" class="ms-2 text-base font-medium text-gray">Yes</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="No" type="radio" value="No" name="canpurchasable" checked={canpurchasable === "No"} onChange={(e) => setcanPurchasable(e.target.value)} className='accent-success h-4 w-4 ' />
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
                                                            <input id="Enable" type="radio" value="Enable" name="showstockout" checked={showstockout === "Enable"} onChange={(e) => setshowStockout(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Enable" class="ms-2 text-base font-medium text-gray">Enable</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="Disable" type="radio" value="Disable" name="showstockout" checked={showstockout === "Disable"} onChange={(e) => setshowStockout(e.target.value)} className='accent-success h-4 w-4 ' />
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
                                                            <input id="Yes" type="radio" value="Yes" name="refundable" checked={refundable === "Yes"} onChange={(e) => setRefundable(e.target.value)} className='accent-success h-4 w-4 ' />
                                                            <label for="Yes" class="ms-2 text-base font-medium text-gray">Yes</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="No" type="radio" value="No" name="refundable" checked={refundable === "No"} onChange={(e) => setRefundable(e.target.value)} className='accent-success h-4 w-4 ' />
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
                                                            onChange={handleChange}
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
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Unit<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name='unit' value={unit}
                                                            onChange={(e) => setUnit(e.target.value)}>
                                                            <option>---Select Unit---</option>
                                                            {showCategory.map((data) => (
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
                                                            onChange={handleChange}
                                                        ></input>
                                                    </div>
                                                </div>



                                            </div>

                                            {/* --------------------------------------- */}

                                            <div className="  p-3 grid md:grid-cols-2 sm:grid-cols-1  md:gap-5 xl:grid-cols-4  mx-auto">

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
                                                            onChange={handleChange}
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
                                                            onChange={(e) => setImage(e.target.files[0])}
                                                        ></input>
                                                    </div>
                                                </div>


                                                <div className='md:col-span-2 '>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Description<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 ">

                                                        <textarea placeholder='Insert content here...' className="resize-none flex rounded-md overflow-hidden scroll-smooth sm:h-10 overflow-y-scroll flex md:h-60 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" name='description'
                                                            value={description}
                                                            onChange={(e) => setDescription(e.target.value)}></textarea>

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

export default EditProducts