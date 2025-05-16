import React from "react";

const PlansSection: React.FC = () => (
  <section className="relative py-20">
    <img src="/about-middle.png" alt="About Middle" />
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8">
          But life had different plans.
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 font-poppins text-lg">
          Since the age of 15, I have been learning about Islam, though at
          first, it was out of necessity rather than devotion. The hardships in
          my life forced me to seek hope, and I found glimpses of it in Islam.
          However, I struggled with doubts. The propaganda against Islam, the
          divisions among Muslims, and my own skepticism held me back. It took
          years for my faith to solidify, and I wasn't always consistent. But
          with each hardship, I found myself turning back to Allah, finding
          comfort in the Qur'an. The more I read, the more I realized that Islam
          was not just a religion—it was the ultimate guide to life.
        </p>
      </div>
    </div>
  </section>
);

export default PlansSection;
