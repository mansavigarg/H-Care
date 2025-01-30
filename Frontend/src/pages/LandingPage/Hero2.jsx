import React from "react";
import Cards from "./Cards";
import { laptop, badge, video } from "../../assets/images2";

const Hero2 = () => {
  return (
    <div>
      <div className=" justify-evenly mt-10 h-30 mx-25 grid grid-cols-3 gap-10">
        <div>
          <div className="text-green-400">Our Key Features</div>
          <div className="text-3xl text font-bold">
          Redefining Hand Hygiene Compliance: From Actions to Outcomes.
          </div>
        </div>

        <div>
        Our AI-powered platform ensures hand hygiene compliance by monitoring handwashing in real-time using WHO guidelines. It reduces healthcare-associated infections with actionable insights and seamless integration for better patient safety.
        </div>

        <div className='pl-50'>
          <button className="bg-[#092355] text-white px-4 py-2 rounded-lg hover:bg-[#d0d0ff] transition ml-10 ">
            Learn More
          </button>
        </div>
      </div>

      
      <div className='flex mx-8 justify-around my-10'>
        <Cards imagePath={video} title="AI Model Development" description="Train a model to recognize handwashing gestures, duration, and techniques per WHO guidelines" />
        <Cards imagePath={badge} title="Smart Badge System" description="Deploy wearable badges with real-time, color-coded feedback to promote accountability."/>
        <Cards imagePath={laptop} title="Centralized Dashboard" description=" A React.js dashboard for monitoring compliance trends, analytics, and individual reports."/>
      </div> 
    </div>
  );
};

export default Hero2;
