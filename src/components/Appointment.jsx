import React from "react";
import green_tick from "../assets/green_tick.svg";
import calender from "../assets/calender.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
const Appointment = () => {
  return (
    <div className="w-[100%] border-[#DCDCDC] border rounded-xl">
      <div className="m-4 py-2 px-4 text-sm border-[#DCDCDC] border rounded-xl flex items-center justify-between">
        <p className="font-medium">Appointment Fee</p>
        <p className="font-medium">₹699.00</p>
      </div>
      <div className="m-4 py-2 px-4 flex items-center  w-[100%]">
        <p className=" text-sm font-medium w-[50%]">
          Select your mode of session
        </p>
        <div className="border-b border-[#DCDCDC] w-[45%] -ml-2"></div>
      </div>
      <div className="m-4 py-2 px-4 flex items-center gap-8  w-[100%]">
        <div className="border-[#DCDCDC] border rounded-lg text-center px-8 py-2">
          <p className="text-xs font-medium">In-Clinic</p>
          <p className="text-[.65rem]">45 Mins</p>
        </div>
        <div className="bg-[#F2FBF2] border-[#3A643B] border rounded-lg text-center px-8 py-2">
          <p className="text-xs font-medium text-[#3A643B] gap-2">
            Video{" "}
            <img
              className="h-[.85rem] inline-block self-center"
              src={green_tick}
              alt="green_tick"
            />
          </p>
          <p className="text-[.65rem] text-[#818181]">45 Mins</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-lg text-center px-8 py-2">
          <p className="text-xs font-medium">Chat</p>
          <p className="text-[.65rem]">10 Mins</p>
        </div>
      </div>
      <div className="m-4 py-2 px-4 flex items-center  w-[100%]">
        <p className=" text-sm font-medium w-[28%] text-center mr-2">
          Pick a Time slot
        </p>
        <div className="border-b border-[#DCDCDC] w-[56%] -ml-2"></div>
        <img className="h-7 w-[10%]" src={calender} alt="calender" />
      </div>
      <div className="m-4 py-4 px-4 text-sm border-[#DCDCDC] border rounded-xl flex items-center justify-between">
        <img className="h-5 " src={left} alt="left" />
        <div className="bg-[#F2FBF2] border-[#3A643B] border rounded-lg text-center px-4 py-2">
          <p className="text-xs font-medium text-[#3A643B]">Mon, 10 Oct</p>
          <p className="text-[.65rem] text-[#818181] font-medium">10 slots</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-lg text-center px-4 py-2">
          <p className="text-xs font-medium">Tue, 11 Oct</p>
          <p className="text-[.65rem] text-[#D5512E] font-medium">02 slots</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-lg text-center px-4 py-2">
          <p className="text-xs font-medium ">Wed, 12 Oct</p>
          <p className="text-[.65rem] text-[#F1B93A] font-medium">05 slots</p>
        </div>
        <img className="h-5" src={right} alt="right" />
      </div>
      <h2 className="m-4  px-4 font-medium">Morning</h2>
      <div className="m-4  px-4 flex items-center  w-[100%] flex-wrap gap-4">
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">09:00 AM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">09:30 AM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">10:00 AM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">10:15 AM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">10:45 AM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center bg-[#3A643B] p-5">
          <p className=" font-medium text-white">11:00 AM</p>
        </div>
      </div>
      <h2 className="m-4  px-4 font-medium">Evening</h2>
      <div className="m-4  px-4 flex items-center  w-[100%] flex-wrap gap-4">
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">04:00 PM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">04:15 PM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">04:30 PM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">04:45 PM</p>
        </div>
        <div className="border-[#DCDCDC] border rounded-2xl text-center p-5">
          <p className=" font-medium ">05:15 PM</p>
        </div>
      </div>
      <div className="mx-4 my-8 flex items-center justify-center">
        <button className="bg-[#3A643B] w-[80%] text-white rounded-lg px-5 py-2 ">
          Make an appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
