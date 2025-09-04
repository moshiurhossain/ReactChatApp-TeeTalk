import React from 'react'
import { FaPlus } from 'react-icons/fa'

const UserCard = ({userName,userAvatar,userEmail,addUser}) => {
  return (
        <div className="flex items-center w-[270px] m-4 justify-between p-2 bg-white shadow rounded-xl hover:bg-gray-50 transition cursor-pointer">
      {/* Left: Avatar + Info */}
      <div className="flex items-center ">
        <img
          
          src={userAvatar}
          alt="avatar"
          className="w-12 h-12 rounded-full mr-3 bg-gray-200"
        />
        <div>
          <h2 className="font-semibold text-sm">{userName}</h2>
          <p className="text-xs text-gray-500">{userEmail}</p>
        </div>
      </div>

      {/* Right: Plus button */}
      <button onClick={addUser} className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
        <FaPlus size={14} />
      </button>
    </div>
  )
}

export default UserCard