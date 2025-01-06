"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./sidebar";

type MobileSidebarProps = {
  userProfile: {
    name: string;
    email: string;
  };
};

export const MobileSidebar = ({  }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-black text-white rounded-full"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};