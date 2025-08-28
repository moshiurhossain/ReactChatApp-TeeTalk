import React from "react";
import UserItem from "../components/UserItem";


const users = [
  { id: 1, name: "John Doe", status: "Available" },
  { id: 2, name: "Sarah Smith", status: "Busy" },
  { id: 3, name: "Alex Johnson", status: "At work" },
  { id: 4, name: "Emily Davis", status: "Offline" },
  { id: 5, name: "Michael Brown", status: "In a meeting" },
];

export default function AllUsers() {
  return (
    <div className="w-full lg:w-1/3 border-r border-gray-300 h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-300 bg-white sticky top-0 z-10">
        <h1 className="text-lg font-bold">All Users</h1>
      </div>

      {/* User list */}
      <div className="flex-1 overflow-y-auto bg-white">
        {users.map((user) => (
          <UserItem key={user.id} name={user.name} status={user.status} />
        ))}
      </div>
    </div>
  );
}
