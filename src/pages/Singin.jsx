import React, { useState } from 'react'
import { RiChatUnreadFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router';
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Flip, toast, Zoom } from 'react-toastify';
import { BeatLoader } from 'react-spinners';

const Singin = () => {
    const [show,setShow]=useState(false)
    // --------------------------------------------------//
    const [email,setemail]=useState('')
    const [emailError,setemailError]=useState('')
    // --------------------------------------------------//
    const [password,setpassword]=useState('')
    const [passwordError,setpasswordError]=useState('')
    // -------------------------------------------------//
    const handleSubmit=()=>{
     
 
      // -------------------------------
      if(!email) return setemailError('you must enter your email')
      if(!password) return setpasswordError('you must enter your password')
    // -------------------------------------------------//
    const auth = getAuth();
    // ------------------------------------------------//


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    console.log('signin successful')
        // tostify Success start
                        toast.success('Account created successfully', {
                        position: "top-center",
                        autoClose: 4003,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Zoom,
                        });
          // tostify Success end     
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
      // tostify error start
      // if(errorCode=='auth/email-already-in-use'){
              toast.error(`${errorCode}`, {
              position: "top-center",
              autoClose: 4003,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Flip,
              });
      // }
           
              // tostify error end
  });
 
    }



  return (
    
    <section id='signin' className=' w-full h-screen  flex items-center bg-[#071d3f] '>
    
        <div  className='w-[310px] py-[60px] bg-[#02021b] pt-4 mx-auto mt-[100px] rounded-[14px] border-[3px] border-white'>
            <div className="iconbox mx-auto w-[50%] flex items-center justify-center gap-1.5 font-bold text-[27px] mt-[30px] text-white">
                TeeTalk<RiChatUnreadFill />
            </div>
            {/* input box starts */}
            <div className="inputbox flex justify-center items-center py-2 mt-2 flex-col">
              {/* email start */}
            <input
            onChange={(e)=>{setemail(e.target.value),setemailError('')}}
            className='w-[250px] p-1 bg-[#312e2e] rounded-[6px] outline-0 mt-2 text-white placeholder-gray-400' 
            type="email" 
            placeholder='Email Address' />
            <p className='text-[#c77070] mt-1'>{emailError}</p>
            {/* email end */}
            {/* password start */}
            <div className='w-[250px] bg-[#312e2e] mt-5 p-1 rounded-[6px] flex justify-between'>
            <input  
            onChange={(e)=>{setpassword(e.target.value),setpasswordError('')}}
            className='outline-0 placeholder-gray-400 text-white' 
            type={show?"text":"password"} 
            placeholder='Password'/>
  <button className=' w-[30px] cursor-pointer p-1 ' onClick={()=>{setShow(!show)}}>{show?<FaEyeSlash className='text-white'/>:<FaEye className='text-white'/>}</button>
            </div>
            <p className='text-[#c77070] mt-1'>{passwordError}</p>
              {/* password end */}
            </div>
              {/* input box ends */}
              {/* Button box starts */}
            <div className="buttonbox flex flex-col">
              <button
              type='submit'
              onClick={handleSubmit}
              className='w-[140px] py-2 bg-[#1c848b] cursor-pointer rounded-[4px] text-white h-[40px] mx-auto mt-[20px] font-semibold  flex items-center justify-center'>SingIn</button>
              <Link to='/reg' className='w-[140px] cursor-pointer bg-[#144c7a]   rounded-[4px] text-white h-[40px] mx-auto mt-[20px] font-semibold  flex items-center justify-center' >SignUp</Link>

            </div>
             {/* Button box ends */}
          

        </div>
    
    </section>

   
  )
}

export default Singin