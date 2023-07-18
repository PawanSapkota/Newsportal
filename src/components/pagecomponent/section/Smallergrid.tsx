import React from "react";
import gallery8 from "../../resources/gallery8.jpg";
import gallery9 from "../../resources/gallery9.jpg";
import gallery10 from "../../resources/gallery10.jpg";
import gallery11 from "../../resources/gallery11.jpg";
import gallery12 from "../../resources/gallery12.jpg";
import gallery13 from "../../resources/gallery13.jpg";
import gallery14 from "../../resources/gallery14.jpg";
import gallery15 from "../../resources/gallery15.jpg";
import { BiMessageRounded } from "react-icons/bi";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";
import Image from "next/image";
import { Poppins } from "next/font/google";

const Poiret = Poppins({ subsets: ["latin"], weight: ["400"] });
const Smallergrid = () => {
  const data = [
    {
      id: 2,
      image: gallery9,
      category: "Travel",
      title: "Help Finding Information On Online Is So Easy",

      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 3,
      image: gallery10,
      category: "Science",
      title: "Compatible Inkjet Cartr Is So Famous",

      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 4,
      image: gallery11,
      category: "Fashion",
      title: "5 Tips For Offshore Soft Development",

      date: "03,April 2022",
      comments: "06",
    },
  ];

  const data1 = [
    {
      id: 2,
      image: gallery12,
      category: "Travel",
      title: "Help Finding Information On Online Is So Easy",

      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 3,
      image: gallery13,
      category: "Science",
      title: "Compatible Inkjet Cartr Is So Famous",

      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 4,
      image: gallery14,
      category: "Fashion",
      title: "5 Tips For Offshore Soft Development",

      date: "03,April 2022",
      comments: "06",
    },
    {
      id: 4,
      image: gallery15,
      category: "Fashion",
      title: "5 Tips For Offshore Soft Development",

      date: "03,April 2022",
      comments: "06",
    },
  ];

  return (
    <div className=" bg-white p-4 mt-4">
      <div className="bg-bgprimary">
        <h1 className="text-sm font-semibold text-white p-2">Editors Pick</h1>
      </div>

      <div className="flex flex-col  mt-4 gap-2">
        <div className="relative group overflow-hidden">
          <Image
            src={gallery8}
            alt="gallery "
            className="transition-all duration-700 ease-in-out transform scale-100 group-hover:scale-105 w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-20 hover:opacity-0 ">
            {" "}
          </div>
          <h1 className=" absolute bottom-2 flex justify-center left-4 z-30 w-40 p-1 bg-badge text-white ">
            Lifestyle
          </h1>
        </div>
        <div className="flex justify-center  flex-col gap-2 p-2">
          <h1 className="text-lg font-semibold hover:text-badge">
            A Discount Toner Cartige Better Than Ever.
          </h1>
          <div
            className={`${Poiret.className} flex gap-4  text-xs text-gray-500 mt-2`}
          >
            <h1 className="flex items-center gap-1 text-xs ">
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
          <p className={`${Poiret.className} text-xs text-gray-500 mt-2`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {data.map((val, i) => {
        return (
          <div className="mt-4">
            <div className="w-full bg-gray-200 h-px"></div>
            <div className="flex mt-4 gap-2">
              <Image src={val.image} alt="gallery" className="w-fit h-fit" />
              <div className="flex justify-center  flex-col gap-2 ">
                <h1 className="text-sm font-semibold hover:text-badge">
                  {val.title}
                </h1>
                <div
                  className={`${Poiret.className} flex gap-2  text-xs text-gray-500 mt-2`}
                >
                  <h1 className="flex items-center gap-1 text-xs ">
                    <AiOutlineCalendar className="text-lg" />
                    <span className="text-xs">{val.date}</span>
                  </h1>
                  <h1 className="flex items-center gap-1 ">
                    <BiMessageRounded className="text-lg" />
                    <span className="text-xs"> {val.comments}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* {News Letter} */}
      <div>
        <div className="bg-bgprimary mt-4">
          <h1 className="text-sm font-semibold text-white p-2">News Letter</h1>
        </div>
        <div>
          <p
            className={`${Poiret.className} tracking-wide text-gray-500 text-sm leading-6 mt-4 `}
          >
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought.
          </p>
          <div className="flex mt-4">
            <input
              placeholder="Email Address"
              type="email"
              className="border outline-none p-2 bg-bgsecondary text-sm"
            />
            <button className=" p-2 bg-badge text-white">Subscribe</button>
          </div>
          <p
            className={`${Poiret.className} tracking-wide text-gray-500 text-sm leading-6 mt-4 `}
          >
            You can unsubscribe us at any time
          </p>
        </div>
      </div>

      {/* {Ads} */}
      <div className="bg-bgsecondary flex items-center justify-center mt-4 h-40">
        <h1 className="text-xl ">Ad Here</h1>
      </div>

      {/* {Most Popular} */}
      <div className="mt-4">
        <div className="bg-bgprimary mt-4">
          <h1 className="text-sm font-semibold text-white p-2">Most Popular</h1>
        </div>

        {data1.map((value, index) => {
          return (
            <div key={index} className="mt-4">
              <div className="w-full bg-gray-200 h-px"></div>
              <div className="flex mt-4 gap-2">
                <Image
                  src={value.image}
                  alt="gallery"
                  className="w-fit h-fit"
                />
                <div className="flex justify-center  flex-col gap-2 ">
                  <h1 className="text-sm font-semibold hover:text-badge">
                    {value.title}
                  </h1>
                  <div
                    className={`${Poiret.className} flex gap-2  text-xs text-gray-500 mt-2`}
                  >
                    <h1 className="flex items-center gap-1 text-xs ">
                      <AiOutlineCalendar className="text-lg" />
                      <span className="text-xs">{value.date}</span>
                    </h1>
                    <h1 className="flex items-center gap-1 ">
                      <BiMessageRounded className="text-lg" />
                      <span className="text-xs"> {value.comments}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* {Social Networks} */}
    </div>
  );
};

export default Smallergrid;
