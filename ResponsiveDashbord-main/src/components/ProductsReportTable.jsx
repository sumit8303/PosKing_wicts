import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


// Dummy data for products
const dummyProducts = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  category: `Product ${index + 1}`,
  sold: `Product ${index + 1}`
}));

const ITEMS_PER_PAGE = 10;

const ProductsReportTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = dummyProducts.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(dummyProducts.length / ITEMS_PER_PAGE);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (

<section>  
    <div className='bg-lightsuccess relative rounded-md overflow-x-scroll   '>
      <table className=' text-sm w-full  table-auto text-left text-gray-500'>
        <thead className='text-xs  text-white text-gray-700 uppercase bg-gray-300'>
          <tr className=''>
            <th scope="col" class="px-6 py-3" >Name</th>
            <th scope="col" class="px-6 py-3" >Category</th>
            <th scope="col" class="px-6 py-3" >Sold Quantity</th>
          </tr>
        </thead>
        <tbody className=' '>
          {currentProducts.map((product) => (
            <tr key={product.id} className='bg-white border-b'>
              <td className='px-6 py-4'>{product.name}</td>
              <td className='px-6 py-4'>{product.category}</td>
              <td className='px-6 py-4'>{product.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>




<div className="flex w-full p-3 justify-between ">
<div className='text-white'>
{`Showing ${startIndex+1} to ${endIndex} of ${dummyProducts.length} entries`}
</div>

      <div className="pagination flex items-center justify-center ">



        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} 
        className="mx-1  text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </button>




        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${index + 1 === currentPage ? 'active bg-success text-white' : ''}`}  
          >
            {index + 1}
          </button>
        ))}



      
        <button
        onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} 
        className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </button>


      </div>


</div>




    </div>
    </section>

  );
};

export default ProductsReportTable;
