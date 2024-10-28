import React, { useState, useEffect } from "react";
import logo from "../logo/logopurr.png";
import { FiBell, FiMessageCircle, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 p-5 flex justify-between items-center ${
        scrolled
          ? "bg-site border-b border-red-600 mt-4 ml-4 shadow-lg bg-black border border-white shadow-md p-5 mr-5 ml-5 rounded-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-28 h-auto md:w-36" />

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Links for desktop and mobile */}
      <div className={`md:flex items-center space-x-6 ${menuOpen ? "block" : "hidden"} md:block`}>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer text-white block md:inline">
          About
        </Link>
        <Link to="adopt" smooth={true} duration={500} className="cursor-pointer text-white block md:inline">
          Adopt
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-white block md:inline">
          Contact
        </Link>
        <div className="flex items-center space-x-4 text-white">
          <FiBell size={24} className="cursor-pointer" />
          <FiMessageCircle size={24} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
