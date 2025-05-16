import { coursesdata } from "@/utils/constant";
import CardList from "../common/CardList";
import { useState } from "react";
import CreateCourse from "./Course/CreateCourses";
import { motion } from "framer-motion";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCaller } from "@/lib/apiCaller";
import Loading from "../common/Loading";
import { Empty } from "antd";

const getAllCourses = async () => {
  const res = await getCaller({
    url: "courses",
  });
  if (res.type === "success") {
    return res.response;
  }
  return [];
};

function Courses({ creator = "Admin",handleUserRoute = (id)=>{} }) {
  const { courseID } = useParams();
  const [createCourses, setCreateCourses] = useState(false);
  const {
    data: courses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });

  if (courseID) {
    return <Outlet />;
  }

  if (isLoading) {
    return <Loading />;
  }

  // Error state
  if (error) {
    return (
      <div className="h-full w-full">
        <Empty />
      </div>
    );
  }

  return (
    <div className="w-full pt-10 h-[calc(100%-50px)] flex  ">
      <section className="flex flex-col gap-10 w-full md:w-[95%]">
        {creator == "Admin" && (
          <div className="flex justify-between items-center px-4 md:px-0">
            <h1 className="text-xl font-semibold">My Courses</h1>

            <button
              className="bg-blue-400 text-white px-3 py-1 rounded-lg"
              onClick={() => setCreateCourses(!createCourses)}
            >
              {createCourses ? "Go Back" : "Create Course"}
            </button>
          </div>
        )}

        {createCourses ? (
          <CreateCourse setCreateCourses={setCreateCourses} />
        ) : (
          <motion.div
            className="flex justify-start flex-wrap gap-2 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              staggerChildren: 0.1,
            }}
          >
            {courses?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CardList
                  id={item.id}
                  content={item.content}
                  creator={creator}
                  rate={item.fee_amount}
                  lessons={item.lessons}
                  rating={4.5}
                  name={item.title}
                  icon={"/what_drives_me.png"}
                  handleUserRoute={handleUserRoute}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
}

export default Courses;
