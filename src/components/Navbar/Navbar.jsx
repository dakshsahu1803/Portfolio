import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-background/50 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          {/* THEME: Changed color to primary */}
          <span className="text-primary">&lt;</span>
          <span className="text-text-primary">Daksh</span>
          <span className="text-primary">/</span>
          <span className="text-text-primary">Sahu</span>
          <span className="text-primary">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-text-secondary">
          {menuItems.map((item) => (
            <li
              key={item.id}
              // THEME: Changed hover and active colors
              className={`cursor-pointer hover:text-primary ${
                activeSection === item.id ? "text-primary" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/dakshsahu1803"
            target="_blank"
            rel="noopener noreferrer"
            // THEME: Changed text and hover colors
            className="text-text-secondary hover:text-primary"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/daksh-sahu-65828324b"
            target="_blank"
            rel="noopener noreferrer"
            // THEME: Changed text and hover colors
            className="text-text-secondary hover:text-primary"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              // THEME: Changed color to primary
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              // THEME: Changed color to primary
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-background/80 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-text-secondary">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-text-primary ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/dakshsahu1803"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/daksh-sahu-65828324b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
