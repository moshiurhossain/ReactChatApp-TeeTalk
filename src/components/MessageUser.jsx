import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const users = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Sarah Smith",
    lastMessage: "Let’s meet tomorrow.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    name: "Alex Johnson",
    lastMessage: "Sure, no problem.",
    time: "Mon",
    unread: 1,
  },
];

export default function MessageUser() {
  return (
    <div
      className="
        lg:w-[400px] w-full
        border-r border-gray-300 
        h-screen flex flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white sticky top-0 z-10">
        <FaUserCircle
          size={32}
          className="text-gray-600 cursor-pointer hover:text-gray-800"
        />
        <h1 className="text-lg font-bold">Chats</h1>
      </div>

      {/* Search Bar */}
      <div className="p-3 bg-white sticky top-[60px] z-10">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
          <IoSearchOutline size={20} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto bg-white">
        {users.map((user) => (
          <div
            key={user.id}
            className="
              flex items-center p-3 
              hover:bg-gray-100 cursor-pointer 
              border-b border-gray-200
            "
          >
            <FaUserCircle
              size={40}
              className="text-gray-500 mr-3 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-semibold truncate">{user.name}</h2>
                <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                  {user.time}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600 truncate w-48">
                  {user.lastMessage}
                </p>
                {user.unread > 0 && (
                  <span className="bg-green-500 text-white text-xs rounded-full px-2 py-0.5 flex-shrink-0">
                    {user.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
