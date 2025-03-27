import { coursesdata } from "@/utils/constant";
import CardList from "../common/CardList";
import { useState } from "react";
import CreateCourse from "./Course/CreateCourses";
import { motion } from "framer-motion";

function Courses() {
  const [createCourses, setCreateCourses] = useState(false);

  return (
    <div className="w-full pt-10 h-[calc(100%-50px)] flex justify-center ">
      <section className="flex flex-col gap-10 w-full md:w-[95%]">
        <div className="flex justify-between items-center px-4 md:px-0">
          <h1 className="text-xl font-semibold">My Courses</h1>
          <button
            className="bg-blue-400 text-white px-3 py-1 rounded-lg"
            onClick={() => setCreateCourses(!createCourses)}
          >
            {createCourses ? "Go Back" : "Create Course"}
          </button>
        </div>

        {createCourses ? (
          <CreateCourse setCreateCourses={setCreateCourses} />
        ) : (
          <motion.div
            className="flex justify-center flex-wrap gap-2 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              staggerChildren: 0.1,
            }}
          >
            {coursesdata.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CardList
                  key={index}
                  id={index}
                  content={item.content}
                  creator={item.creator}
                  rate={item.rate}
                  lessons={item.lessons}
                  rating={item.rating}
                  name={item.name}
                  icon={item.icon}
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
