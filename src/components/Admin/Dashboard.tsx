import React from "react";
import Card from "../common/Card";
import { adminCapsuleList, adminDashboardCardn } from "@/utils/constant";
import CustomTable from "../common/Table";
import Capsule from "../common/Capsule";

function Dashboard() {
  return (
    <div className="w-full pt-10 h-[calc(100%-50px)]">
      <section className="w-full flex flex-col gap-5 items-center ">
        <div className="w-[95%] flex flex-wrap justify-between">
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
        <div className="py-5 w-full flex justify-center">
         <div className="w-[95%]"><Capsule data={adminCapsuleList}/></div> 
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[95%]"><CustomTable/></div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
