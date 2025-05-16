import React from "react";

const MissionVisionSection: React.FC = () => (
  <section id="about" className="section-padding bg-[#ECFFF4]">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="glass-card p-6">
            <h2 className="text-7xl md:text-7xl font-abhaya font-bold mb-8">
              My Mission and Vision
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-6xl font-bold font-abhaya">What Drives Me</h2>
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            What I have felt and experienced in diving deep into the Qur'an is
            beyond my imagination and I can't even explain it to you, it
            overwhelms and takes control of me often. But I believe that
            everyone deserves to know the truth. And this is why I want to make
            Islamic knowledge accessible to everyone—regardless of age,
            background, or personal struggles. I want to introduce people to the{" "}
            <b>real and practical Islam</b> that exists in the Qur'an and
            Sunnah, unfiltered by cultural misconceptions or modern distortions.
          </p>
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            Islam is not just a set of rituals; it is a <b>beacon of light</b>,
            capable of erasing the darkness that so many people carry in their
            hearts that they received from the corruption of this Dunya. The
            answers, the comfort, and the peace that people seek—they are all
            found in the remembrance{" "}
            <b>of Allah and the teachings of the Qur'an and Sunnah.</b> My goal
            is to show people that Islam is not just something to believe in; it
            is something to live by and is more than capable to not only
            transform your life but this whole world as well, and cleanse it
            from the chaos.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
