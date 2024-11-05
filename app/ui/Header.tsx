import Link from "next/link";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <>
      <header className="flex gap-4 items-center justify-between p-5 text-white">
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
        <div className="icons">
          <div className="user-icon p-3 rounded-md hover:bg-[#ffffff0d] group cursor-pointer ease-out duration-200 text-white">
            <FaRegUser className="text-2xl text-gray-400 group-hover:text-gray-100" />
          </div>
        </div>
      </header>
      <NavLink />
    </>
  );
};

export default Header;
