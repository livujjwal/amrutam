import React from "react";
import women_health from "../assets/women_health.svg";
import skin_care from "../assets/skin_care.svg";
import immune from "../assets/immune.svg";
import hair_care from "../assets/hair_care.svg";

const Specitialise = () => {
  return (
    <div className="w-[100%] border-[#DCDCDC] border rounded-xl">
      <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">I Specialize In</p>
      </div>
      <div className=" pl-8 flex items-center my-6">
        <img className="h-24 w-24" src={women_health} alt="women_health_logo" />
        <img className="h-24 w-24" src={skin_care} alt="skin_care_logo" />
        <img className="h-24 w-24" src={immune} alt="immune_logo" />
        <img className="h-24 w-24" src={hair_care} alt="hair_care_logo" />
      </div>
    </div>
  );
};

export default Specitialise;
