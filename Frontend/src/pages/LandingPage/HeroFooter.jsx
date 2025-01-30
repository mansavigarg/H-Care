import React from "react";
import { logo } from "../../assets/images2";
import { ShieldCheck } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { HeartPulse } from "lucide-react";
import { Banknote } from "lucide-react";

const HeroFooter = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center bg-[#D3D3D3] h-30 rounded-4xl  mx-6">
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#E1E1FF] w-15 h-15 mr-5 pl-1 pt-1">
            <ShieldCheck size={50} color="green" />
          </div>
          <div>
            <p>Reduction in HAIs by</p>
            <p className="text-3xl">40-50%</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#E1E1FF] w-15 h-15 mr-5 pl-1 pt-1">
            <TrendingUp size={50} color="blue" />
          </div>
          <div>
            <p>Improvement in Compliance Rates by</p>
            <p className="text-3xl">70-80%</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#E1E1FF] w-15 h-15 mr-5 pl-1 pt-1">
            <HeartPulse size={50} color="red" />
          </div>
          <div>
            <p>Mortality Reduction in ICUs</p>
            <p className="text-3xl">10-20%</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#E1E1FF] w-15 h-15 mr-5 pt-1 pl-1">
            <Banknote size={50} color="gold" />
          </div>
          <div>
            <p>Cost Savings for Hospital</p>
            <p className="text-3xl">50k - 150k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
