"use client";

import {createClient} from "@/utils/client"
import { redirect } from "next/navigation";

export default function Logout() {

  const client = createClient();
  const handleLogout = async () => {
    await client.auth.signOut();
    redirect("/login");
  };
 
    return (
    <div className="flex items-center justify-center w-full">
      <button onClick={handleLogout} className="bg-[#e90074] w-full text-white py-3 px-6 rounded-xl">
        Logout
      </button>
    </div>
  );
}