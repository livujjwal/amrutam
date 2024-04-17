import React from "react";
import design from "../assets/design.svg";
import star from "../assets/star.svg";
import blue_tick from "../assets/blue_tick.svg";
import profile_picture from "../assets/profile_picture.svg";
const Hero = () => {
  return (
    <div className="w-[90%] h-[12rem] mx-auto my-8">
      <div className="w-[100%] h-[6rem] rounded-t-sm ">
        <img className="  object-cover rounded-t-lg " src={design} />
      </div>
      <div className="w-[100%] h-[11rem] bg-[#FFFBF2] flex">
        <img className=" h-[10rem] m-4 object-cover" src={profile_picture} />
        <div className="flex items-center justify-between mt-16 px-4 gap-[9rem] text-sm">
          <div>
            <p className="font-medium">
              Dr. Bruce Willis{" "}
              <img
                className="h-[.9rem] inline-block self-center"
                src={blue_tick}
                alt="blue_tick"
              />
            </p>
            <p className="text-[#3A643B]">Genologist</p>
            <div className="py-1 flex items-center gap-1">
              <p className="text-[.8rem]">4.2</p>
              <img className="h-[.8rem]" src={star} alt="star" />
              <img className="h-[.8rem]" src={star} alt="star" />
              <img className="h-[.8rem]" src={star} alt="star" />
              <img className="h-[.8rem]" src={star} alt="star" />
            </div>
          </div>
          <div className="flex  items-center gap-20 justify-between">
            <div className="flex flex-col items-center ">
              <p>Followers</p>
              <p className="font-medium">850</p>
            </div>
            <div className="flex flex-col items-center ">
              <p>Following</p>
              <p className="font-medium">18.5K</p>
            </div>
            <div className="flex flex-col items-center ">
              <p>Post</p>
              <p className="font-medium">250</p>
            </div>
          </div>
          <button className="bg-[#3A643B] text-white rounded-lg px-5 py-2 ">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
