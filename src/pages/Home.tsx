import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-secondary/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-primary text-2xl font-playfair">Logo</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About Us
            </a>
            <a href="#courses" className="nav-link">
              Courses
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <a href="#contact" className="nav-link">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="btn-primary">Get Started</button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-lg border-b border-white/10 animate-slide-up">
            <div className="container px-6 py-4 flex flex-col gap-4">
              <a href="#" className="nav-link py-2">
                Home
              </a>
              <a href="#about" className="nav-link py-2">
                About Us
              </a>
              <a href="#courses" className="nav-link py-2">
                Courses
              </a>
              <a href="#faq" className="nav-link py-2">
                FAQ
              </a>
              <a href="#contact" className="nav-link py-2">
                Contact Us
              </a>
              <button className="btn-primary w-full mt-2">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#392618]" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/7800793c-28e7-44f8-bcaf-e3fe040f72da.png')] bg-cover bg-center opacity-50" />
        <div className="container relative z-10 px-6 pt-32 pb-20">
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
            <button className="btn-primary mt-8 animate-scale-in">
              Start your journey
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-accent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-primary uppercase tracking-wider text-sm">
                The Story Of
              </div>
              <h2 className="text-4xl font-playfair font-bold">About Me</h2>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Welcome to Quran tutoring platform, a dedicated platform
                designed to help you learn arabic and get connect with the
                Quran. Our platform is to provide a comprehensive learning
                experience for everyone who wants to make their own connection
                with the Quran through learning and sharing their journey with
                others.
              </p>
              <button className="btn-primary">Watch our history</button>
            </div>
            <div className="relative">
              <div className="glass-card p-6">
                <img
                  src="/photo-1519389950473-47ba0277781c"
                  alt="About us"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="section-padding bg-accent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-primary uppercase tracking-wider text-sm">
                Our Services
              </div>
              <h2 className="text-4xl font-playfair font-bold">
                Courses and Classes
              </h2>
              <p className="text-secondary-foreground/80">
                The Qur'an Everyday Classes are for everyone—whether you have
                prior knowledge of Islam or are just beginning your journey.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Understand</h3>
                    <p className="text-secondary-foreground/70">
                      the Qur'an with clarity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Reflect</h3>
                    <p className="text-secondary-foreground/70">
                      on its meaning and wisdom
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Implement</h3>
                    <p className="text-secondary-foreground/70">
                      its teachings in daily life
                    </p>
                  </div>
                </div>
              </div>
              <button className="btn-primary">START LEARNING TODAY!</button>
            </div>
            <div className="max-w-xl">
              <Carousel
                opts={{
                  align: "start",
                  axis: "y",
                }}
                className="w-full"
              >
                <CarouselContent className="-mt-1 h-[400px]">
                  {[1, 2, 3].map((i) => (
                    <CarouselItem key={i} className="pt-1 md:pt-2">
                      <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-5 h-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <h3 className="text-xl font-playfair font-bold">
                          Quran Intermediate Course brother
                        </h3>
                        <p className="text-secondary-foreground/70">
                          The Quran intermediate Course is for students with a
                          basic understanding of the Quran, aiming to enhance
                          their knowledge and skills.
                        </p>
                        <div className="flex justify-between items-center pt-4">
                          <div>
                            <span className="text-primary font-semibold text-xl">
                              $15.00
                            </span>
                            <span className="text-secondary-foreground/60 text-sm ml-2">
                              Courses Free
                            </span>
                          </div>
                          <button className="btn-primary text-sm px-4 py-2">
                            BOOK NOW
                          </button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Carousel Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Our Students
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
              What our students say about us
            </p>
          </div>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-6 h-full">
                    <div className="flex flex-col h-full">
                      <p className="text-secondary-foreground/80 italic mb-4">
                        "The Quran learning experience has been transformative.
                        The teachers are knowledgeable and patient."
                      </p>
                      <div className="mt-auto">
                        <div className="text-primary font-semibold">
                          Ahmed K.
                        </div>
                        <div className="text-sm text-secondary-foreground/60">
                          Student
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Join Community Banner */}
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

      {/* Blog Section */}
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

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-accent">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
              Find answers to common questions about our Quran learning program
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "What level of Arabic is required to start?",
                  a: "No prior knowledge of Arabic is required. We have courses for complete beginners and will guide you through the basics.",
                },
                {
                  q: "How are the online classes conducted?",
                  a: "Classes are conducted through video conferencing with qualified instructors. Sessions are interactive and tailored to your learning pace.",
                },
                {
                  q: "What materials do I need for the classes?",
                  a: "You'll need a stable internet connection, a device with a camera and microphone, and we'll provide all the necessary learning materials.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card"
                >
                  <AccordionTrigger className="px-6 text-lg font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-secondary-foreground/80">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
                Have questions? We'd love to hear from you.
              </p>
            </div>
            <div className="glass-card p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-secondary/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-secondary/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-secondary/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                    placeholder="Your message"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent mt-20 border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-primary text-2xl font-playfair">Logo</div>
              <p className="text-secondary-foreground/60">
                Empowering souls through Quranic education and spiritual
                guidance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#courses" className="nav-link">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="nav-link">
                    Beginner Quran
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Tajweed
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Arabic Language
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Islamic Studies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-secondary-foreground/60">
                <li>Email: info@example.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Islamic Center St</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-secondary-foreground/60">
            <p>© 2024 Quran Learning Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
