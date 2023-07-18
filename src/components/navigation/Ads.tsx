import Image from "next/image";
import React from "react";
import logo from "../resources/logo.png"

const Ads = () => {
  return (
    <div className="py-6 bg-white w-10/12 mx-auto grid  lg:grid-cols-12 grid-cols-1 gap-2 items-center">
    <div className="col-span-4 ">
      <Image src={logo} width={150} height={150} alt="gallery"/>
    </div>
    <div className="col-span-8 ">
      <h1 className="text-xl bg-gray-100 h-20 p-2 flex items-center justify-center">
        Giphy ad goes here
      </h1>
      {/* <Image src={giphy} width={300} height={50} /> */}
    </div>
  </div>
  );
};

export default Ads;
