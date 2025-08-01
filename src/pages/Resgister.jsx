
import React, { useState } from 'react'
import { RiChatUnreadFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router';
import { FaEyeSlash } from "react-icons/fa";

const Resgister = () => {
     const [show,setShow]=useState(false)
     const [userName,setuserName]=useState('')

     const handleSubmit=(e)=>{
      e.preventDefault()
               console.log(userName)
     }
  return (
    <>
     <section id='signin' className=' w-full h-screen flex items-center bg-[#071d3f] '>
        {/* from start */}
            <form onSubmit={handleSubmit} className='w-[310px] pb-[50px] bg-[#02021b] pt-4 mx-auto mt-[100px]   rounded-[14px] border-[3px] border-white'>
             
                <div className="iconbox mx-auto w-[50%] flex items-center justify-center text-white gap-1.5 font-bold text-[24px]  mt-[20px]">
                    TeeTalk<RiChatUnreadFill />
                </div>
                 <h1 className='text-center text-[14px] font-bold text-[#56a3c7]'>Registration</h1>
                {/* input box starts */}
                <div className="inputbox flex justify-center items-center py-2 mt-2 flex-col">
                  {/* user name start */}
                  <div className="userinputcontainer">
                   <input
                   onChange={(e)=>{setuserName(e.target.value)}}
                   className='w-[250px] p-1 text-white bg-[#312e2e] rounded-[6px] outline-0 mt-2 placeholder-gray-400' type='text'  placeholder='User Name' />
                   <p className='text-[#c77070] mt-1'> You didnt enter your username</p>
                  </div>
                  {/* user name end */}
                
               {/* email start */}

                 <div className='emailinputcontainer w-[250px] rounded-[6px] p-1 '>
                <input className=' bg-[#312e2e] w-[250px] rounded-[6px] p-1 text-white  outline-0 mt-5 placeholder-gray-400' type='email' placeholder='Email Address' />
                  <p className='text-[#c77070] mt-1'> You didnt enter your email</p>
                  </div> 
                 {/* email end */}
                {/* password start */}
              <div>
                     <div className='w-[250px] bg-[#312e2e]  mt-5 p-1 rounded-[6px] flex justify-between'>
                <input  
                className='outline-0 placeholder-gray-400 text-white' 
                placeholder='Password'
                type={show?"text":"password"}  />
                <button className=' w-[30px] cursor-pointer p-1 ' onClick={()=>{setShow(!show)}}>{show?<FaEyeSlash className='text-white'/>:<FaEye className='text-white'/> }</button>
             

                </div>
                <p className='text-[#c77070] mt-1'> You didnt enter your password</p>
                  
                  </div>
                  {/* password end */}
                {/* confirm-password start */}
              <div>
                     <div className='w-[250px] bg-[#312e2e]  mt-5 p-1 rounded-[6px] flex justify-between'>
                <input  
                className='outline-0 placeholder-gray-400 text-white' 
                placeholder='Confirm Password'
                type={show?"text":"password"}  />
                <button className=' w-[30px] cursor-pointer p-1 ' onClick={()=>{setShow(!show)}}>{show?<FaEyeSlash className='text-white'/>:<FaEye className='text-white'/> }</button>
             

                </div>
                <p className='text-[#c77070] mt-1'> You didnt enter your password</p>
                  
                  </div>
                  {/* confirm-password end */}
                </div>
                  {/* input box ends */}
                  {/* Button box starts */}
                <div className="buttonbox flex flex-col">
                       <button type='submit' 
                       className='w-[140px] py-2 bg-[#a07d1d] rounded-[4px] text-white h-[40px] mx-auto mt-[20px] font-semibold  flex items-center justify-center'>   Create Account</button> 
                           <Link to={'/'} className='w-[140px] bg-[#144c7a]   rounded-[4px] text-white h-[40px] mx-auto mt-[20px] font-semibold  flex items-center justify-center'>SingIn page</Link>
             
                         </div>
                 {/* Button box ends */}
              
    
            </form>
        
        </section>
    </>
  )
}

export default Resgister