/* eslint-disable */
/* eslint-disable */
import React from "react";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0A0823] lg:justify-center lg:items-center w-[100vw] lg:h-[280px] h-[400px] flex relative">
        <div className="w-[100vw] bottom-0 absolute invisible lg:visible">
          <img src="./Group 5908.svg" alt="" className=""></img>
        </div>
        <div className="bottom-0 right-3 absolute visible lg:invisible">
          <img src="./Group 6019.svg" alt="" className=""></img>
        </div>
        <div className="lg:top-[40px] absolute lg:flex z-[10] lg:justify-center">
          <div className="flex absolute w-[100vw]">
            <img
              src="BLASTOUT 2023.png"
              alt=""
              className="h-[20px] invisible lg:visible flex mx-auto"
            ></img>
          </div>
          <img
            src="BLASTOUT 2023 footer mobile.svg"
            alt=""
            className="visible lg:invisible mt-12 ml-10 h-[50px]"
          ></img>
        </div>
        <div className="lg:top-[80px] lg:mt-0 absolute lg:flex z-[10] mt-[120px] ml-[25px]">
          <div className="mx-[18px] my-2 lg:flex">
            <a
              href="./"
              className="text-[#FBDF97] text-md lg:text-lg font-inter hover:font-bold"
            >
              BERANDA
            </a>
          </div>
          <div className="mx-[18px] my-2 lg:flex">
            <a
              href="/tentang"
              className="text-[#FBDF97] text-md lg:text-lg font-inter hover:font-bold"
            >
              TENTANG
            </a>
          </div>
          <div className="mx-[18px] my-2 lg:flex">
            <a
              href="./tryout"
              className="text-[#FBDF97] text-md lg:text-lg font-inter hover:font-bold"
            >
              TRYOUT
            </a>
          </div>
          <div className="mx-[18px] my-2 lg:flex">
            <a
              href="./main-event"
              className="text-[#FBDF97] text-md lg:text-lg font-inter hover:font-bold"
            >
              MAIN EVENT
            </a>
          </div>
        </div>
        <div className="absolute flex z-[10] justify-center lg:mt-0 mt-[260px] ml-8 lg:ml-0 lg:top-[140px]">
          <div className="flex mx-2 lg:mx-[10px] lg:w-[45px] w-[30px] group">
            <a
              href="https://instagram.com/blastout2023?igshid=YmMyMTA2M2Y="
              className=""
            >
              <img
                src="./Group 11.svg"
                className="group-hover:hidden block"
              ></img>
              <img
                src="./Group 11h.svg"
                className="group-hover:block hidden"
              ></img>
            </a>
          </div>
          <div className="flex mx-2 lg:mx-[10px] lg:w-[45px] w-[30px] group">
            <a href="https://wa.me/6282243337608" className="">
              <img
                src="./Group 12.svg"
                className="group-hover:hidden block"
              ></img>
              <img
                src="./Group 12h.svg"
                className="group-hover:block hidden"
              ></img>
            </a>
          </div>
        </div>
        <div className="absolute lg:flex z-[10] justify-center mt-[310px] ml-10 lg:mt-0 lg:ml-0 lg:top-[210px]">
          <div className="font-inter text-[#FBDF97] font-semibold text-sm lg:text-lg">
            IT BLASTOUT 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
