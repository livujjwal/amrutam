import React from "react";
import { TREATMENT } from "../utils/constants";

const Treatment = () => {
  return (
    <div className="w-[100%] border-[#DCDCDC] border rounded-xl">
      <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">The Concerns I Treat</p>
      </div>
      <div className="px-8 flex items-center flex-wrap gap-4 py-6">
        {TREATMENT.map((item) => (
          <button className="bg-[#F7F7FC] text-[#3A643B] px-[.7rem] py-1 text-sm font-medium rounded-lg">
            {item}
          </button>
        ))}
        <button className=" text-[#3A643B] px-[.7rem] py-1 text-sm font-medium rounded-lg border">
          + 5 More
        </button>
      </div>
    </div>
  );
};

export default Treatment;
