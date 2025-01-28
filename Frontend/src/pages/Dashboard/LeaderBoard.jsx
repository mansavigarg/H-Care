import { useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Sidebar = ({ selected, setSelected }) => {
  const menuItems = ["Dashboard", "Leaderboard", "HeatMap", "Time", "Defaulters", "Profile"];
  return (
    <div className="w-64 bg-gray-100 min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-5">H-Care</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={`p-2 my-2 cursor-pointer rounded-md text-gray-700 ${
              selected === item ? "bg-pink-600 text-white" : "hover:bg-gray-200"
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
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="text-gray-500 text-lg font-semibold mb-4">Leaderboard</h3>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border border-gray-300">Name</th>
            <th className="p-2 border border-gray-300">Designation</th>
            <th className="p-2 border border-gray-300">Compliance</th>
            <th className="p-2 border border-gray-300">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((doctor, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border border-gray-300">{doctor.name}</td>
              <td className="p-2 border border-gray-300">{doctor.designation}</td>
              <td className="p-2 border border-gray-300">{doctor.compliance}</td>
              <td className="p-2 border border-gray-300">{doctor.frequency}</td>
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
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="flex-1 p-5 bg-gray-50">
        <div className="flex justify-between items-center mb-5">
          <div className="relative">
            <input type="text" className="p-2 pl-8 border rounded-md" placeholder="Search..." />
            <AiOutlineSearch className="absolute top-2 left-2 text-gray-500" />
          </div>
          <FaUserCircle className="text-3xl text-gray-600" />
        </div>
        {selected === "Leaderboard" ? <Leaderboard /> : <div>Other Components Here</div>}
      </div>
    </div>
  );
};

export default Dashboard;