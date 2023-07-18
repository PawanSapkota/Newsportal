"use client";
import React, { useState } from "react";
import { NavData } from "./Navdata";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [toggleSubItem, setSubItem] = useState(false);

  const handleToggleSubItem = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubItem(!toggleSubItem);
  };
  return (
    <div className="bg-bgsecondary h-20 flex items-center">
      <div className="text-white w-10/12 mx-auto bg-bgprimary flex justify-between items-center px-4 h-full">
        <ul className="left primary-menu flex  items-center">
          {NavData.map((item, index) => {
            if (item.sub) {
              return (
                <li key={index} className="px-5 relative ">
                  <button
                    onClick={() => {
                      setSubItem((prev) => !prev);
                    }}
                    className="text-white leading-[80px] flex items-center gap-1"
                  >
                    {item.title} {item.sub && <MdOutlineKeyboardArrowDown />}
                  </button>

                  {item.sub && (
                    <ul
                      className={`${
                        toggleSubItem ? "opacity-100" : "opacity-0"
                      } absolute z-[1000] bg-white rounded-b-md border border-gray-200 p-3 min-w-[200px]`}
                    >
                      {item.sub.map((subItem, i) => {
                        return (
                          <Link href={subItem.path}>
                            <li key={i} className="">
                              <button
                                onClick={handleToggleSubItem}
                                type="button"
                                className="text-gray-800 text-sm"
                              >
                                {subItem.title}
                              </button>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={index} className="px-5 relative ">
                  <Link
                    href={item.path}
                    className="text-white leading-[80px] flex items-center gap-1"
                  >
                    {item.title} {item.sub && <MdOutlineKeyboardArrowDown />}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
        <div className="">
          <button className="p-2">
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
