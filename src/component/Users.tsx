"use client";
import React from "react";
import type { UsersInterface, UserInterface } from "@/types/users.type";
import User from "./User";
import UserDetail from "./UserDetail";

export default function Users(props: { data: UsersInterface }) {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const { users, error } = props.data;
  return (
    <div className="w-full">
      <div>
        <h1 className="text-4xl z-10 text-center text-white bg-gray-800  sticky top-0  py-12">
          Users
        </h1>
        {error ? (
          <p className="text-red-500 text-center">No users found.</p>
        ) : (
          <div className="grid container relative mx-auto my-12 grid-cols-2 gap-8 ">
            <div className="flex col-span-1 max-w-2xl flex-col gap-4">
              {users?.map((user: UserInterface, index: number) => (
                <User
                  setSelectedUser={setSelectedUser}
                  user={user}
                  key={index}
                />
              ))}
            </div>
            <div className="col-span-1">
              {selectedUser && <UserDetail user={selectedUser} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
