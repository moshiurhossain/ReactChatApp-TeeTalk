import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { TbUserCancel } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';






const Navbar = () => {
  const currentUserInfo= useSelector((state)=>state.currentUserInfo.value)
  console.log(currentUserInfo)
  return (
    <>
    <nav className='px-3 py-4 border-r-gray-400 bg-gray-100 flex flex-col gap-8 items-center'>

        <div className='flex flex-col gap-6'>
        <Link to='/layoutTwo/home' className='text-lg font-semibold transition-colors hover:text-blue-400 mt-3'><FaUser /></Link>
        <Link to='/layoutTwo/home' className='text-lg font-semibold transition-colors hover:text-blue-400'><TbUserCancel /></Link>
        <Link to='/layoutTwo/home' className='text-lg font-semibold transition-colors hover:text-blue-400'><AiOutlineMessage /></Link>
        </div>

        <div className='profile flex flex-col items-center'>
              <div className=' '><img className='w-10 h-10 bg-gray-200 rounded-full overflow-hidden' src={currentUserInfo?.photoURL} alt='pofile'  /></div>
              <h2 className='text-[10px] font-normal text-black'>{currentUserInfo?.displayName}</h2>
        </div>
        

    </nav>
    </>
  )
}

export default Navbar