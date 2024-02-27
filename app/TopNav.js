import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaRightToBracket } from "react-icons/fa6";
import Link from "next/link";

const TopNav = ({ toggleSidebar }) => {
  return (
    <div className="w-full bg-white shadow-md p-3 fixed z-10 justify-between flex">
      <div className="flex md:space-x-8 space-x-2 w-[75%]">
        <HiBars3
          className="flex text-4xl justify-center my-auto cursor-pointer"
          onClick={toggleSidebar}
        />
        <h1 className="flex text-4xl text-[#191943] justify-center my-auto">
          BT <span className="flex text-[#EDB62E]">Net</span>
        </h1>
        <div className="flex border border-gray-400 px-2 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="flex outline-none border-none"
          />
          <IoIosSearch className="flex ml-2 my-auto justify-center" />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex m-auto justify-center items-center text-center bg-white shadow-md px-2 gap-4">
          <button className="bg-[#EDB62E] px-8 py-1">
            <Link href="/login">LOGIN</Link>
          </button>
          <FaRightToBracket className="text-[#EDB62E]" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
