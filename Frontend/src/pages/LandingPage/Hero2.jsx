import React from "react";
import Cards from "./Cards";

const Hero2 = () => {
  return (
    <div>
      <div className=" justify-evenly mt-10 h-30 mx-25 grid grid-cols-3 gap-10">
        <div>
          <div className="text-green-400">Our Key Features</div>
          <div className="text-3xl text font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iste
          amet minima non quasi vel voluptates culpa illo voluptatibus, ipsa
          debitis, qui tenetur maxime! Officia provident esse quos rem
          quibusdam.
        </div>
        <div className='pl-50'>
          <button className="bg-[#092355] text-white px-4 py-2 rounded-lg hover:bg-[#d0d0ff] transition ml-10 ">
            Learn More
          </button>
        </div>
      </div>

      
      <div className='flex mx-8 justify-around my-10'>
        <Cards/>
        <Cards/>
        <Cards/>
      </div> 
    </div>
  );
};

export default Hero2;
