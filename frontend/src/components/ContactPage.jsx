import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://project-ma.onrender.com/api/contact", formData)
      .then((response) => alert("Message sent!"))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="w-full min-h-screen p-10 bg-gradient-to-b from-red-500 to-yellow-400 text-white">
        <h1 className="text-3xl font-bold mb-9 text-center ">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Map Section */}
          <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3703.290466683621!2d87.73966897527949!3d21.846328980015546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDUwJzQ2LjgiTiA4N8KwNDQnMzIuMSJF!5e0!3m2!1sbn!2sin!4v1728542942195!5m2!1sbn!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
