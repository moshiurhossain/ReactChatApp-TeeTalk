import React from 'react'
import { getDatabase, push, ref, set } from "firebase/database";

const AllUserList = () => {
     const db = getDatabase();
     const handelrealtimeDatabase  =  ()=>{

           set(push(ref(db, 'users/' )), {
    user2: 'this is user2',
 
  });
     }
  return (
    <>
    <div className='h-screen p-[20px]'>
        <h1>All users</h1>
        <div className=' flex justify-evenly '>

        <div className='flex w-[240px] h-[60px] bg-[#a59d9d] items-center'>
           
           <button onClick={handelrealtimeDatabase} className='w-[40px] h-[40px] rounded-full bg-[#d4cbcb] cursor-pointer'>+</button>
        </div>

        </div>
    </div>
    
    </>
  )
}

export default AllUserList