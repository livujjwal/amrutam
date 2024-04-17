import React from "react";
import home_icon from "../assets/home_icon.svg";
const Experience = () => {
  return (
    <div className="w-[100%] border-[#DCDCDC] border rounded-xl">
      <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">My Work Experience</p>
      </div>
      <div className="pl-8 my-4">
        <p className="text-[#3A643B] text-lg font-bold">
          I have been in practice for : 7+ Years
        </p>
      </div>
      <div className="pl-8 my-6 flex  gap-8">
        <img src={home_icon} alt="homo_icon" />
        <div>
          <p className=" font-semibold">Midtown Medical Clinic</p>
          <p className="text-[#999AA3] font-medium ">Senior doctor</p>
        </div>
        <p className="text-[#6E707D] pl-4 text-lg">2016-present</p>
      </div>
      <div className="pl-8 my-6 flex  gap-8">
        <img src={home_icon} alt="homo_icon" />
        <div>
          <p className=" font-semibold">Midtown Medical Clinic</p>
          <p className="text-[#999AA3] font-medium ">Senior doctor</p>
        </div>
        <p className="text-[#6E707D] pl-4 text-lg">2010-2015</p>
      </div>
    </div>
  );
};

export default Experience;
