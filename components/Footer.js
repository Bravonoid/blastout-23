/* eslint-disable */
/* eslint-disable */
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="from-[#0A0823] bg-gradient-to-t to-blastoutdarkpurple lg:justify-center lg:items-center w-[100vw] lg:h-[280px] h-[400px] flex relative lg:py-40">
        <div className="w-screen bottom-0 absolute invisible lg:visible">
          <img src="./Group 5908.svg" alt="" className="w-screen"></img>
        </div>
        <div className="bottom-0 right-3 absolute visible lg:invisible">
          <img src="./Group 6019.svg" alt="" className=""></img>
        </div>
        <div className="lg:top-[40px] absolute lg:flex z-[10] lg:justify-center">
          <div className="flex absolute w-[100vw]">
            <img
              src="BLASTOUT 2023.png"
              alt="Blastout"
              className="h-[20px] invisible lg:visible flex mx-auto"
            ></img>
          </div>
          <img
            src="BLASTOUT 2023 footer mobile.svg"
            alt="Blastout"
            className="visible lg:invisible mt-12 ml-10 h-[50px]"
          ></img>
        </div>
        <div className="lg:top-[80px] lg:mt-0 absolute lg:flex z-[10] mt-[120px] ml-[25px] lg:justify-evenly">
          <div className="mx-[18px] lg:mx-0 my-2 lg:flex lg:w-[160px] justify-center">
            <Link
              href="/"
              className="text-[#FBDF97] text-lg lg:text-2xl font-inter hover:font-bold transition-all duration-200"
            >
              BERANDA
            </Link>
          </div>
          <div className="mx-[18px] lg:mx-0 my-2 lg:flex lg:w-[160px] justify-center">
            <Link
              href="/tentang"
              className="text-[#FBDF97] text-lg lg:text-2xl font-inter hover:font-bold transition-all duration-200"
            >
              TENTANG
            </Link>
          </div>
          <div className="mx-[18px] lg:mx-0 my-2 lg:flex lg:w-[160px] justify-center">
            <Link
              href="/tryout"
              className="text-[#FBDF97] text-lg lg:text-2xl font-inter hover:font-bold transition-all duration-200"
            >
              TRYOUT
            </Link>
          </div>
          <div className="mx-[18px] lg:mx-0 my-2 lg:flex lg:w-[160px] justify-center">
            <Link
              href="/main-event"
              className="text-[#FBDF97] text-lg lg:text-2xl font-inter hover:font-bold transition-all duration-200"
            >
              MAIN EVENT
            </Link>
          </div>
        </div>
        <div className="absolute top-5 flex z-[10] justify-center lg:mt-0 mt-[260px] ml-8 lg:ml-0 lg:top-[140px]">
          <div className="flex mx-2 lg:mx-[10px] lg:w-[45px] w-[30px] group">
            <a
              href="https://instagram.com/blastout2023?igshid=YmMyMTA2M2Y="
              target="_blank"
              className="relative lg:w-[45px]"
            >
              <img
                src="./Group 11.svg"
                className="group-hover:opacity-0 opacity-100 transition duration-200 absolute"
              ></img>
              <img
                src="./Group 11h.svg"
                className="group-hover:opacity-100 opacity-0 transition duration-200 absolute"
              ></img>
            </a>
          </div>
          <div className="flex mx-2 lg:mx-[10px] lg:w-[45px] w-[30px] group">
            <a href="https://wa.me/6282243337608" target="_blank" className="relative lg:w-[45px]">
              <img
                src="./Group 12.svg"
                className="group-hover:opacity-0 opacity-100 transition duration-200 absolute"
              ></img>
              <img
                src="./Group 12h.svg"
                className="group-hover:opacity-100 opacity-0 transition duration-200 absolute"
              ></img>
            </a>
          </div>
        </div>
        <div className="absolute top-3 lg:flex z-[10] justify-center mt-[310px] ml-10 lg:mt-0 lg:ml-0 lg:top-[210px]">
          <div className="font-inter text-[#FBDF97] font-semibold text-base lg:text-xl">
            IT BLASTOUT 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
