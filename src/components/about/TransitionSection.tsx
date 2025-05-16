import React from "react";

const TransitionSection: React.FC = () => (
  <section className="relative py-20">
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-7xl md:text-7xl font-abhaya font-bold mb-8">
          The Transition to Teaching
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
          Once my faith became firm, I couldn't ignore the overwhelming
          misinformation and propaganda about Islam spreading online because
          over 55% of anti-Muslim content comes from India alone in the whole
          world. The negative portrayal, the misconceptions, the cultural
          distortions—I knew I had to do something about it. That's when I
          created my Instagram page, where I could share authentic Islamic
          content and help young people clear their doubts about Islam.
        </p>
        <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
          What happened next was beyond my expectations. The page grew rapidly,
          with thousands of people resonating with my content. It became clear
          that people were searching for the truth, just like I had been. They
          needed someone to guide them toward Islam in a way that was clear,
          practical, and free from cultural biases.
        </p>
        <p className="text-gray-700 leading-relaxed font-poppins text-md font-bold">
          {" "}
          That's why Qur'an Everyday exists.{" "}
        </p>
        <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md">
          To make learning the Qur'an accessible, engaging, and truly
          life-changing.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4 font-poppins text-md">
          Because understanding Allah's words should never feel intimidating
          <br />- <b>it should feel like coming home.</b>
        </p>
        <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-md font-bold">
          If you're ready to begin this journey, start learning today.
        </p>
        <div className="flex justify-center">
          <button className="bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default TransitionSection;
