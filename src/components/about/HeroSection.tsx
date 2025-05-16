import React from "react";

const HeroSection: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <div className="absolute inset-0" />
    <div className="absolute inset-0 bg-[url('/about-banner.png')] bg-cover bg-center" />
    <div className="container relative z-10 px-6 pt-16 pb-20"></div>
  </section>
);

export default HeroSection;
