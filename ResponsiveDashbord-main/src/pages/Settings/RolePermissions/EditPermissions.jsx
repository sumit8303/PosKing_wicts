import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";



const tableData = [
    "Dashboard",
    "Products",
    "Purchase",
    "Damages",
    "Stock",
    "POS",
    "POS Orders",
    "Administrators",
    "Customers",
    "Employees",
    "Sales Report",
    "Products Report",
    "Credit Balance Report",
    "Settings",
];


const EditPermissions = () => {

    const [checkedItems, setCheckedItems] = useState({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (page, action) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [page]: {
                ...prevState[page],
                [action]: !prevState[page]?.[action],
            },
        }));
    };

    const handleSelectAllChange = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        const newCheckedItems = {};

        tableData.forEach((page) => {
            newCheckedItems[page] = {
                create: newSelectAll,
                update: newSelectAll,
                delete: newSelectAll,
                view: newSelectAll,
            };
        });

        setCheckedItems(newCheckedItems);
    };



    return (
        <>
            <section>
                <div className="  text-neutral-600 mx-auto text-md antialiased font-normal  p-5   ">

                    <div className=" p-2 relative top-5 my-5 mt-5 antialiased">
                        <div className="text-xl md:py-5 py-3">Dashboard /  <span className='text-gray font-semibold'>Settings / </span>
                            <span className='text-gray font-semibold'> Role & Permissions / <span className="">View</span>
                            </span>
                        </div>

                    </div>
                    {/* ----------Start---------- */}

                    <div className=" bg-white p-5 rounded shadow-md">


                        <div className="md:flex  w-full justify-between ">

                            <div className=" p-2 text-xl">Role & Permissions <span className="text-red-400 w-full ">(Admin)</span></div>

                            <div className="md:flex md:space-y-0 space-y-2 mx-auto md:mx-0  gap-4 ">

                                <Link to="/admin/settings/" className="px-3 flex justify-around bg-gray text-white rounded-full gap-2 items-center md:py-1.5 py-1 font-larze hover:bg-black focus:ring-4 focus:outline-none  rounded-md ">
                                    <span className='text-white'>X</span>
                                </Link>

                            </div>

                        </div>
                        <hr className='my-4' />


                        <div className="md:flex ">

                            <div className="container mx-auto overflow-x-scroll ">
                                <table className="min-w-full bg-white ">
                                    <thead className="my-2 shadow">
                                        <tr>
                                            <th className="py-2 px-4 border-b">#</th>
                                            <th className="py-2 px-4 border-b">Page</th>
                                            <th className="py-2 px-4 border-b">Create</th>
                                            <th className="py-2 px-4 border-b">Update</th>
                                            <th className="py-2 px-4 border-b">Delete</th>
                                            <th className="py-2 px-4 border-b">View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((page, index) => (
                                            <tr key={page}>
                                                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                                                <td className="py-2 px-4 border-b text-center">{page}</td>
                                                <td className="py-2 px-4 border-b text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={checkedItems[page]?.create || false}
                                                        onChange={() => handleCheckboxChange(page, "create")}
                                                    />
                                                </td>
                                                <td className="py-2 px-4 border-b text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={checkedItems[page]?.update || false}
                                                        onChange={() => handleCheckboxChange(page, "update")}
                                                    />
                                                </td>
                                                <td className="py-2 px-4 border-b text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={checkedItems[page]?.delete || false}
                                                        onChange={() => handleCheckboxChange(page, "delete")}
                                                    />
                                                </td>
                                                <td className="py-2 px-4 border-b text-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={checkedItems[page]?.view || false}
                                                        onChange={() => handleCheckboxChange(page, "view")}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* ------------Button----------- */}
                        <div className="p-3 grid grid-cols-1 md:gap-5  md:w-fit w-full space-y-3 md:space-y-0  me-auto">

                            <div className="px-3 w-full flex justify-around  gap-2 items-center py-1.5  font-larze text-white bg-success  focus:ring-4 focus:outline-none  rounded-md ">
                                <FaCircleCheck className=' ' />
                                <button type="button" >
                                    Save
                                </button>
                            </div>

                        </div>
                        {/* -----------Button End--------------- */}


                    </div>
                    {/* ----------End---------- */}
                </div>
            </section>
        </>
    )
}

export default EditPermissions
