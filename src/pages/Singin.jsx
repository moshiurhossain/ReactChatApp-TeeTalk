import React from 'react'
import { RiChatUnreadFill } from "react-icons/ri";

const Singin = () => {
  return (
    <>
    <section id='signin' className=' w-full h-screen '>
    <form action="">
        <div className='w-[310px] h-[380px] bg-[#dfd3d3] pt-4 mx-auto mt-[100px]'>
            <div className="iconbox mx-auto w-[50%] flex items-center justify-center gap-1.5 font-bold text-[20px] mt-[20px]">
                TeeTalk<RiChatUnreadFill />
            </div>
            {/* input box starts */}
            <div className="inputbox flex justify-center items-center py-2 mt-2 flex-col">
            <input className='w-[250px] p-1 bg-amber-50 rounded-[6px] outline-0 mt-2' type="text" name="" id="" />
            <input  className='w-[250px] p-1 bg-amber-50 rounded-[6px] outline-0 mt-2' type="text" name="" id="" />
            </div>
              {/* input box ends */}
              {/* Button box starts */}
            <div className="buttonbox flex flex-col">
                <button className='w-[100px] bg-[#186b1c] rounded-[4px] text-white h-[30px] mx-auto mt-[20px]'>SingIn</button>
            <button className='w-[160px] bg-[#744316] rounded-[4px] text-white h-[30px] mx-auto mt-[20px]'>Create Account</button>
            </div>
             {/* Button box ends */}
          

        </div>
    </form>
    </section>

    </>
  )
}

export default Singin