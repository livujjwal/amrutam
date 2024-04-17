import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="bg-[#FFF7E2] h-12">
      <div className="max-sm:hidden flex items-center justify-between px-20 py-2">
        <img className="h-8" src={logo} alt="logo" />
        <div className="flex items-center gap-6">
          <p>Home</p>
          <p className="font-medium text-[#3A643B]">Find Doctors</p>
          <p>About Us</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="font-medium text-sm text-[#3A643B] px-5 py-1 rounded-md border border-[#3A643B]">
            Login
          </button>
          <button className="font-medium text-sm bg-[#3A643B] text-white px-5 py-1 rounded-md border border-[#3A643B]">
            Sign-up
          </button>
        </div>
      </div>
      <div className="sm:hidden flex px-4 py-2   items-center">
        <div className="self-end  justify-start pb-[.18rem]">
          <GiHamburgerMenu className="w-12" color="#3A643B" />
        </div>
        <img className=" h-6 mx-auto" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
