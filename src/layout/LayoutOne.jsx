import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

const LayoutOne = () => {
  const currentUserInfo =useSelector((state)=>state.currentUserInfo.value)

  const navigate =useNavigate()

  useEffect(()=>{
    if(currentUserInfo == null){
      navigate('/')
    }
  },[])

  return (
    <>
    <Outlet/>
    </>
  )
}

export default LayoutOne