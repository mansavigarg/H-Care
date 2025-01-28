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

const Dashboard = () => {
  const [selected, setSelected] = useState("Leaderboard");

  const barData = {
    labels: ["Oct 2019", "Nov 2019", "Dec 2019", "Jan 2020", "Feb 2020", "Mar 2020"],
    datasets: [
      {
        label: "Inpatients",
        data: [1500, 3200, 4000, 3700, 2900, 4100],
        backgroundColor: "#6C63FF",
      },
      {
        label: "Outpatients",
        data: [500, 1100, 1400, 1200, 900, 1300],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const lineData = {
    labels: ["07 AM", "08 AM", "09 AM", "10 AM", "11 AM", "12 PM"],
    datasets: [
      {
        label: "Admissions",
        data: [30, 113, 85, 140, 95, 130],
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
      },
    ],
  };

  const doughnutData = {
    labels: ["Inpatients", "Outpatients"],
    datasets: [
      {
        data: [72, 28],
        backgroundColor: ["#6C63FF", "#4CAF50"],
      },
    ],
  };

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
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-gray-500">Total Active Doctors</h3>
            <p className="text-2xl font-bold">789</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-gray-500">This Week Compliance Rate</h3>
            <p className="text-2xl font-bold">82%</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-gray-500">Avg Handwash per Worker</h3>
            <p className="text-2xl font-bold">69</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-gray-500">Outpatients vs. Inpatients Trend</h3>
            <Bar data={barData} />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md flex justify-center items-center">
            <div className="w-65 h-65">
              <h3 className="text-gray-500 text-center">Patient Sentiment</h3>
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md mt-5">
          <h3 className="text-gray-500">Time Admitted</h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
