import React from "react";
import { logo } from "../../assets/images2";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 px-8 ">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Company Logo" className="w-15 h-15 object-contain" />
        <h1 className="text-xl font-semibold">H-Care</h1>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-evenly items-center">
      <nav className="hidden md:flex text-gray-500 space-x-8">
        <a href="#" className="hover:text-black transition">
          Home
        </a>
        <a href="#" className="hover:text-black transition">
          Dashboard
        </a>
        <a href="#" className="hover:text-black transition">
          About Us
        </a>
        <a href="#" className="hover:text-black transition">
          Contact
        </a>
      </nav>
      <button className="bg-[#092355] text-white px-4 py-2 rounded-lg hover:bg-[#d0d0ff] transition ml-10 mr-4">
          Login
        </button>
        </div>
    </header>
  );
};

export default Navbar;
