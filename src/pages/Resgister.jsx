
import React, { useState } from 'react'
import { RiChatUnreadFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router';
import { FaEyeSlash } from "react-icons/fa";

const Resgister = () => {
     const [show,setShow]=useState(false)
  return (
    <>
     <section id='signin' className=' w-full h-screen flex items-center bg-[#5587d1] '>
        
            <div className='w-[310px] h-[410px] bg-[#dfd3d3] pt-4 mx-auto mt-[100px] rounded-[5px]'>
             
                <div className="iconbox mx-auto w-[50%] flex items-center justify-center gap-1.5 font-bold text-[20px] mt-[20px]">
                    TeeTalk<RiChatUnreadFill />
                </div>
                 <h1 className='text-center text-[24px] font-bold text-lime-800'>Registration</h1>
                {/* input box starts */}
                <div className="inputbox flex justify-center items-center py-2 mt-2 flex-col">
                  {/* user name start */}
                   <input className='w-[250px] p-1 bg-amber-50 rounded-[6px] outline-0 mt-2' type='text' placeholder='User Name' />
                  {/* user name end */}
                  {/* email start */}
                <input className='w-[250px] p-1 bg-amber-50 rounded-[6px] outline-0 mt-5' type='email' placeholder='Email Address' />
                 {/* email end */}
                {/* password start */}
                <div className='w-[250px] bg-amber-50 mt-5 p-1 rounded-[6px] flex justify-between'>
                <input  
                className='outline-0' 
                placeholder='Password'
                type={show?"text":"password"}  />
                <button className=' w-[30px] cursor-pointer p-1 ' onClick={()=>{setShow(!show)}}>{show?<FaEyeSlash/>:<FaEye /> }</button>
                </div>
                  {/* password end */}
                </div>
                  {/* input box ends */}
                  {/* Button box starts */}
                <div className="buttonbox flex flex-col">
                           <Link to='/reg' className='w-[140px] py-2 bg-[#a07d1d] rounded-[4px] text-white h-[30px] mx-auto mt-[20px] flex items-center justify-center' >Create Account</Link>
                           <Link to={'/'} className='w-[140px] bg-[#186b1c] py-2 rounded-[4px] text-white h-[30px] mx-auto mt-[20px]   flex items-center justify-center'>SingIn page</Link>
             
                         </div>
                 {/* Button box ends */}
              
    
            </div>
        
        </section>
    </>
  )
}

export default Resgister