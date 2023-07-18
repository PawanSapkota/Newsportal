import React from "react";
import gallery1 from "../../resources/gallery1.jpg";
import gallery2 from "../../resources/gallery2.jpg";
import gallery3 from "../../resources/gallery3.jpg";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { Poppins } from "next/font/google";
import Image from "next/image";

const Poiret = Poppins({ subsets: ["latin"], weight: ["400"] });

const Banner = () => {
  const data = [
    {
      id: 1,
      image: gallery1,
      category: "Food Habit",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 2,
      image: gallery2,
      category: "Food Habit",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
    },
  ];
  return (
    <div className="w-10/12 mx-auto pt-4 grid grid-cols-12 gap-4">
      <div className="col-span-8 relative overflow-hidden group hover:text-white">
        <Image
          src={gallery1}
          alt="gallery" 
          className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-full"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-20  hover:opacity-0 ">
          {" "}
        </div>
        <div className="absolute  z-30 left-0  bottom-2  p-4 w-fit  ">
          <h1
            className={`${Poiret.className} w-40 p-1 text-sm bg-badge text-white flex justify-center `}
          >
            Food Habit
          </h1>
          <p className="mt-4 text-white text-xl font-semibold">
            A Discount Toner Cartrige is Better Than Ever.
          </p>
          <div
            className={`${Poiret.className} flex gap-4 mt-4 text-xs text-white`}
          >
            <h1 className="flex items-center gap-1  ">
              <AiOutlineUser className="text-lg font-bold" />
              Mark
            </h1>
            <h1 className="flex items-center gap-1 ">
              <AiOutlineCalendar className="text-lg" />
              03,April 2022
            </h1>
            <h1 className="flex items-center gap-1 ">
              <BiMessageRounded className="text-lg" />
              06 Comments
            </h1>
          </div>
        </div>
      </div>

      <div className="col-span-4 flex flex-col items-center gap-2  ">
        {data.map((value, i) => {
          return (
            <div key={i} className="relative overflow-hidden group">
              <Image
                src={value.image}
                alt="gallery"
                className="transition-all duration-700 ease-in-out  group-hover:scale-105 w-full"
              />
              <div
                className="absolute  bg-black opacity-50 z-20 
              group-hover:opacity-0 transition-all duration-1000 delay-150 ease-in-out "
              >
                {" "}
              </div>

              <div className=" absolute inset-x-0 bottom-2  left-0 p-2">
                <h1
                  className={`${Poiret.className} w-32 p-1 text-sm bg-badge text-white flex justify-center `}
                >
                  {value.category}
                </h1>
                <p className="mt-2 text-white  font-semibold">{value.title}</p>
                <div
                  className={`${Poiret.className} flex gap-4 mt-4 text-xs text-white`}
                >
                  <h1 className="flex items-center gap-1  ">
                    <AiOutlineUser className="text-lg font-bold" />
                    {value.author}
                  </h1>
                  <h1 className="flex items-center gap-1 ">
                    <AiOutlineCalendar className="text-lg" />
                    {value.date}
                  </h1>
                  <h1 className="flex items-center gap-1 ">
                    <BiMessageRounded className="text-lg" />
                    {value.comments}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
