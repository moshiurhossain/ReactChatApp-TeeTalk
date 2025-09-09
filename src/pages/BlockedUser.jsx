import React, { useEffect } from 'react'
import { MdBlock } from "react-icons/md";

const BlockedUser = () => {
    
    useEffect(()=>{

    },[])

  return (
    <>
    <div className='flex p-6 gap-5'>
      <div className='blockuserCard flex justify-between items-center w-[400px] py-2 h-fit px-3 rounded-[5px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
           <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"><img src="" alt="" /></div>
            <div className='h-fit'>
                <h2 className='text-base font-medium text-gray-500'>username</h2>
                <h3 className='text-base font-normal text-gray-300'>username@email.com</h3>
            </div>
           </div>
           <button className='text-4xl text-green-400'><MdBlock /></button>
      </div>
    </div>
    
    </>
  )
}

export default BlockedUser