import React, { useState } from "react";
import { IoChatbubblesOutline, IoPeopleOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";


// Dummy users
const chatUsers = [
  { id: 1, name: "John Doe", lastMessage: "Hey, how are you?", time: "10:30 AM", unread: 2 },
  { id: 2, name: "Sarah Smith", lastMessage: "Let’s meet tomorrow.", time: "Yesterday", unread: 0 },
];

const allUsers = [
  { id: 1, name: "John Doe", status: "Available" },
  { id: 2, name: "Sarah Smith", status: "Busy" },
  { id: 3, name: "Alex Johnson", status: "At work" },
  { id: 4, name: "Emily Davis", status: "Offline" },
];

export default function ChatSidebar() {
  const [tab, setTab] = useState("chats"); // "chats" or "users"

  return (
    <div className="w-full lg:w-1/3 border-r border-gray-300 h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-white sticky top-0 z-10">
        <h1 className="text-lg font-bold">{tab === "chats" ? "Chats" : "All Users"}</h1>
        <div className="flex space-x-4 text-gray-600">
          <button
            onClick={() => setTab("chats")}
            className={`p-2 rounded-full hover:bg-gray-100 ${tab === "chats" ? "text-green-500" : ""}`}
          >
            <IoChatbubblesOutline size={20} />
          </button>
          <button
            onClick={() => setTab("users")}
            className={`p-2 rounded-full hover:bg-gray-100 ${tab === "users" ? "text-green-500" : ""}`}
          >
            <IoPeopleOutline size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        {tab === "chats" ? (
          // Chats list
          chatUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
            >
              <FaUserCircle size={40} className="text-gray-500 mr-3" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold">{user.name}</h2>
                  <span className="text-xs text-gray-500">{user.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-600 truncate w-48">{user.lastMessage}</p>
                  {user.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs rounded-full px-2 py-0.5">
                      {user.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          // All users list
          allUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
            >
              <FaUserCircle size={40} className="text-gray-500 mr-3" />
              <div className="flex-1">
                <h2 className="text-sm font-semibold">{user.name}</h2>
                <p className="text-xs text-gray-500">{user.status}</p>
              </div>
              <button className="w-[30px] h-[30px] bg-gray-100 rounded-full flex items-center justify-center"><FiUserPlus /></button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
