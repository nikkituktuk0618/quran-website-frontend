import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#392618]/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-primary text-2xl font-playfair">
          <img
            src={"/logo.png"}
            alt="Logo"
            className="rounded-xl w-full h-[400px] object-cover"
            style={{ width: "50px", height: "50px" }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-white/90 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white/90 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#courses"
            className="text-white/90 hover:text-white transition-colors"
          >
            Courses
          </a>
          <a
            href="#faq"
            className="text-white/90 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="text-white/90 hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[#D9BC86] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#D9BC86] text-[#392618] px-6 py-2 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
            Join Now
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Menu Content - prevent clicks from closing */}
          <div
            className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#392618] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo area */}
            <div className="p-4 border-b border-white/10">
              <div className="text-[#D9BC86] text-xl font-playfair">Logo</div>
            </div>

            {/* Menu items */}
            <nav className="flex flex-col">
              <a
                href="#"
                className="p-4 text-white border-b border-white/10 hover:bg-[#4a3220] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="p-4 text-white border-b border-white/10 hover:bg-[#4a3220] transition-colors"
              >
                About Us
              </a>
              <a
                href="#courses"
                className="p-4 text-white border-b border-white/10 hover:bg-[#4a3220] transition-colors"
              >
                Courses
              </a>
              <a
                href="#faq"
                className="p-4 text-white border-b border-white/10 hover:bg-[#4a3220] transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="p-4 text-white border-b border-white/10 hover:bg-[#4a3220] transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* CTA Button */}
            <div className="p-4">
              <button className="w-full bg-[#D9BC86] text-[#392618] px-6 py-3 rounded-full font-medium hover:bg-[#c9ad79] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
