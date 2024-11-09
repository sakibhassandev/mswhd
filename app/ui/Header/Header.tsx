"use client";

import Link from "next/link";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import LoginDropDown from "./LoginDropDown";
import { useState } from "react";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <>
      <header className="flex gap-4 items-center justify-between h-[88px] px-5 absolute top-0 left-0 right-0 text-white">
        <Link href="/" className="text-xl font-bold">
          MSWHD
        </Link>
        <div className="w-full max-w-[420px] search_box relative">
          <input
            type="text"
            placeholder="Search or paste link"
            className="py-2.5 px-4 rounded-md bg-[#ffffff0d] outline-none text-white w-full"
          />
          <MdOutlineSearch className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-white mx-4" />
        </div>
        <div className="dropdown">
          <div
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
            className={`${
              isDropDownOpen ? "bg-[#ffffff0d]" : ""
            } user-icon p-3 rounded-md hover:bg-[#ffffff0d] group cursor-pointer ease-out duration-200 text-white`}
          >
            <FaRegUser
              className={`${
                isDropDownOpen ? "text-gray-100" : ""
              } text-2xl text-gray-400 group-hover:text-gray-100`}
            />
          </div>
          <LoginDropDown isDropDownOpen={isDropDownOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
