"use client";

import { Home, Search, FileText, Settings, CreditCard, HelpCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Profile } from "./profile";
import Logout from "./logout";

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navigationItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/dashboard/scan-new-content", icon: Search, label: "Scan New Content" },
    { href: "/dashboard/my-cases", icon: FileText, label: "My Cases" },
    { href: "/dashboard/billing", icon: CreditCard, label: "Billing" },
  ];

  const bottomItems = [
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    { href: "/dashboard/support", icon: HelpCircle, label: "Support" },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-black text-white rounded-full"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black text-white z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block w-64`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 text-xl font-bold tracking-wide">fake_livestream_app</div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-4 px-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActiveRoute(item.href);
                return (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <div 
                        className={`flex items-center p-3 rounded-lg transition duration-200 ${
                          isActive 
                            ? "bg-[#e90074] text-white" 
                            : "hover:bg-[#e90074] text-white"
                        }`}
                      >
                        <Icon className="mr-4 h-5 w-5" />
                        <span className="text-base font-medium">{item.label}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="space-y-4 px-4 pb-6">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveRoute(item.href);
              return (
                <div key={item.href}>
                  <Link href={item.href}>
                    <div 
                      className={`flex items-center p-3 rounded-lg transition duration-200 ${
                        isActive 
                          ? "bg-[#e90074] text-white" 
                          : "hover:bg-[#e90074] text-white"
                      }`}
                    >
                      <Icon className="mr-4 h-5 w-5" />
                      <span className="text-base font-medium">{item.label}</span>
                    </div>
                  </Link>
                </div>
              );
            })}

            {/* Profile Section */}
            <Profile />
            <Logout />
          </div>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};