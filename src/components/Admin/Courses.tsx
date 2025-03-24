import { coursesdata } from "@/utils/constant";
import CardList from "../common/CardList";

function Courses() {
  return (
    <div className="w-full pt-10 h-[calc(100%-50px)] flex justify-center ">
      <section className="flex flex-col gap-10 w-[95%]">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">My Courses</h1>
          <button className="bg-blue-400 text-white px-3 py-1 rounded-lg">Create Course</button>
        </div>

        <div className="flex flex-wrap gap-8">
          {coursesdata.map((item, index) => (
            <CardList
              key={index}
              content={item.content}
              creator={item.creator}
              rate={item.rate}
              lessons={item.lessons}
              rating={item.rating}
              name={item.name}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Courses;

