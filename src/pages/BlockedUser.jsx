import React, { useEffect, useState } from 'react'
import { MdBlock } from "react-icons/md";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useSelector } from 'react-redux';
import { userInfo } from '../slices/userInfoSlice';

const BlockedUser = () => {
    const db = getDatabase();
    const currentUserInfo = useSelector((state)=>state.currentUserInfo.value)
    console.log(currentUserInfo)
    const [blockUser,setBlockUser] =useState([])
    useEffect(()=>{
       onValue(ref(db, 'blockUserList/'),(snapshot)=>{
        let array =[]
              snapshot.forEach((item)=>{
               
                if(item.val().blockerID == currentUserInfo.uid){
                  array.push({userInfo :item.val(), key: item.key})
                }
              })
              setBlockUser(array)
       })
    },[])
console.log(blockUser)
// 
const handleUnblock =(unblockInfo)=>{
  console.log(unblockInfo)
     set(push(ref(db, 'chatUser/')), {
       
       senderID: currentUserInfo.uid,
       senderName: currentUserInfo.displayName,
       senderPhoto: currentUserInfo.photoURL,
    
       adderId: unblockInfo.userInfo.blockUserId,
       adderName: unblockInfo.userInfo.blockUserName,
       adderAvatar:unblockInfo.userInfo.blockUserPicture, 

      });
      remove(ref(db,'blockUserList/' + unblockInfo.key))
}
  return (
    <>
    <div className=' p-6 gap-5'>
        <h1 className='font-bold text-3xl m-5'> Block list</h1>
        {
            blockUser.map((item)=>(
       
      <div key={item.key} className='blockuserCard m-3 flex justify-between items-center w-[400px] py-2 h-fit px-3 rounded-[5px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
           <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"><img src={item.userInfo.blockUserPicture} alt="" /></div>
            <div className='h-fit'>
                <h2 className='text-base font-medium text-gray-500'>{item.userInfo.blockUserName}</h2>
                <h3 className='text-base font-normal text-gray-300'>{item.userInfo.blockUserId}</h3>
            </div>
           </div>
           <button onClick={()=>handleUnblock(item)} className='cursor-pointer text-4xl text-green-400'><MdBlock /></button>
      </div>
            ))
        }
    </div>
    
    </>
  )
}

export default BlockedUser