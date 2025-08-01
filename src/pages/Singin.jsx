import React, { useState } from 'react'
import { RiChatUnreadFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router';
import { FaEyeSlash } from "react-icons/fa";

const Singin = () => {
    const [show,setShow]=useState(false)
  return (
    
    <section id='signin' className=' w-full h-screen  flex items-center bg-[#189196] '>
    
        <div className='w-[310px] h-[380px] bg-[#dfd3d3] pt-4 mx-auto mt-[100px] rounded-[5px]'>
            <div className="iconbox mx-auto w-[50%] flex items-center justify-center gap-1.5 font-bold text-[20px] mt-[50px]">
                TeeTalk<RiChatUnreadFill />
            </div>
            {/* input box starts */}
            <div className="inputbox flex justify-center items-center py-2 mt-2 flex-col">
            <input className='w-[250px] p-1 bg-amber-50 rounded-[6px] outline-0 mt-2' type="text" placeholder='Email Address' />
            {/* password start */}
            <div className='w-[250px] bg-amber-50 mt-5 p-1 rounded-[6px] flex justify-between'>
            <input  
            className='outline-0' 
            type={show?"text":"password"} placeholder='Password'/>
  <button className=' w-[30px] cursor-pointer p-1 ' onClick={()=>{setShow(!show)}}>{show?<FaEyeSlash />:<FaEye />}</button>
            </div>
              {/* password end */}
            </div>
              {/* input box ends */}
              {/* Button box starts */}
            <div className="buttonbox flex flex-col">
              <Link className='w-[100px] bg-[#186b1c] py-2 rounded-[4px] text-white h-[30px] mx-auto mt-[20px]   flex items-center justify-center'>SingIn</Link>
              <Link to='/reg' className='w-[100px] py-2 bg-[#1d81a0] rounded-[4px] text-white h-[30px] mx-auto mt-[20px] flex items-center justify-center' >SignUp</Link>

            </div>
             {/* Button box ends */}
          

        </div>
    
    </section>

   
  )
}

export default Singin