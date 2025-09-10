import React, { useState } from "react";
import { FaUserCircle, FaPaperPlane } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";

import { getDatabase, push, ref, remove, set } from "firebase/database";




export default function MessageBox() {
const db = getDatabase();
        
const currentUserInfo = useSelector((state)=>state.currentUserInfo.value)
const chatUserInfo = useSelector((state)=>state.currentUserInfo.chatuser)

const [showBlock,setShowBlock]=useState(false)
const dispatch = useDispatch()
// Block function start
const chatuser = useSelector((state)=>state.currentUserInfo.chatuser)
//  Block Button
const handleBlock =()=>{
  set(push(ref(db, 'blockUserList/')),{
    blockUserName:      chatuser.friendName,
    blockUserId:        chatuser.friendId,
    blockUserPicture:   chatuser.friendpic,
    
    blockerID:     currentUserInfo.uid,
    
  })
  // Delete From ChatUser collection
  remove(ref(db,'chatUser/' + chatuser.conversationId))
  localStorage.removeItem('chatuser')
  dispatch(selectChatuserInfo(null))
}
//------------------------------------------ Message function start------------------------------------//
const [message,setMessage]=useState('')

// Handle msg func start
const handlemsg = ()=>{
 set(push(ref(db, 'allMsg/')),{
      senderId:     currentUserInfo.uid,
      receiverId:   chatUserInfo.friendId, 
      msg:          message, 
 })
 setMessage('')
}
  return (
    <>
    {
      chatuser?
        <div className="flex flex-col h-screen w-full lg:flex-1 bg-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300 ">
        {/* Back button only on mobile */}
        <div className="flex">
  <button className="lg:hidden mr-2 text-gray-600 hover:text-gray-800">
          <IoIosArrowBack size={24} />
        </button>

        <FaUserCircle size={32} className="text-gray-600 mr-3" />
        <h2 className="font-semibold truncate">{chatuser?.friendName}</h2>
        </div>
      <div className="relative">
        <button onClick={()=>setShowBlock(!showBlock)}
        className=" cursor-pointer"><BsThreeDotsVertical /></button>

                    {showBlock &&
                    <button
                    onClick={handleBlock}
                    className="px-5 py-1 font-medium border-white border-2 bg-gray-200 text-base absolute bottom-[-39px] right-0 rounded-xl cursor-pointer">Block</button>
                    }
      </div>    
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-4 space-y-2">
        <div className="flex justify-start">
          <div className="px-4 py-2 rounded-lg max-w-xs text-sm shadow bg-white text-gray-800">
            Hey, how are you?
            <div className="text-[10px] text-gray-400 mt-1">10:30 AM</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="px-4 py-2 rounded-lg max-w-xs text-sm shadow bg-green-500 text-white">
            I’m good, thanks! How about you?
            <div className="text-[10px] text-gray-200 mt-1">10:31 AM</div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="px-4 py-2 rounded-lg max-w-xs text-sm shadow bg-white text-gray-800">
            Doing great 😄
            <div className="text-[10px] text-gray-400 mt-1">10:32 AM</div>
          </div>
        </div>
      </div>

      {/* Message Input bar */}
      <div className="p-3 bg-white border-t border-gray-300 flex items-center">
        <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
          type="text"
          placeholder="Type a message"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-green-500"
        />
        <button 
         onClick={handlemsg}
         className="ml-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full cursor-pointer">
          <FaPaperPlane size={16} />
        </button>
      </div>
    </div>
      :
  <div className="h-screen w-full lg:flex-1 flex items-center justify-center bg-blue-100">
      <h1 className="font-bold text-white text-2xl">Select an user to chat</h1>
    </div>
    }
  
  
    </>
  );
}
