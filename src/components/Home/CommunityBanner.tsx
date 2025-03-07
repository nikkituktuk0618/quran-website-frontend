const CommunityBanner = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/30f7afeb-ee2d-4edc-85a5-fa95755af9c2.png')] bg-cover bg-center" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
          Join Our Community
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Be part of a growing community of Quran learners. Share your journey
          and learn from others.
        </p>
        <button className="btn-primary">Join Now</button>
      </div>
    </section>
  );
};

export default CommunityBanner;
