import React from "react";
import About from "./About";
import Specitialise from "./Specitialise";
import Treatment from "./Treatment";
import Experience from "./Experience";
import Reviews from "./Reviews";
import Appointment from "./Appointment";

const Body = () => {
  return (
    <div className="mt-[8rem] flex w-[90%] gap-16 mx-auto">
      <div className="w-[50%] flex flex-col justify-center gap-8">
        <About />
        <Specitialise />
        <Treatment />
        <Experience />
        <Reviews />
      </div>
      <div className="w-[50%]">
        <Appointment />
      </div>
    </div>
  );
};

export default Body;
