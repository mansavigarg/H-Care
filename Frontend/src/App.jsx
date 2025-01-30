import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage/Landingpage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Leaderboard from "./pages/Dashboard/LeaderBoard";
import HospitalMap from "./pages/Dashboard/HospitalMap"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/maps" element={<HospitalMap/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
