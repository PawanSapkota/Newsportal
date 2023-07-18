import React from "react";
import gallery16 from "../../resources/gallery16.jpg";
import gallery17 from "../../resources/gallery17.jpg";
import gallery18 from "../../resources/gallery18.jpg";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import { Poppins } from "next/font/google";

const Poiret = Poppins({ subsets: ["latin"], weight: ["400"] });
const Popularpost = () => {
  const data = [
    {
      id: 1,
      image: gallery17,
      category: "Food Habit",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 2,
      image: gallery17,
      category: "Travel",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
    },
  ];
  return (
    <div className="bg-white p-4 mt-4">
      <div className="bg-bgprimary">
        <h1 className="text-sm font-semibold text-white p-2">Popular Post</h1>
      </div>
      <div className=" relative overflow-hidden group mt-4">
        <Image
          src={gallery16}
          alt="gallery"
          className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-full"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-20 hover:opacity-0 ">
          {" "}
        </div>
        <div className="absolute inset-x-0  left-0  bottom-2 z-30 p-4 w-fit ">
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

      <div className="grid grid-cols-2 gap-4">
        {data.map((value, i) => {
          return (
            <div className="flex flex-col  mt-4 gap-2">
              <div className="relative group overflow-hidden">
                <Image
                  src={value.image}
                  alt="gallery "
                  className="transition-all duration-300 transform scale-100 group-hover:scale-105 w-full"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-20 hover:opacity-0 ">
                  {" "}
                </div>
                <h1 className=" absolute bottom-2 flex justify-center left-4 z-30 w-36 p-1 bg-badge text-white ">
                  {value.category}
                </h1>
              </div>
              <div className="flex justify-center  flex-col gap-2 p-2">
                <h1 className="text-lg font-semibold hover:text-badge">
                  {value.title}
                </h1>
                <div
                  className={`${Poiret.className} flex gap-4  text-xs text-gray-500 mt-2`}
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
                <p className={`${Poiret.className} text-sm text-gray-500 mt-2`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popularpost;
