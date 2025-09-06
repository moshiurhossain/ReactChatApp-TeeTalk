import React from "react";
import { FaUserCircle, FaPaperPlane } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";





export default function MessageBox() {
        
const currentUserInfo = useSelector((state)=>state.currentUserInfo.value)
const chatuser = useSelector((state)=>state.currentUserInfo.chatuser)
console.log(chatuser)
 
 console.log(currentUserInfo?.displayName)



  return (
    <div className="flex flex-col h-screen w-full lg:flex-1 bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-300 bg-white">
        {/* Back button only on mobile */}
        <button className="lg:hidden mr-2 text-gray-600 hover:text-gray-800">
          <IoIosArrowBack size={24} />
        </button>

        <FaUserCircle size={32} className="text-gray-600 mr-3" />
        <h2 className="font-semibold truncate">{chatuser?.friendName}</h2>
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

      {/* Input bar */}
      <div className="p-3 bg-white border-t border-gray-300 flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm outline-none focus:border-green-500"
        />
        <button 
       
         className="ml-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full">
          <FaPaperPlane size={16} />
        </button>
      </div>
    </div>
  );
}
