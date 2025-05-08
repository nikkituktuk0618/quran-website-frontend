import Courses from "@/components/Admin/Courses";
import { Footer, Navbar } from "@/components/common";

function PublicCourses() {
  return (
    <div className="">
        <Navbar />
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden w-full">
          <div className="absolute inset-0" />
          <div className="absolute inset-0 bg-[url('/courses.png')] bg-cover bg-top bg-no-repeat top-0" />
          <div className="flex justify-end w-[80%] relative z-10 mx-6 pt-16 pb-20">
            <div className="">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-berkshire font-bold text-white leading-tight animate-fade-in md:text-right">
                Understand the <br /> Qur’an Like <br /> Never Before
              </h1>
              <p className="mt-6 text-lg font-poppins text-white/80 animate-slide-up md:text-right">
              A brief, engaging follow-up that reinforces the main benefit.
              </p>
            </div>
          </div>
        </section>
      <section className="min-h-screen w-full px-6 py-10">
        <h1 className="text-4xl font-bold">
            Courses
        </h1>
        <Courses creator="user"/>
      </section>
      <Footer/>
    </div>
  );
}

export default PublicCourses;
