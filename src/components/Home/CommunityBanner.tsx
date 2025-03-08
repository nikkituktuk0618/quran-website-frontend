const CommunityBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image - keeping your existing image path setup */}
      <div className="absolute inset-0 bg-[url('/community_banner.jpeg')] bg-cover bg-center" />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0" />

      <div className="container relative z-10 mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <h4 className="text-white/90 text-xl font-italiana mb-1">
            Subscribe Us
          </h4>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-abhaya font-bold text-white mb-4">
            <span className="text-white/80">"</span>A Learning Space to Connect,
            <span className="block">
              Engage and Grow Together<span className="text-white/80">"</span>
            </span>
          </h2>

          <p className="text-white/80 mb-8 text-sm md:text-base leading-relaxed font-poppins">
            A private student community on WhatsApp and Zoom live sessions where
            you can discuss, reflect, and connect with like-minded learners.
            Lift each other up by holding onto the rope of Allah—the Qur'an.
            Plus, gain access to exclusive downloadable content to deepen your
            understanding of Islam as a whole.
          </p>

          <div className="text-left">
            <button className="bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBanner;
