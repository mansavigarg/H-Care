import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Sidebar = ({ selected, setSelected }) => {
  const menuItems = ["Dashboard", "Leaderboard", "HeatMap", "Time", "Defaulters", "Profile"];
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6 shadow-lg">
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-8">H-Care</h2>
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

const Leaderboard = () => {
  const leaderboardData = [
    { name: "Dr. John Doe", designation: "Cardiologist", compliance: "95%", frequency: "20" },
    { name: "Dr. Jane Smith", designation: "Neurologist", compliance: "89%", frequency: "18" },
    { name: "Dr. Alex Brown", designation: "Surgeon", compliance: "92%", frequency: "25" },
    { name: "Dr. Lisa White", designation: "Pediatrician", compliance: "88%", frequency: "22" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-700 text-xl font-semibold mb-4">Leaderboard</h3>
      <table className="w-full border-collapse border border-gray-200 text-gray-600">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border border-gray-300">Name</th>
            <th className="p-3 border border-gray-300">Designation</th>
            <th className="p-3 border border-gray-300">Compliance</th>
            <th className="p-3 border border-gray-300">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((doctor, index) => (
            <tr
              key={index}
              className={`text-center ${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-gray-200 transition-all`}
            >
              <td className="p-3 border border-gray-300">{doctor.name}</td>
              <td className="p-3 border border-gray-300">{doctor.designation}</td>
              <td className="p-3 border border-gray-300">{doctor.compliance}</td>
              <td className="p-3 border border-gray-300">{doctor.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => {
  const [selected, setSelected] = useState("Leaderboard");

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar selected={selected} setSelected={setSelected} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/2 max-w-sm">
            <input
              type="text"
              className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="Search..."
            />
            <AiOutlineSearch className="absolute top-3 left-3 text-gray-400" />
          </div>
          <FaUserCircle className="text-4xl text-gray-600" />
        </div>

        {/* Content Section */}
        {selected === "Leaderboard" ? <Leaderboard /> : <div className="text-gray-500">Other Components Here</div>}
      </div>
    </div>
  );
};

export default Dashboard;
