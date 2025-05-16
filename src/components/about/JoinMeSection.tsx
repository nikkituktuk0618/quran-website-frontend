import React from "react";

const JoinMeSection: React.FC = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="glass-card p-6">
            <img
              src={"/about_group.jpg"}
              alt="About us"
              className="rounded-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-6xl font-bold font-abhaya">
            Join Me on This Journey
          </h2>
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            If my journey resonates with you, then maybe you're seeking clarity,
            if you want to reconnect with Islam in a way that is both meaningful
            and practical—join me. I share Islamic knowledge in a way that is{" "}
            <b>easy to understand, deeply personal, and transformative.</b>
          </p>
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            You can follow me on my{" "}
            <b>social media platforms or also join my classes.</b> Let's walk
            this path together, seeking knowledge and growing in faith.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default JoinMeSection;
