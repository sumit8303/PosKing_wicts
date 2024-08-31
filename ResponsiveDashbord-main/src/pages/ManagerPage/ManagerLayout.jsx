import React from 'react'
import {Outlet} from 'react-router-dom'
import ManagerSidebar from './ManagerSidebar'
import ManagerHeader from './ManagerHeader'

const ManagerLayout = () => {

  return (
    <>

<div className='flex'>
        <ManagerSidebar/>
        <div className='w-full ml-18 md:ml-56 '>
            <ManagerHeader className=" "/>
            <Outlet/>
        </div>
      </div>


    </>
  )
}

export default ManagerLayout
