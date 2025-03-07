import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const ClientsCaraousel = () => {
  return (
    <section className="section-padding bg-accent pt-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Our Students
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            What our students say about us
          </p>
        </div>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[1, 2, 3].map((index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="glass-card p-6 h-full">
                  <div className="flex flex-col h-full">
                    <p className="text-secondary-foreground/80 italic mb-4">
                      "The Quran learning experience has been transformative.
                      The teachers are knowledgeable and patient."
                    </p>
                    <div className="mt-auto">
                      <div className="text-primary font-semibold">Ahmed K.</div>
                      <div className="text-sm text-secondary-foreground/60">
                        Student
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsCaraousel;
