/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const clickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="hidden lg:block">
        <div className="bg-[#0A0823] px-4 flex justify-between w-[100vw] fixed top-0 z-[100]">
          <div className="flex flex-col justify-center ml-12">
            <Link href="/">
              <img src="BLASTOUT 2023.png" alt="" className="h-[20px]"></img>
            </Link>
          </div>
          <div className="py-4 right-4 top-full max-w-full flex mr-[70px] items-center justify-evenly">
            <div className="mx-1 flex justify-center relative group w-[120px]">
              <Link
                href="/"
                className="text-[#FBDF97] text-lg font-inter group-hover:font-bold transition-all duration-200 z-[10]"
              >
                BERANDA
              </Link>
              <div className="lg:w-[85px] lg:h-[3px] transition duration-200 absolute pt-8 border-b-2 border-[#b5a16d] group-hover:opacity-100 opacity-0 group-hover:translate-x-3"></div>
            </div>
            <div className="mx-1 flex justify-center relative group w-[120px]">
              <Link
                href="/tentang"
                className="text-[#FBDF97] text-lg font-inter group-hover:font-bold transition-all duration-200 z-[10]"
              >
                TENTANG
              </Link>
              <div className="lg:w-[80px] lg:h-[3px] transition duration-200 absolute pt-8 border-b-2 border-[#b5a16d] group-hover:opacity-100 opacity-0"></div>
            </div>
            <div className="mx-1 flex justify-center relative group w-[120px]">
              <Link
                href="/tryout"
                className="text-[#FBDF97] text-lg font-inter group-hover:font-bold transition-all duration-200 z-[10]"
              >
                TRYOUT
              </Link>
              <div className="lg:w-[75px] lg:h-[3px] transition duration-200 absolute pt-8 border-b-2 border-[#b5a16d] group-hover:opacity-100 opacity-0"></div>
            </div>
            <div className="mx-1 flex justify-center relative group w-[120px]">
              <Link
                href="/main-event"
                className="text-[#FBDF97] text-lg font-inter group-hover:font-bold transition-all duration-200 z-[10]"
              >
                MAIN EVENT
              </Link>
              <div className="lg:w-[110px] lg:h-[3px] transition duration-200 absolute pt-8 border-b-2 border-[#b5a16d] group-hover:opacity-100 opacity-0"></div>
            </div>
            <div className="ml-5 mr-1 flex bg-[#FBDF97] px-[10px] py-[3px] rounded-xl hover:bg-[#0A0823] transition-all duration-300 text-[#0A0823] hover:text-[#FBDF97] hover:font-semibold w-[95px]">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/PendaftaranBlastOut2023"
                className="text-lg font-inter"
              >
                DAFTAR
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="bg-[#0A0823] px-4 flex justify-between w-[100vw] fixed top-0 z-[99]">
          <div className="flex flex-col justify-center ml-5 z-[105]">
            <a href="./">
              <img
                src="BLASTOUT 2023.png"
                alt="blastout"
                className="h-[14px]"
              ></img>
            </a>
          </div>
          <button
            id="burger"
            name="burger"
            className={
              isActive
                ? "burger-aktif py-3 right-4 top-full max-w-full mr-8"
                : "py-3 right-4 top-full max-w-full mr-8"
            }
            onClick={clickHandler}
          >
            <span className="w-[30px] h-[2px] bg-[#FBDF97] my-2 block origin-top-left transition duration-300 ease-in-out"></span>
            <span className="w-[30px] h-[2px] bg-[#FBDF97] my-2 block transition duration-300 ease-in-out"></span>
            <span className="w-[30px] h-[2px] bg-[#FBDF97] my-2 block origin-bottom-left transition duration-300 ease-in-out"></span>
          </button>
          <nav
            id="nav-menu"
            className={
              isActive
                ? "absolute py-5 bg-[#201D41] w-full max-w-full pb-[20px] top-[0px] left-0 translate-y-[60px] transition duration-300 ease-in-out z-[100]"
                : "invisible absolute py-5 bg-[#201D41] w-full max-w-full pb-[20px] top-[0px] left-0 z-[100]"
            }
          >
            <div className="flex justify-center mb-3">
              <Link
                href="/"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                BERANDA
              </Link>
            </div>
            <div className="flex justify-center my-4">
              <Link
                href="/tentang"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                TENTANG
              </Link>
            </div>
            <div className="flex justify-center my-4">
              <Link
                href="/tryout"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                TRY OUT
              </Link>
            </div>
            <div className="flex justify-center my-4">
              <Link
                href="/main-event"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                MAIN EVENT
              </Link>
            </div>
            <div className="flex justify-center my-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/PendaftaranBlastOut2023"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                DAFTAR
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
