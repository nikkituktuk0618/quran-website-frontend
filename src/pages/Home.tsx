import { FC } from "react";
import {
  CoursesSection,
  HeroSection,
  ClientsCaraousel,
  CommunityBanner,
  ContactForm,
  AboutSection,
} from "@/components/Home";
import { Navbar, Blog, FrequentAQ, Footer } from "@/components/common";

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Clients Carousel Section */}
      <ClientsCaraousel />

      {/* Join Community Banner */}
      <CommunityBanner />

      {/* Blog Section */}
      <Blog />

      {/* FAQ Section */}
      <FrequentAQ />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
