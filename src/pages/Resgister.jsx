
import React, { useState } from 'react'
import { RiChatUnreadFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router';
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { cssTransition, Flip, toast, Zoom } from 'react-toastify';

const Resgister = () => {
     const [show,setShow]=useState(false)
     const [cpshow,setcpshow]=useState(false)
    //  username error start
     const [userName,setuserName]=useState('')
     const [userNameError,setuserNameError]=useState('')

     const [email,setuseremail]=useState('')
     const [useremailError,setuseremailError]=useState('')

     const [password,setuserpassword]=useState('')
     const [userpasswordError,setuserpasswordError]=useState('')

     const [userpasswordconf,setuserpasswordconf]=useState('')
     const [userpasswordconfError,setuserpasswordconfError]=useState('')
     
const auth = getAuth();
     
     const handleSubmit=()=>{
      console.log('account create initiated ')



      // ------------------------------------------------------------------
      if(!userName) return setuserNameError('You didnt enter your username')
      if(!email) return setuseremailError('You didnt enter your email')
      if(!password) return setuserpasswordError('You didnt enter your password')
      if(!userpasswordconf) return setuserpasswordconfError('You must enter password')
        if(userpasswordconf != password) return setuserpasswordconfError('password dont match')
      // ------------------------------------------------------------------
      // -----------------------firebase auth start----------------------------
   

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(userCredential)
    console.log('account created successfully')
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

          if(errorCode=='auth/email-already-in-use'){
                  toast.error(`Email already in use`, {
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
          }
      
          // tostify error end
    // ..
  });
      // -----------------------firebase auth end----------------------------

     }

    //  username error end
  return (
    <>
     <section id='signin' className=' w-full h-screen flex items-center bg-[#071d3f] '>
        {/* from start */}
            <div  className='w-[310px] pb-[50px] bg-[#02021b] pt-4 mx-auto mt-[100px]   rounded-[14px] border-[3px] border-white'>
             
                <div className="iconbox mx-auto w-[50%] flex items-center justify-center text-white gap-1.5 font-bold text-[24px]  mt-[20px]">
                    TeeTalk<RiChatUnreadFill />
                </div>
                 <h1 className='text-center text-[14px] font-bold text-[#56a3c7]'>Registration</h1>


                {/* input box starts */}
                <div className="inputbox flex justify-center items-center py-2 mt-2 flex-col">

                  {/* user name start */}
                  <div className="userinputcontainer">
                   <input
                   onChange={(e)=>{setuserName(e.target.value),setuserNameError('')}}
                   className='w-[250px] p-1 text-white bg-[#312e2e] rounded-[6px] outline-0 mt-2 placeholder-gray-400' type='text'  placeholder='User Name' />
                   <p className='text-[#c77070] mt-1'>{userNameError}</p>
                  </div>
                  {/* user name end */}


                
               {/* email start */}

                 <div className='emailinputcontainer w-[250px] rounded-[6px] p-1 '>
                <input 
                onChange={(e)=>{setuseremail(e.target.value),setuseremailError('')}}
                className=' bg-[#312e2e] w-[250px] rounded-[6px] p-1 text-white  outline-0 mt-5 placeholder-gray-400' type='email' placeholder='Email Address' />
                  <p className='text-[#c77070] mt-1'>{useremailError}</p>
                  </div> 
                 {/* email end */}



                {/* password start */}
              <div>
                     <div className='w-[250px] bg-[#312e2e]  mt-5 p-1 rounded-[6px] flex justify-between'>
                <input  
                onChange={(e)=>{setuserpassword(e.target.value),setuserpasswordError('')}}
                className='outline-0 placeholder-gray-400 text-white' 
                placeholder='Password'
                type={show?"text":"password"}  />
                <button className=' w-[30px] cursor-pointer p-1 ' onClick={()=>{setShow(!show)}}>{show?<FaEyeSlash className='text-white'/>:<FaEye className='text-white'/> }</button>
             

                </div>
                <p className='text-[#c77070] mt-1'> {userpasswordError}</p>
                  
                  </div>
                  {/* password end */}
                {/* confirm-password start */}
              <div>
                     <div className='w-[250px] bg-[#312e2e]  mt-5 p-1 rounded-[6px] flex justify-between'>
                <input  
                onChange={(e)=>{setuserpasswordconf(e.target.value),setuserpasswordconfError('')}}
                className='outline-0 placeholder-gray-400 text-white' 
                placeholder='Confirm Password'
                type={cpshow?"text":"password"}  />
           <button className=' w-[30px] cursor-pointer p-1 ' onClick={()=>{setcpshow(!cpshow)}}>{cpshow?<FaEyeSlash className='text-white'/>:<FaEye className='text-white'/> }</button>             

                </div>
                <p className='text-[#c77070] mt-1'>{userpasswordconfError}</p>
                  
                  </div>
                  {/* confirm-password end */}
                </div>
                  {/* input box ends */}
                  {/* Button box starts */}
                <div className="buttonbox flex flex-col">
                       <button type='submit' 
                       onClick={handleSubmit}
                       className='w-[140px] py-2 bg-[#a07d1d] rounded-[4px] cursor-pointer text-white h-[40px] mx-auto mt-[20px] font-semibold  flex items-center justify-center'>   Create Account</button> 
                           <Link to={'/'} className='w-[140px] bg-[#144c7a]  cursor-pointer rounded-[4px] text-white h-[40px] mx-auto mt-[20px] font-semibold  flex items-center justify-center'>SingIn page</Link>
             
                         </div>
                 {/* Button box ends */}
              
    
            </div>
        
        </section>
    </>
  )
}

export default Resgister