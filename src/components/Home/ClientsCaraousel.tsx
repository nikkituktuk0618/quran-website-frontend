import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ClientsCarousel = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Rick Wright",
      role: "Student",
      image: "/student1.jpeg", // Update with your actual image path
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: 2,
      name: "Rick Wright",
      role: "Student",
      image: "/student2.jpeg", // Update with your actual image path
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: 3,
      name: "Rick Wright",
      role: "Student",
      image: "/student2.jpeg", // Update with your actual image path
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-italiana font-medium mb-2">
            Client Speak
          </h4>
          <h2 className="font-abhaya text-4xl md:text-5xl font-bold text-[#392618]">
            What Our Clients Say
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 mt-4 text-sm md:text-base">
            It is said that truth always prevails—and what truth is greater than
            the word of Allah? This is exactly what the students of Qur'an
            Everyday classes have experienced. The moment they began their
            journey, their lives transformed on a deeper level. These classes
            helped them break free from cultural stereotypes and false beliefs,
            gain clarity, strengthen their bond with Allah, and connect with the
            Qur'an in a way that truly changed them as individuals.
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-6xl mx-auto mt-3">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/3 p-1 mt-8"
                >
                  <div className="relative pt-10">
                    {/* Profile image - positioned to overlap the top of the card */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="rounded-full overflow-hidden w-16 h-16 border-4 border-white">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Testimonial card with rounded top corners */}
                    <div className="bg-[#4B5D42] text-white rounded-xl p-6 pt-10">
                      <p className="text-white/90 text-sm mb-6">
                        {testimonial.text}
                      </p>
                      <div className="mt-auto">
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-white/80">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static flex justify-center h-8 w-8 rounded-full border border-gray-300 hover:bg-gray-100 transform transition-all duration-300" />
              <CarouselNext className="static flex justify-center h-8 w-8 rounded-full bg-[#D9BC86] text-[#392618] hover:bg-[#c9ad79] transform transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
