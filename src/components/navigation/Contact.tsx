"use client";
import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const Contact = () => {
  return (
    <div className=" bg-black ">
      <div className="w-10/12 mx-auto flex justify-between items-center gap-4 text-white py-2">
        <div className="flex gap-4 justify-center items-center">
          <BiLogoFacebook className="text-lg" />
          <AiOutlineTwitter className="text-lg" />
          <AiOutlineInstagram className="text-lg" />
        </div>
        <div className="flex gap-4 text-sm">
          <p className="hover:text-badge">+977-9817843621</p>
          <p  className="hover:text-badge">newsportal@gmail.com</p>

        </div>
        
      </div>
    </div>
  );
};

export default Contact;
