import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar/>
        <div className='w-full ml-18 md:ml-56 '>
            <Header className=" "/>
            <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Layout
