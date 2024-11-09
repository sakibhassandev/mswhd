import ActiveLink from "@/app/ui/common/ActiveLink";
import { MdHome } from "react-icons/md";
import { LuCompass } from "react-icons/lu";
import { GrSettingsOption } from "react-icons/gr";

const NavLink = () => {
  return (
    <nav className="absolute left-0 top-[88px] bottom-0 flex-col gap-8 max-w-[110px] flex items-center w-[104px] text-white">
      <ActiveLink
        href="/"
        className="group text-gray-500 group-hover:text-gray-200 flex items-center flex-col w-16 p-1 h-16 rounded-md hover:bg-[#ffffff0d]"
        activeClassName="!text-[#7b5bf5]"
      >
        <MdHome className="text-3xl" />
        <p className="text-xs mt-2 opacity-0 text-gray-500 group-hover:text-gray-200 group-hover:opacity-100">
          Board
        </p>
      </ActiveLink>
      <ActiveLink
        href="/discover"
        className="group text-gray-500 group-hover:text-gray-200 flex items-center flex-col w-16 p-1 h-16 rounded-md hover:bg-[#ffffff0d]"
        activeClassName="!text-[#7b5bf5]"
      >
        <LuCompass className="text-3xl" />
        <p className="text-xs mt-2 opacity-0 text-gray-500 group-hover:text-gray-200 group-hover:opacity-100">
          Discover
        </p>
      </ActiveLink>
      <ActiveLink
        href="/library"
        className="group text-gray-500 group-hover:text-gray-200 flex items-center flex-col w-16 p-1 h-16 rounded-md hover:bg-[#ffffff0d]"
        activeClassName="!text-[#7b5bf5]"
      >
        <svg className="text-3xl" viewBox="0 0 512 512">
          <path
            d="M419.1 176H92.8a28.9 28.9 0 00-20.43 8.47 28.9 28.9 0 00-8.47 20.43v198.3a28.9 28.9 0 008.47 20.43 28.9 28.9 0 0020.43 8.47h326.3a28.9 28.9 0 0020.43-8.47A28.9 28.9 0 00448 403.2V204.9c.01-3.8-.74-7.56-2.19-11.07a29 29 0 00-6.26-9.38 29 29 0 00-9.38-6.26c-3.51-1.45-7.27-2.2-11.07-2.19z"
            stroke="currentcolor"
            strokeLinejoin="round"
            strokeWidth={32}
            fill="none"
          />
          <path
            d="M144 80h224M112 128h288"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={32}
            fill="none"
          />
        </svg>
        <p className="text-xs mt-2 opacity-0 text-gray-500 group-hover:text-gray-200 group-hover:opacity-100">
          Library
        </p>
      </ActiveLink>
      <ActiveLink
        href="settings"
        className="group text-gray-500 group-hover:text-gray-200 flex items-center flex-col w-16 p-1 h-16 rounded-md hover:bg-[#ffffff0d]"
        activeClassName="!text-[#7b5bf5]"
      >
        <GrSettingsOption className="text-3xl" />
        <p className="text-xs mt-2 opacity-0 text-gray-500 group-hover:text-gray-200 group-hover:opacity-100">
          Settings
        </p>
      </ActiveLink>
    </nav>
  );
};

export default NavLink;
