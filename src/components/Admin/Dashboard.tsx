import React from "react";
import Card from "../common/Card";
import { adminDashboardCardn } from "@/utils/constant";

function Dashboard() {
  return (
    <div className="w-full">
      <nav className="w-full h-[50px] border-b flex justify-end gap-2 items-center px-10">
        <span className="bg-blue-400 px-3 py-1 rounded-full font-semibold">
          A
        </span>
        <span className="font-semibold text-sm">Admin</span>
      </nav>
      <section className="w-full flex justify-center pt-10">
        <div className="w-[90%] flex flex-wrap justify-between">
          {adminDashboardCardn.map((item, index) => (
            <div key={index}>
              <Card
                number={item.number}
                subText={item.subText}
                title={item.title}
                bg={item.bg}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
