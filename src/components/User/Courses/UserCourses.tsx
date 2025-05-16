/* eslint-disable @typescript-eslint/no-explicit-any */
import Courses from "@/components/Admin/Courses";
import { adminPanelNavList, loggedInUser } from "@/utils/constant";
import { logout } from "@/utils/helper/tokens";
import { ChevronLeft, LogOut } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const UserCourses = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [showCurrentbar, setShowCurrentbar] = useState(false);
  const [userData,setUserData] = useState<any>({})

  useEffect(()=>{

    const data = localStorage.getItem("user")
    if(data){
      setUserData(JSON.parse(data))
      console.log(JSON.parse(data))
    }
  },[])

  const handleUserRoute = async(id) =>{
    navigate(`/playlist/${id}`)
  }

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
            {loggedInUser.map((item, index) => (
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

        <div
          onClick={logout}
          className="px-2 py-4 border-t font-semibold cursor-pointer flex gap-2"
        >
          <LogOut className="rotate-180" />
          Logout
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
              {userData?.user?.name[0] || "U"}
            </span>
            <span className="font-semibold text-sm">{userData?.user?.name || "User"}</span>
          </div>
        </nav>

        {location.pathname === "/dashboard" ? (
          <div className="p-4">
            <h1 className="text-xl font-semibold">Courses</h1>
            <Courses creator="student" handleUserRoute={handleUserRoute}/>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </section>
  );
};

export default UserCourses;
