import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'

const LayoutTwo = () => {
  const currentUserInfo = useSelector((state)=>state.currentUserInfo.value)
  const navigate = useNavigate()

  useEffect(()=>{
    if(currentUserInfo === null){
      navigate('/')
    }
  },[])
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