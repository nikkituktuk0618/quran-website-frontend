const Blog = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Latest Articles
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Insights and guidance for your spiritual journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/lovable-uploads/30f7afeb-ee2d-4edc-85a5-fa95755af9c2.png"
                  alt="Blog post"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-primary mb-2">Islamic Studies</div>
                <h3 className="text-xl font-playfair font-bold mb-2">
                  Understanding the Beauty of Tajweed
                </h3>
                <p className="text-secondary-foreground/70 mb-4">
                  Discover the importance of proper Quranic recitation and its
                  impact on understanding.
                </p>
                <button className="text-primary hover:text-primary-hover transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
