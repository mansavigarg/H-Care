import React from "react";
import { dashboard, bg } from "../../assets/Images";

const HeroMain = () => {
  return (
    <div>
        <div
        className="h-screen bg-cover bg-center rounded-4xl mx-6 box-border grid grid-cols-2 mb-5"
        style={{
            backgroundColor: "#092355", // The solid background color
            backgroundImage: `url(${bg})`, // The image on top
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply", // Blend the color and image
        }}>
        <div>
            {/* text */}
            <div className="mb-30">
                <div className="p-30">
                    <div className=" pb-1.5">
                        <p className=" text-xl text-gray-500">ENHANCING PATIENT CARE</p>
                    </div>
                    <div className=" text-6xl text-white pb-5">
                        <p>Smart Solutions</p>
                        <p>for Healthcare</p>
                        <p>Managment</p>
                    </div>
                    <div className="text-xl text-gray-500 pb-6">
                        <p>
                            Access critical patient data, and enhance collaboration
                        </p>
                        <p>
                            among your healthcare team effortlessly.
                        </p>
                    </div>
                    <div className=" flex gap-10 pb-5">
                        {/* email */}
                        <input placeholder="Your Email Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2\3 ">Register</button>
                    </div>
                    <div className=" flex gap-15 text-gray-500 ">
                        <div className=" flex justify-center items-center gap-2"> 
                            <div>
                                <svg class="h-6 w-6 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div> Get free trial for 7 days </div>
                        </div>
                        <div className=" flex justify-center items-center gap-2"> 
                            <div>
                                <svg class="h-6 w-6 text-green-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <div> will not spam your email </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* SECOND GRID */}
            {/* iamges */}
            <div>
                
                {/* 1st image */}
                <div
                className="h-90 bg-center rounded-7xl box-border mt-20 "
                style={{
                    backgroundImage: `url(${dashboard})`,
                    backgroundSize: "contain", // Ensure the full image is displayed
                    backgroundRepeat: "no-repeat",
                    aspectRatio: "16 / 9", // Prevent the image from repeating
                }}
                >
                    {/* <div
                className="h-100 bg-center rounded-7xl box-border mt-100 ml-6 "
                style={{
                    backgroundImage: `url(${dashboard})`,
                    backgroundSize: "contain", // Ensure the full image is displayed
                    backgroundRepeat: "no-repeat",
                    aspectRatio: "16 / 9", // Prevent the image from repeating
                }}
                ></div> */}
                    
                    
                </div>


            </div>
        </div>
    </div>
  );
};

export default HeroMain;
