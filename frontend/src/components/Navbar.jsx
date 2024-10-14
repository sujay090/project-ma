import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaDonate,
  FaImages,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ma from "../assets/ma.png"; // Ensure the image path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-yellow-400 px-8 py-1 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Durga Puja-themed title */}
        <div className="w-16 h-16 lg:w-20 lg:h-20">
          <img
            className="w-full h-full object-cover rounded-full"
            src={ma}
            alt="Durga Puja Ma"
          />
        </div>

        {/* Hamburger Icon (visible only on mobile) */}
        <div
          className="lg:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links - Hidden on small screens, shown on large screens */}
        <div className="hidden lg:flex space-x-8">
          <Link
            to="/"
            className="text-white flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
          >
            <FaHome /> <span>Home</span>
          </Link>
          <Link
            to="/schedule"
            className="text-white flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
          >
            <FaCalendarAlt /> <span>Schedule</span>
          </Link>
          <Link
            to="/donate"
            className="text-white flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
          >
            <FaDonate /> <span>Donate</span>
          </Link>
          <Link
            to="/gallery"
            className="text-white flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
          >
            <FaImages /> <span>Gallery</span>
          </Link>
          <Link
            to="/contact"
            className="text-white flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
          >
            <FaEnvelope /> <span>Contact Us</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Shown when isOpen is true */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 p-4">
          <Link
            to="/"
            className="block text-white py-2 flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
            onClick={toggleMenu}
          >
            <FaHome /> <span>Home</span>
          </Link>
          <Link
            to="/schedule"
            className="block text-white py-2 flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
            onClick={toggleMenu}
          >
            <FaCalendarAlt /> <span>Schedule</span>
          </Link>
          <Link
            to="/donate"
            className="block text-white py-2 flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
            onClick={toggleMenu}
          >
            <FaDonate /> <span>Donate</span>
          </Link>
          <Link
            to="/gallery"
            className="block text-white py-2 flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
            onClick={toggleMenu}
          >
            <FaImages /> <span>Gallery</span>
          </Link>
          <Link
            to="/contact"
            className="block text-white py-2 flex items-center space-x-2 hover:text-yellow-200 transition duration-300 font-merienda" // Added font class
            onClick={toggleMenu}
          >
            <FaEnvelope /> <span>Contact Us</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
