import React from "react";
import { ABOUT, LANG } from "../utils/constants";
import facebook from "../assets/facebook.svg";
import insta from "../assets/insta.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
const About = () => {
  return (
    <div className="w-[100%] border-[#DCDCDC] border rounded-xl">
      <div className="w-[100%] h-10 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-t-xl flex items-center justify-between px-8 py-2">
        <p className="font-semibold text-xl">A Little About me</p>
        <button className="border border-black rounded-lg px-4 text-xs font-medium py-0 text-center">
          Follow <span className="font-bold text-base">+</span>{" "}
        </button>
      </div>
      <div className="pl-8 pr-16 py-4">
        <p className="text-[#999AA3] text-xs font-medium">{ABOUT}</p>
      </div>
      <div className="pl-8 pr-16 pb-4 flex items-center  w-[100%]">
        <div className="border-b border-[#DCDCDC] w-[90%]"></div>
        <p className="underline text-right text-xs font-medium w-[15%]">
          Read More
        </p>
      </div>
      <div className="pl-8 pr-16 py-4 flex items-center gap-12">
        <p className="text-xs font-medium">Language Spoken </p>
        {LANG.map((item) => (
          <p className="text-xs bg-[#F7F7FC] px-4 py-1 rounded-lg">{item} </p>
        ))}
      </div>
      <div className="pl-8 pr-16 py-4 flex items-center gap-2 justify-start">
        <img className="h-7" src={facebook} alt="facebook_logo" />
        <img className="h-7" src={insta} alt="insta_logo" />
        <img className="h-7" src={youtube} alt="youtube_logo" />
        <img className="h-7" src={twitter} alt="twitter_logo" />
      </div>
    </div>
  );
};

export default About;
