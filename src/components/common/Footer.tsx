import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-transparent text-white">
      {/* Background Image - This would be replaced with your actual image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer.png"
          alt="Night sky with mountains"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo and Tagline */}
      <div className="relative z-10 pt-8 pb-4 text-center">
        <div className="mx-auto w-16 h-16 mb-2">
          {/* Logo placeholder - replace with your logo */}
          <img src="/logo.png" alt="Logo" className="w-full" />
        </div>
        <p className="text-sm text-white/80 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>

      {/* Navigation Menu */}
      <div className="relative z-10 flex justify-center py-4">
        <nav className="flex flex-wrap justify-center space-x-6 text-sm">
          <a href="#" className="px-4 py-2 hover:text-primary">
            About Me
          </a>
          <a href="#" className="px-4 py-2 hover:text-primary">
            Courses and Classes
          </a>
          <a href="#" className="px-4 py-2 hover:text-primary">
            Blog
          </a>
          <a href="#" className="px-4 py-2 hover:text-primary">
            Student's Space
          </a>
          <a href="#" className="px-4 py-2 hover:text-primary">
            Contact
          </a>
          <a href="#" className="px-4 py-2 hover:text-primary">
            FAQ
          </a>
        </nav>
      </div>

      {/* Social Media Icons */}
      <div className="relative z-10 flex justify-center space-x-6 py-4">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </a>
      </div>

      {/* Copyright and Bottom Links */}
      <div className="relative z-10 py-4 mt-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/70 mb-4 md:mb-0">
              © 2025 QURAN EVERYDAY | All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-xs text-white/70">
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
