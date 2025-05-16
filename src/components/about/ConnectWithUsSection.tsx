import React from "react";

const ConnectWithUsSection: React.FC = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="glass-card p-6">
            <img
              src={"/about_group.jpg"}
              alt="About us"
              className="rounded-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-6xl font-bold font-abhaya">Connect with us</h2>
          <p className="text-secondary-foreground/80 leading-relaxed font-poppins">
            Insights and Inspiration: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam dolor quisquam aspernatur.
            <br />
            My blog and videos highlight reflections on the Qur'an, mental
            health, and the social issues we face today. These pieces are meant
            to spark thought and provide practical ways to align our lives with
            Allah's guidance.
          </p>
          <a
            href="https://www.youtube.com/@al_faizsaifi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 text-white font-medium py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            SUBSCRIBE
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ConnectWithUsSection;
