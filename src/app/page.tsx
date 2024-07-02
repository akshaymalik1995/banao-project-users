import { fetchUsers } from "./server";
import React from "react";
import Users from "@/component/Users";

export default async function Home() {
  const data = await fetchUsers();

  return (
    <div className="h-screen relative">
      <Users data={data} />
    </div>
  );
}
