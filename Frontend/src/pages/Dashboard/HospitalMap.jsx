import React, { useState } from "react";
import { map } from "../../assets/images2";
import Navbar from "../LandingPage/Navbar";

const Sidebar = ({ selected, setSelected }) => {
  const menuItems = [
    "Dashboard",
    "Leaderboard",
    "HeatMap",
    "Time",
    "Defaulters",
    "Profile",
  ];
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5 shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-pink-500">H-Care</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={`p-3 my-3 cursor-pointer rounded-lg transition-all duration-300 ${
              selected === item
                ? "bg-pink-600 text-white"
                : "hover:bg-gray-800 hover:text-pink-400"
            }`}
            onClick={() => setSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const HospitalMap = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar selected={selected} setSelected={setSelected} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 min-h-screen p-8">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <img
            src={map}
            alt="Hospital Map"
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HospitalMap;
