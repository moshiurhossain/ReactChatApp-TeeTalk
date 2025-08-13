import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { TbUserCancel } from "react-icons/tb";


import { Link } from 'react-router';


const Navbar = () => {
  return (
    <>
    <nav className='px-3 py-4 border-r-gray-400 '>
        <Link to='/layoutTwo/home' className='text-lg font-semibold transition-colors hover:text-blue-400'><FaUser /></Link>
        <Link to='/layoutTwo/home' className='text-lg font-semibold transition-colors hover:text-blue-400'><TbUserCancel /></Link>
        <Link to='/layoutTwo/home' className='text-lg font-semibold transition-colors hover:text-blue-400'><AiOutlineMessage /></Link>
        

    </nav>
    </>
  )
}

export default Navbar