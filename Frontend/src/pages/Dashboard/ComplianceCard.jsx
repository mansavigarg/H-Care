import React from "react";

const ComplianceCard = ({ complianceRate }) => {
  const radius = 40; // Arc ka radius
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
//   const arcLength = (complianceRate / 100) * circumference; // Compliance rate ke hisaab se arc length
  const arcLength = 220 // Compliance rate ke hisaab se arc length

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 w-72 border border-gray-300 text-center">
      <h3 className="text-gray-500 font-medium">Overall Compliance</h3>

      {/* SVG Full Circular Arc */}
      <div className="relative w-40 h-40 mx-auto mt-4">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {/* Background Circle (Grey) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#E0E0E0"
            strokeWidth={strokeWidth}
          />
          {/* Progress Circle (Green) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#4CAF50"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - arcLength}
            strokeLinecap="round"
            transform="rotate(-90 50 50)" // Rotate to start from top
          />
        </svg>

        {/* Compliance Percentage Display */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <span className="text-green-600 text-3xl font-bold">{complianceRate}91%</span>
          <span className="text-gray-500 text-sm">Compliance</span>
        </div>
      </div>

      <p className="text-green-600 font-semibold text-lg mt-3">Superb!</p>
      
    </div>
  );
};

export default ComplianceCard;
