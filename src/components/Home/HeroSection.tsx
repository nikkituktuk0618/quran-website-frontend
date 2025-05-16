import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0" />
      <div className="absolute inset-0 bg-[url('/hero_image.png')] bg-cover bg-center" />
      <div className="container relative z-10 px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-berkshire font-bold text-white leading-tight animate-fade-in">
            Make self-purification
            <br />
            by reading Quran
          </h1>
          <p className="mt-6 text-lg font-poppins text-white/80 animate-slide-up">
            It’s a light and a clear Book it guides those who pursue His
            pleasure to the ways of peace and brings them out from darkness's
            into the light. <br /> 5:15-16
          </p>
          <div className="my-4">
            <Link
              to="/login"
              className="bg-[#D9BC86] text-[#392618] px-8 py-3 my-4 rounded-full font-raleway font-bold hover:bg-[#c9ad79] transition-colors mt-8 animate-scale-in"
            >
              START YOUR JOURNEY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
