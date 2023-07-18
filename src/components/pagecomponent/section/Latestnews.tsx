import React from "react";
import gallery7 from "../../resources/gallery7.jpg";
import gallery4 from "../../resources/gallery4.jpg";
import gallery5 from "../../resources/gallery5.jpg";
import gallery6 from "../../resources/gallery6.jpg";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

const Poiret = Poppins({ subsets: ["latin"], weight: ["400"] });
const Latestnews = () => {
  const data = [
    {
      id: 1,
      image: gallery4,
      category: "Food Habit",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 2,
      image: gallery5,
      category: "Travel",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 3,
      image: gallery6,
      category: "Science",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 4,
      image: gallery7,
      category: "Fashion",
      title: "A Discount Toner Cartridge is Better Than Ever.",
      author: "Mark",
      date: "03,April 2022",
      comments: "06",
    },
  ];
  return (
    <div className="bg-white mt-4 p-4">
      <div className="bg-bgprimary">
        <h1 className="text-sm font-semibold text-white p-2">Latest News</h1>
      </div>
      <div>
        {data.map((value, i) => {
          return (
            <Link href={"/home/link"}>
              <div key={i} className="flex  mt-4 gap-2">
                <div className="relative group overflow-hidden">
                  <Image
                    src={value.image}
                    alt="gallery "
                    className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-fit"
                  />
                  <div className="absolute inset-0 bg-black opacity-50 z-20 hover:opacity-0 ">
                    {" "}
                  </div>
                  <h1 className=" absolute bottom-2 flex justify-center left-4 z-30 w-24 p-1 bg-badge text-white ">
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
                    <h1 className="flex items-center gap-1 text-xs ">
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
                  <p
                    className={`${Poiret.className} text-sm text-gray-500 mt-2`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Latestnews;
