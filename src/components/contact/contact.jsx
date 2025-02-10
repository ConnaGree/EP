import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex  flex-col items-center justify-center px-4 py-12 text-white"
    >
      <h1 className="my-6 text-4xl font-semibold text-gray-300">Contact Me</h1>
      <div className="bg-gray-800 p-8 border-white/20 border-[1px] rounded-lg shadow-xl max-w-lg w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF891D] focus:ring-opacity-50"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF891D] focus:ring-opacity-50"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-2 w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF891D] focus:ring-opacity-50"
              placeholder="Write your message here"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#FF891D] text-white rounded-lg font-semibold text-lg hover:bg-[#e07b1e] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-400 hover:text-white transition"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+1234567890"
            className="text-gray-400 hover:text-white transition"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
