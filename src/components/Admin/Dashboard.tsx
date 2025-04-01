/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import { adminCapsuleList, adminDashboardCardn } from "@/utils/constant";
import CustomTable from "../common/Table";
import Capsule from "../common/Capsule";
import { getCaller } from "@/lib/apiCaller";

function Dashboard() {
  const [data,setData] = useState<any>([])
  useEffect(()=>{
    fetchAllUser();
  },[])

  const fetchAllUser = async()=>{
    const response = await getCaller({
      url:"users",
    })
    if(response.type === "success"){
      console.log(response.response)
      setData(response.response)
    }else{
      console.log("fail to fetch users")
    }
  }

  return (
    <div className="w-full pt-10 h-[calc(100%-50px)]">
      <section className="w-full flex flex-col gap-5 items-center ">
        <div className="w-[95%] max-[768px]:overflow-x-auto max-[768px]:pb-8 max-[768px]:px-2 flex md:flex-wrap gap-4 md:justify-between">
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
          <div className="w-[95%] overflow-auto"><CustomTable data={data}/></div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
