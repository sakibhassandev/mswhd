"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import { GrSettingsOption } from "react-icons/gr";
import { TbCapture } from "react-icons/tb";
import { IoMagnetOutline } from "react-icons/io5";
import { TbWheel } from "react-icons/tb";

const LoginDropDown = ({ isDropDownOpen }: { isDropDownOpen: boolean }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div
      className={`${
        isDropDownOpen ? "" : "hidden"
      } rounded-xl absolute top-full right-5 bg-[#0f0d20] shadow-[0px_0px_30px_rgba(123,91,245,0.37)] overflow-hidden z-10`}
    >
      <div className="w-[22rem] overflow-y-auto p-3 max-h-[540px] fade-animation">
        <div className="user-info flex items-center gap-3">
          <div className="profile-pic">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={1920}
              height={1020}
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="user-info text-gray-200">
            <h3 className="image text-sm mb-1">Anonymous user</h3>
            <Link href="/intro" className="text-sm hover:underline">
              Log In/Sign up
            </Link>
          </div>
        </div>
        <div
          onClick={() => {
            if (document.fullscreenElement) {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              }
            } else {
              if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
              }
            }
          }}
          className="text-[#b3afc7] cursor-pointer hover:bg-[#ffffff0d] fullmode px-3 py-4 flex items-center gap-2 mt-4 border-y border-gray-800"
        >
          <TbCapture className="text-2xl" />
          <p className="text-sm">
            {isFullscreen ? "Exit fullscreen mode" : "Enter fullscreen mode"}
          </p>
        </div>
        <Link href="/settings">
          <div className="text-[#b3afc7] cursor-pointer hover:bg-[#ffffff0d] fullmode px-3 py-4 flex items-center gap-2">
            <GrSettingsOption className="text-2xl" />
            <p className="text-sm">Settings</p>
          </div>
        </Link>
        <Link href="/magnet">
          <div className="text-[#b3afc7] cursor-pointer hover:bg-[#ffffff0d] fullmode px-3 py-4 flex items-center gap-2">
            <IoMagnetOutline className="text-2xl" />
            <p className="text-sm">Play URL/Magnet link</p>
          </div>
        </Link>
        <Link href="/help">
          <div className="border-b border-gray-800 text-[#b3afc7] cursor-pointer hover:bg-[#ffffff0d] fullmode px-3 py-4 flex items-center gap-2">
            <TbWheel className="text-2xl" />
            <p className="text-sm">Help & Feedback</p>
          </div>
        </Link>
        <div className="terms-and-policy flex flex-col text-[#b3afc7]">
          <Link
            href="/terms"
            className="text-sm cursor-pointer hover:bg-[#ffffff0d] px-3 py-4"
          >
            Terms of Service
          </Link>
          <Link
            href="/policy"
            className="text-sm cursor-pointer hover:bg-[#ffffff0d] px-3 py-4"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginDropDown;
