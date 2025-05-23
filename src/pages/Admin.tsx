import Dashboard from "@/components/Admin/Dashboard";
import { adminPanelNavList } from "@/utils/constant";
import { logout } from "@/utils/helper/tokens";
import { ChevronLeft, LogOut } from "lucide-react";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const location = useLocation();
  const [showCurrentbar, setShowCurrentbar] = useState(false);

  return (
    <section className="min-h-screen flex">
      <div
        tabIndex={showCurrentbar ? 0 : -1}
        onBlur={() => setShowCurrentbar(false)}
        className={`fixed bg-white z-30 min-h-screen border-r px-2 py-2 transition-all duration-300 ease-in-out 
          ${
            showCurrentbar
              ? "w-[220px] left-0 opacity-100"
              : "w-0 left-[-220px] opacity-0"
          } 
          md:w-[220px] md:left-0 md:opacity-100 flex flex-col justify-between`}
      >
        <div className="relative">
          <div className="flex justify-center w-full pb-10">
            <img src="/logo.png" alt="logo" width={60} height={60} />
          </div>

          <div className="flex flex-col gap-1">
            {adminPanelNavList.map((item, index) => (
              <Link key={index} to={item.link}>
                <div
                  className={`py-1 px-1 rounded-[6px] cursor-pointer ${
                    (location.pathname.includes(item.link) &&
                      item.link !== "") ||
                    (location.pathname === "/admin" && item.link === "")
                      ? "bg-[#603F26] text-white"
                      : ""
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setShowCurrentbar(false);
                    }
                  }}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>

          <div
            className="absolute right-0 top-0 md:hidden cursor-pointer"
            onClick={() => setShowCurrentbar(false)}
          >
            <ChevronLeft />
          </div>
        </div>

        <div onClick={logout} className="px-2 py-4 border-t font-semibold cursor-pointer flex gap-2">
        <LogOut className="rotate-180"/>Logout
        </div>
      </div>

      <div className="min-h-screen w-full md:pl-[220px] pb-8">
        <nav className="w-full h-[50px] border-b flex justify-between md:justify-end gap-2 items-center px-5 md:px-10">
          <div
            onClick={() => setShowCurrentbar(!showCurrentbar)}
            className="text-3xl md:hidden cursor-pointer"
          >
            ≡
          </div>

          <div>
            <span className="bg-blue-400 px-2 py-1 rounded-full font-semibold mr-2">
              A
            </span>
            <span className="font-semibold text-sm">Admin</span>
          </div>
        </nav>

        {location.pathname === "/admin" ? <Dashboard /> : <Outlet />}
      </div>
    </section>
  );
};

export default Admin;
