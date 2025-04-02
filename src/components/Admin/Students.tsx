/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import CustomTable from "../common/Table";
import { adminDashboardCardn } from "@/utils/constant";
import Card from "../common/Card";
import { getCaller } from "@/lib/apiCaller";

export default function Students() {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    const response = await getCaller({
      url: "users",
    });
    if (response.type === "success") {
      const filteredData = response.response.map(
        ({ password, ...rest }) => rest
      );
      setData(filteredData);
    } else {
      console.log("fail to fetch users");
    }
  };
  return (
    <div className="w-full pt-10 h-[calc(100%-50px)]">
      <section className="w-full flex flex-col gap-5 items-center">
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
        <div className="w-full flex justify-center">
          <div className="w-[90%]">
            <CustomTable data={data} />
          </div>
        </div>
      </section>
    </div>
  );
}
