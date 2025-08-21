import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

const LayoutOne = () => {


  return (
    <>
    <Outlet/>
    </>
  )
}

export default LayoutOne