import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const LayoutTwo = () => {
  return (
    <>
    <div className='flex'>
   <Navbar/>
   <Outlet/>
    </div>
 
    </>
  )
}

export default LayoutTwo