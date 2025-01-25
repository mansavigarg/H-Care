import React from "react";
import { CardsImage } from "../../assets/images2";

const Cards = () => {
  return (
    <div>
      <div className=" shadow-md p-6 rounded-3xl flex-row items-center justify-between transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-[#092355] hover:scale-105 w-100 h-80 ">
        <div className="bg-[#D3D3D3] rounded-3xl mb-3">
          <img
            src={CardsImage}
            alt="No Image"
            className="h-50 w-70 mx-auto"
          ></img>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Centralised Patient Report</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
