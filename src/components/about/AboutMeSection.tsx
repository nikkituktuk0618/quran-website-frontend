import React from "react";

const AboutMeSection: React.FC = () => (
  <section id="about" className="section-padding pt-16">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="text-primary tracking-wider font-italiana text-2xl font-medium">
            About me
          </div>
          <h2 className="text-6xl font-bold font-abhaya">Al-faiz Saifi</h2>
          <p className="text-secondary-foreground/80 leading-relaxed">
            I have always been curious, constantly seeking answers to the world
            around me. As a child, I would bombard my father with endless
            questions—so many that it often left him frustrated because no one
            had all the answers to my questions. And that curiosity shaped my
            early years. My father and I used to watch automotive content, and I
            felt attracted to these machines. Liked them and I thought maybe my
            life would revolve around this passion, leading me to explore
            everything from cars, ships, and fighter jets to tanks and other
            machines that captured my interest.
          </p>
        </div>
        <div className="relative">
          <div className="glass-card p-6">
            <img
              src={"/about_group.jpg"}
              alt="About us"
              className="rounded-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
