import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

export default function UserItem({ name, status }) {
  return (
    <div className="flex group items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
      <FaUserCircle size={40} className="text-gray-500 mr-3 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <h2 className="text-sm font-semibold truncate">{name}</h2>
        <p className="text-xs text-gray-500 truncate">{status}</p>
      </div>
     <button className="w-[30px] h-[30px] group-hover:bg-white bg-gray-100 flex items-center justify-center rounded-full cursor-pointer">
     <FiUserPlus />
     </button>
    </div>
  );
}
