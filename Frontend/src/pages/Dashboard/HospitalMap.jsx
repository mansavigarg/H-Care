import React, { useState } from 'react';

const HospitalMap = () => {
  const [pathPoints, setPathPoints] = useState('');
  const [pathVisible, setPathVisible] = useState(false);

  const handleRoomClick = (roomId) => {
    // Calculate the shortest path (dummy logic for now)
    let points = '';
    switch (roomId) {
      case 'room-1':
        points = '250,100 170,100 110,100';
        break;
      case 'room-2':
        points = '450,100 370,100 170,100 110,100';
        break;
      case 'operation-theater':
        points = '650,100 570,100 370,100 170,100 110,100';
        break;
      case 'room-3':
        points = '110,450 110,400 110,150 110,100';
        break;
      case 'room-4':
        points = '250,450 170,450 110,450 110,400 110,150 110,100';
        break;
      case 'pharmacy':
        points = '450,450 370,450 170,450 110,450 110,400 110,150 110,100';
        break;
      default:
        points = '';
    }
    setPathPoints(points);
    setPathVisible(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Realistic Hospital Map</h1>
      <p className="mb-4">Click on any room to calculate the shortest path to the Admin Office.</p>
      <svg
        id="hospital-map"
        className="border bg-gray-100"
        width="1000"
        height="700"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Admin Office */}
        <rect
          id="admin-office"
          className="fill-blue-200 stroke-black stroke-2 cursor-pointer"
          x="50"
          y="50"
          width="120"
          height="100"
        />
        <text x="110" y="120" textAnchor="middle" className="text-sm fill-black pointer-events-none">
          Admin Office
        </text>

        {/* Rooms */}
        <rect
          id="room-1"
          className="fill-blue-200 stroke-black stroke-2 cursor-pointer"
          x="250"
          y="50"
          width="120"
          height="100"
          onClick={() => handleRoomClick('room-1')}
        />
        <text x="310" y="120" textAnchor="middle" className="text-sm fill-black pointer-events-none">
          Room 1
        </text>

        <rect
          id="room-2"
          className="fill-blue-200 stroke-black stroke-2 cursor-pointer"
          x="450"
          y="50"
          width="120"
          height="100"
          onClick={() => handleRoomClick('room-2')}
        />
        <text x="510" y="120" textAnchor="middle" className="text-sm fill-black pointer-events-none">
          Room 2
        </text>

        <rect
          id="operation-theater"
          className="fill-blue-200 stroke-black stroke-2 cursor-pointer"
          x="650"
          y="50"
          width="150"
          height="100"
          onClick={() => handleRoomClick('operation-theater')}
        />
        <text x="725" y="120" textAnchor="middle" className="text-sm fill-black pointer-events-none">
          Operation Theater
        </text>

        <rect
          id="waiting-area"
          className="fill-green-200 stroke-black stroke-2"
          x="250"
          y="200"
          width="300"
          height="150"
        />
        <text x="400" y="275" textAnchor="middle" className="text-sm fill-black pointer-events-none">
          Waiting Area
        </text>

        <rect
          id="room-3"
          className="fill-blue-200 stroke-black stroke-2 cursor-pointer"
          x="50"
          y="400"
          width="120"
          height="100"
          onClick={() => handleRoomClick('room-3')}
        />
        <text x="110" y="470" textAnchor="middle" className="text-sm fill-black pointer-events-none">
          Room 3
        </text>

        <rect
          id="room-4"
          className="fill-blue-200 stroke-black stroke-2 cursor-pointer"
          x="250"
          y="400"
          width="120"
          height="100"
          onClick={() => handleRoomClick('room-4')}
        />
        <text x="310" y="470" textAnchor="middle" className="text-sm fill-black pointer-events-none">
          Room 4
        </text>

        <rect
          id="pharmacy"
          className="fill-yellow-200 stroke-black stroke-2 cursor-pointer"
          x="450"
          y="400"
          width="120"
          height="100"
          onClick={() => handleRoomClick('pharmacy')}
        />
        <text x="510" y="470" textAnchor="middle" className="text-sm fill-black pointer-events-none">
          Pharmacy
        </text>

        {/* Corridors */}
        <line className="stroke-gray-300 stroke-8" x1="170" y1="100" x2="250" y2="100" />
        <line className="stroke-gray-300 stroke-8" x1="370" y1="100" x2="450" y2="100" />
        <line className="stroke-gray-300 stroke-8" x1="570" y1="100" x2="650" y2="100" />
        <line className="stroke-gray-300 stroke-8" x1="310" y1="150" x2="310" y2="200" />
        <line className="stroke-gray-300 stroke-8" x1="310" y1="350" x2="310" y2="400" />
        <line className="stroke-gray-300 stroke-8" x1="170" y1="450" x2="250" y2="450" />
        <line className="stroke-gray-300 stroke-8" x1="370" y1="450" x2="450" y2="450" />
        <line className="stroke-gray-300 stroke-8" x1="570" y1="450" x2="650" y2="450" />
        <line className="stroke-gray-300 stroke-8" x1="110" y1="150" x2="110" y2="400" />

        {/* Path (Dynamic) */}
        <polyline
          id="navigation-path"
          className={`stroke-blue-500 stroke-4 ${pathVisible ? '' : 'hidden'}`}
          points={pathPoints}
          fill="none"
          strokeDasharray="5,5"
        />
      </svg>
    </div>
  );
};

export default HospitalMap;
