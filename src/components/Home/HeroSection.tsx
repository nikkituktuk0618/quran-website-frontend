const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0" />
      <div className="absolute inset-0 bg-[url('/hero_image.png')] bg-cover bg-center" />
      <div className="container relative z-10 px-6 pt-16 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight animate-fade-in">
            Make self-purification
            <br />
            by reading Quran
          </h1>
          <p className="mt-6 text-lg text-white/80 animate-slide-up">
            "The light of each time is from Allah to guide humility who are
            chosen to. In the time we live now we are moving to Allah towards.
            Your Quran tutor will be your guide to know Allah better."
          </p>
          <button className="bg-[#D9BC86] text-[#392618] px-8 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors mt-8 animate-scale-in">
            Start your journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
