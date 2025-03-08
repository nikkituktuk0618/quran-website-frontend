import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const CoursesSection = () => {
  return (
    <section id="courses" className="relative">
      {/* Two-tone background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="flex h-full">
          <div className="w-full md:w-3/5 bg-[#F0F7FF] h-full"></div>
          <div className="hidden md:block w-2/5 bg-[#0d647a] h-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-4 z-10">
            <div className="text-[#D9BC86] tracking-wider text-3xl font-bold font-italiana">
              OUR SERVICES
            </div>
            <h2 className="text-3xl md:text-6xl font-abhaya font-bold text-[#392618]">
              Courses and Classes
            </h2>
            <p className="text-gray-700">
              The Qur'an Everyday Classes are for everyone—whether you have
              prior knowledge of Islam or are just beginning your journey. It
              doesn't matter where you start; as long as you seek to learn, the
              Qur'an will guide you
            </p>
            <p className="text-gray-700">
              I created these classes for those who feel lost, overwhelmed, or
              unsure of where to begin. If you've ever wanted to understand your
              faith but didn't know how, these structured and easy-to-follow
              sessions will help you connect deeply with the Qur'an.
            </p>
            <p className="font-abhaya font-bold text-3xl text-[#392618]">
              Each class is designed to help you:
            </p>
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D9BC86]/10 flex items-center justify-center flex-shrink-0">
                  <img src="/course_icon_1.svg" alt="Understand" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Understand</h3>
                  <p className="text-gray-600 text-sm">
                    the Qur'an with clarity
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D9BC86]/10 flex items-center justify-center flex-shrink-0">
                  <img src="/course_icon_2.svg" alt="Reflect" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Reflect</h3>
                  <p className="text-gray-600 text-sm">
                    on its meaning and wisdom
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D9BC86]/10 flex items-center justify-center flex-shrink-0">
                  <img src="/course_icon_3.svg" alt="Implement" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Implement</h3>
                  <p className="text-gray-600 text-sm">
                    its teachings in daily life
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors mt-4">
              START LEARNING TODAY!
            </button>
          </div>

          {/* Right Column - Course Cards */}
          <div className="mt-8 md:mt-0 z-10">
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-full"
            >
              <CarouselContent>
                {[1, 2, 3].map((i) => (
                  <CarouselItem key={i} className="pl-4 md:pl-6">
                    <div className="bg-black rounded-lg shadow-md p-5 space-y-3 border border-gray-100 max-w-full overflow-hidden text-white">
                      <img src="/course_carousel_1.png" alt="course1" />
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4 text-[#D9BC86]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <h3 className="font-abhaya font-bold text-3xl text-white">
                        Quran Intermediate Course brother
                      </h3>
                      <p className="text-gray-300 text-sm font-poppins">
                        The Quran intermediate Course is for students with a
                        basic understanding of the Quran, aiming to enhance
                        their knowledge and skills.
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <div>
                          <p className="text-[#D9BC86] font-semibold">$16.00</p>
                          <p className="text-gray-400 text-xs ml-1">
                            Course Free
                          </p>
                        </div>
                        <button className="bg-[#4b7a69] text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-[#3a6957] transition-colors">
                          BOOK NOW
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="h-8 w-8 rounded-full text-white" />
                <CarouselNext className="h-8 w-8 rounded-full text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
