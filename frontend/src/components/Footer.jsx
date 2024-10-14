import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-800 to-purple-900 text-white py-6 ">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Celebrate Durga Puja with Joy!
        </h2>
        <p className="text-center mb-4">
          Join us for the festivities and spread the love.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a href="mailto:info@durga-puja.com">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-4">
          <Link to="/" className="hover:text-yellow-300 transition mx-2">
            Home
          </Link>
          <Link
            to="/schedule"
            className="hover:text-yellow-300 transition mx-2"
          >
            Schedule
          </Link>
          <Link to="/donate" className="hover:text-yellow-300 transition mx-2">
            Donate
          </Link>
          <Link to="/gallery" className="hover:text-yellow-300 transition mx-2">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition mx-2">
            Contact Us
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Durga Puja. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
