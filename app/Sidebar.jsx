"use client";
import React from "react";
import {
  FaHome,
  FaUpload,
  FaFire,
  FaUsers,
  FaAward,
  FaRegFileVideo,
} from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Link from "next/link";
import {
  MdMovieCreation,
  MdCurrencyExchange,
  MdPayments,
  MdMessage,
} from "react-icons/md";

const Sidebar = ({ isSidebarOpen }) => {
  const sideBarLinks = [
    {
      icon: <FaHome style={{ color: "black" }} />,
      path: "/",
      name: "home",
      role: "admin",
    },
    {
      icon: <FaUpload style={{ color: "black" }} />,
      path: "/upload",
      name: "upload",
      role: "youtuber",
    },
    {
      icon: <FaUsers style={{ color: "black" }} />,
      path: "/users",
      name: "Users",
      role: "admin",
    },
    {
      icon: <FaFire style={{ color: "black" }} />,
      path: "/paidvideos",
      name: "Paid Videos",
      role: "viewer",
    },
    {
      icon: <BiSolidReport style={{ color: "black" }} />,
      path: "/reporting",
      name: "Reportings",
      role: "admin",
    },
    {
      icon: <FaMoneyCheckDollar style={{ color: "black" }} />,
      path: "/pricing",
      name: "Pricing and Policies",
      role: "viewer",
    },
    {
      icon: <FaAward style={{ color: "black" }} />,
      path: "/topearner",
      name: "Top Earners",
      role: "viewer",
    },
    {
      icon: <FaRegFileVideo style={{ color: "black" }} />,
      path: "/myvideos",
      name: "My Videos",
      role: "youtuber",
    },
    {
      icon: <MdMovieCreation style={{ color: "black" }} />,
      path: "/allvideos",
      name: "All Videos",
      role: "admin",
    },
    {
      icon: <MdMessage style={{ color: "black" }} />,
      path: "/contact",
      name: "Contact Us",
      role: "viewer",
    },
    {
      icon: <MdPayments style={{ color: "black" }} />,
      path: "/payment",
      name: "Payment",
      role: "youtuber",
    },
  ];

  const subMenus = [
    {
      name: "Rwandan",
      path: "/rwandan",
    },
    {
      name: "African",
      path: "/african",
    },
    {
      name: "Outside Africa",
      path: "/outside_africa",
    },
  ];

  return (
    <div
      className={`min-w-[20%] overflow-y-auto pb-20 max-h-screen  w-fit transition-all duration-300 ease-in-out min-h-screen flex flex-col h-fit bg-white fixed mt-10 border-r border-gray-800 ${
        isSidebarOpen ? "transition-all duration-300 ease-in-out" : "hidden"
      }`}
    >
      <ul className="flex flex-col justify-between w-full m-auto  p-3 mt-6 ">
        {sideBarLinks?.map((link, index) => (
          <li key={index} className="flex flex-col items-start  h-12">
            <Link href={link.path} className="flex w-full gap-[1rem] ">
              <p className="font-semibold my-auto items-center flex text-base ml-2">
                {link.icon}
              </p>
              <p className="font-semibold  justify-start  text-base ml-2 text-black ">
                {link.name}
              </p>
            </Link>
          </li>
        ))}
        <p className="flex text-black  text-lg ml-2 mt-16">TRENDING TAGS</p>
        {subMenus?.map((submenu, idx) => (
          <li key={idx} className="flex w-full gap-[1rem] ml-2 ">
            <Link href={submenu.path} className="text-black text-sm">
              {submenu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
