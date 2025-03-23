import React from "react";
import { FaLocationArrow, FaPhone, FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "9:00 AM - 11:00 PM" },
    { id: 3, day: "Wednesday", time: "9:00 AM - 11:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 11:00 PM" },
    { id: 5, day: "Friday", time: "9:00 AM - 11:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 11:00 PM" },
  ];

  return (
    <div className="bg-[#007BFF] text-black py-8 shadow-xl mt-8 rounded-xl">
      <footer className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-black">Hospital Management System</h1>
            <p className="text-gray-700 mt-2">
              Providing the best healthcare services with experienced doctors and modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact", "Privacy And Policy"].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/\s/g, "")}`} className="text-gray-700 hover:text-black transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Working Hours</h4>
            <ul className="space-y-2">
              {hours.map((element) => (
                <li key={element.id} className="flex justify-between text-gray-700">
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-2 mb-2">
              <FaPhone className="text-gray-700" />
              <span className="text-gray-700">96000000</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <MdEmail className="text-gray-700" />
              <span className="text-gray-700">ss@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-gray-700" />
              <span className="text-gray-700">India</span>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-700 cursor-pointer">
          <FaFacebookSquare className="hover:text-blue-600 transition" />
          <FaYoutube className="hover:text-red-600 transition" />
          <FaSquareInstagram className="hover:text-pink-500 transition" />
        </div>
      </footer>

      {/* Copyright */}
      <p className="text-center text-lg py-4 font-semibold">
        &copy; {new Date().getFullYear()} Copyright By Shristi
      </p>
    </div>
  );
};

export default Footer;
