import { adminPanelNavList, adminPanelNavPages } from "@/utils/constant";
import React, { useState } from "react";

const Admin = () => {
  const [currentBar, setCurrentBar] = useState(adminPanelNavList[0].name ?? "");
  return (
    <section className="min-h-screen flex">
      <div className="w-[220px] border-r min-h-screen px-2 py-2">
        <div className="flex justify-center w-full pb-10">
          <img src="/logo.png" alt="" width={60} height={60} />
        </div>
        <div className="flex flex-col gap-1">
          {adminPanelNavList.map((item, index) => (
            <div
              key={index}
              className={`${
                currentBar === item.name ? "bg-[#603F26] text-white" : ""
              } py-1 px-1 rounded-[6px] cursor-pointer`}
              onClick={() => setCurrentBar(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-screen w-[calc(100%-220px)]">
        {adminPanelNavPages[currentBar]}
      </div>
    </section>
  );
};

export default Admin;
