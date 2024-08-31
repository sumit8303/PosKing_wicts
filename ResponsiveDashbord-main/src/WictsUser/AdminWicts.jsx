import React from 'react'
import {Outlet} from 'react-router-dom'
import WictsSidedar from '../components/WictsUserComponents/WictsSidedar'
import WictsHeader from '../components/WictsUserComponents/WictsHeader'

const AdminWicts = () => {

  return (
    <>

<div className='flex'>
        <WictsSidedar/>
        <div className='w-full ml-18 md:ml-56 '>
            <WictsHeader className=" "/>
            <Outlet/>
        </div>
      </div>


    </>
  )
}

export default AdminWicts
