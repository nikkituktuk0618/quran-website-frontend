import React from "react";

const WhatIFearSection: React.FC = () => (
  <section id="about" className="section-padding pt-16 bg-[#EEF5FF]">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-6xl font-bold font-abhaya">What I fear</h2>
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            And recite to them, O Muḥammad, the news of him to whom We gave
            knowledge of Our signs, but he detached himself from them; so Satan
            pursued him, and he became of the deviants. And if We had willed, We
            could have elevated him thereby, but he adhered instead to the earth
            and followed his own desire. So his example is like that of the dog:
            if you chase him, he pants, or if you leave him, he still pants.
            That is the example of the people who denied Our signs. So relate
            the stories that perhaps they will give thought. Surah Al-A'raf 175
            -176
          </p>
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            In <b>Surah Al-A'raf (175-176)</b>, Allah describes a person who was
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
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            This verse serves as a powerful reminder that influence and wealth,
            power and fame can easily consume a person, leading them away from
            the true purpose of life that Allah has given all of us to live by.
            I fear becoming such a person. I seek knowledge not for the sake of
            worldly status but for the guidance that Allah bestows upon His
            righteous servants as an honour. I want to be among those whom
            Allah, in His mercy, grants wisdom and understanding—those He guides
            in times of need, protects from evil, and safeguards from calamity.
            And with this knowledge Allah bestows, I desire to fulfill the duty
            of spreading the truth:{" "}
            <b>
              There is no god except Allah, and only He deserves to be
              worshipped
            </b>
            . This is the path I wish to walk for the rest of my life. It gives
            me <b>hope, purpose, and peace.</b>
          </p>
        </div>
        <div className="relative">
          <div className="glass-card p-6">
            <img
              src={"/what_drives_me.png"}
              alt="About us"
              className="rounded-xl w-full h-[800px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhatIFearSection;
