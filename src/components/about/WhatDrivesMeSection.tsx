import React from "react";

const WhatDrivesMeSection: React.FC = () => (
  <section id="about" className="section-padding bg-[#FFFBEF]">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="glass-card p-6">
            <img
              src={"/about-wolf.png"}
              alt="About us"
              className="rounded-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-6xl font-bold font-abhaya">What Drives Me</h2>
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            In Surah Al-A'raf (175-176), Allah describes a person who was
            blessed with knowledge and wisdom of His signs, yet this person
            detached himself from them and was ultimately led astray by his own
            choices he made, with Satan becoming his companion. If he had
            humbled himself and submitted to the truth revealed to him, Allah
            would have elevated the ranks of this person, honoring him with
            knowledge and blessings both in this world and the Hereafter.
            However, he chose worldly gains, which could never satisfy his
            nafs—no matter how much he acquired, he remained in constant
            pursuit, never feeling fulfilled.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatDrivesMeSection;
