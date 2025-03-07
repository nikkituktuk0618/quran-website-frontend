import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent mt-20 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-primary text-2xl font-playfair">Logo</div>
            <p className="text-secondary-foreground/60">
              Empowering souls through Quranic education and spiritual guidance.
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
  );
};

export default Footer;
