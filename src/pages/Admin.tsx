import Dashboard from "@/components/Admin/Dashboard";
import { adminPanelNavList } from "@/utils/constant";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  const [currentBar, setCurrentBar] = useState(adminPanelNavList[0].name ?? "");
  return (
    <section className="min-h-screen flex">
      <div className="w-[220px] flex flex-col justify-between border-r min-h-screen px-2 py-2 fixed">
        <div>
        <div className="flex justify-center w-full pb-10">
          <img src="/logo.png" alt="" width={60} height={60} />
        </div>
        <div className="flex flex-col gap-1">
          {adminPanelNavList.map((item, index) => (
            <Link key={index} to={item.link} ><div
              
              className={`${
                currentBar === item.name ? "bg-[#603F26] text-white" : ""
              } py-1 px-1 rounded-[6px] cursor-pointer`}
              onClick={() => setCurrentBar(item.name)}
            >
              {item.name}
            </div>
            </Link>
          ))}
        </div>
        </div>
        <div className="">
          Logout
        </div>
      </div>
      <div className="min-h-screen w-full pl-[220px] pb-8">
        <nav className="w-full h-[50px] border-b flex justify-end gap-2 items-center px-10">
                <span className="bg-blue-400 px-3 py-1 rounded-full font-semibold">
                  A
                </span>
                <span className="font-semibold text-sm">Admin</span>
              </nav>
        {/* {adminPanelNavPages[currentBar]} */}
        {
          currentBar == "Dashboard" ? <Dashboard/> : <Outlet/>
        }
      </div>
    </section>
  );
};

export default Admin;
