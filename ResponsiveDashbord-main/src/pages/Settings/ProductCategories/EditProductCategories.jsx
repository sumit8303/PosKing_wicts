import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import axios from 'axios';



const EditProductCategories = () => {
    let navigation = useNavigate()


    let [showCategory, setShowCategory] = useState([])


    let { id } = useParams()
    let [name, setName] = useState('');
    let [parentCategory, setParentCategory] = useState('');
    let [status, setStatus] = useState('');
    let [description, setDescription] = useState('');
    let [image, setImage] = useState(null);

    useEffect(() => {
        viewSettingProduct()
    }, [])

    async function viewSettingProduct() {
        let response = await axios.get(`http://localhost:4000/api/viewSettingProduct/${id}`)
        setName(response.data[0].name)
        setParentCategory(response.data[0].parentCategory)
        setStatus(response.data[0].status)
        setDescription(response.data[0].description)
        setImage(response.data[0].image)
       
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = new FormData();
        user.append('image', image);
        user.append('name', name);
        user.append('parentCategory', parentCategory);
        user.append('status', status);
        user.append('description', description);
        try {
            await axios.put(`http://localhost:4000/api/updateCategory/${id}`, user, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigation("/admin/settings")
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



    return (
        <>

            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /  <span className='text-gray font-semibold'>Settings /</span>
                            <span className='text-gray font-semibold'> Product Categories
                            </span>
                        </div>
                    </div>

                    {/* ----------Start---------- */}


                    <div className=" ">

                        <div className=" mt-[2rem]  md:mt-0  shadow-md md:p-2 bg-white rounded-md antialiased ">

                            <div className="flex items-center justify-between  p-1  ">

                                <div className="md:flex  w-full justify-between ">

                                    <div className="p-2 text-xl font-semibold">Edit</div>

                                    <div className="md:flex md:space-y-0 space-y-2 mx-auto md:mx-0  gap-4 ">

                                        <Link to="/admin/settings/" className="px-3 flex justify-around bg-gray text-white rounded-full gap-2 items-center md:py-1.5 py-1 font-larze hover:bg-black focus:ring-4 focus:outline-none  rounded-md ">
                                            <span className='text-white'>X</span>
                                        </Link>

                                    </div>

                                </div>

                            </div>



                            {/* -----------From-------------------- */}
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className="flex  justify-between  my-1 p-1  ">

                                    <div className="w-full">

                                        <div className="">

                                            {/* ---------------Start---------------------- */}

                                            <div className=" p-3 grid md:grid-cols-3 sm:grid-cols-1 md:gap-5 mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Name<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                            type="text"
                                                            name='name'
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        ></input>
                                                    </div>
                                                </div>


                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Parent Category
                                                        <span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2">
                                                        <select className="flex h-10 w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" onChange={(e) => setParentCategory(e.target.value)} value={parentCategory} name='parentCategory'>
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
                                                        Status<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 flex  justify-between items-center ">
                                                        <div class="flex w-full items-center  mb-4">
                                                            <input id="Active" type="radio" value="Active" name="status" onChange={(e)=>setStatus(e.target.value)} checked= {status === "Active"} className='accent-success h-4 w-4 ' />
                                                            <label for="Active" class="ms-2 text-base font-medium text-gray">Active</label>
                                                        </div>
                                                        <div class="flex w-full items-center mb-4 ">
                                                            <input id="Inactive" type="radio" value="Inactive" name="status" onChange={(e)=>setStatus(e.target.value)} checked= {status === "Inactive"} className='accent-success h-4 w-4 ' />
                                                            <label for="Inactive" class="ms-2 text-base font-medium text-gray">Inactive</label>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            {/* ------------------------------------------------------------ */}
                                            <div className=" p-3 grid md:grid-cols-3 sm:grid-cols-1 md:gap-5 mx-auto ">

                                                <div>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Image (640px,960px)                                                        <span className='text-success px-1'>*</span>
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

                                                <div className='md:col-span-3'>
                                                    <label htmlFor="" className="text-base font-medium text-gray">
                                                        {' '}
                                                        Description<span className='text-success px-1'>*</span>
                                                    </label>
                                                    <div className="mt-2 ">

                                                        <textarea placeholder='Insert content here...' className="resize-none w-full rounded-md overflow-hidden scroll-smooth overflow-y-scroll flex md:h-60 md:w-full rounded-md border border-gray bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-success focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        name='description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                                                       

                                                    </div>
                                                </div>


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

                                                <div className="px-3 flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-gray  focus:ring-4 focus:outline-none  rounded-md ">
                                                    X
                                                    <button type="reset" >
                                                        Clear
                                                    </button>
                                                </div>


                                            </div>
                                            {/* -----------Button End--------------- */}
                                        </div>


                                    </div>
                                </div>
                            </form>
                            {/* -----------From End-------------------- */}




                        </div>



                    </div>

                    {/* ----------End-------------------- */}
                </div>


            </section>


        </>
    )
}

export default EditProductCategories
