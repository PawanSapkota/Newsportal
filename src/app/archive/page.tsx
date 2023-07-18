import Toolbar from "@/components/navigation/Toolbar";
import Breaking from "@/components/pagecomponent/breakingnews/Breakingnews";
import Latestnews from "@/components/pagecomponent/section/Latestnews";
import Smallergrid from "@/components/pagecomponent/section/Smallergrid";
import { Poppins } from "next/font/google";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const Archive = () => {
  console.log("hello");
  return (
    <div>
      <Toolbar />
      <div className="bg-bgsecondary">
        <div className="w-10/12 mx-auto pt-4  ">
          <div
            className={`bg-[#f6214b] flex items-center justify-center flex-col gap-4 h-52 ${poppins.className}`}
          >
            <h1 className="text-white font-bold text-4xl">Archive Post</h1>
            <div className="flex gap-2 items-center">
              <p className="text-white text-sm">Home </p>
              <span>
                <AiOutlineArrowRight className="text-white text-sm " />
              </span>
              <p className="text-white text-sm">Archive Post</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <Latestnews />
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className=" font-semibold bg-bgsecondary
                   hover:bg-badge text-white p-2"
                >
                  Load More
                </button>
              </div>
            </div>
            <div className="col-span-4">
              <Smallergrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
