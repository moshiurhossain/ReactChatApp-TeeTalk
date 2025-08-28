import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserItem({ name, status }) {
  return (
    <div className="flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
      <FaUserCircle size={40} className="text-gray-500 mr-3 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <h2 className="text-sm font-semibold truncate">{name}</h2>
        <p className="text-xs text-gray-500 truncate">{status}</p>
      </div>
    </div>
  );
}
