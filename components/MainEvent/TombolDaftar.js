/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
const TombolDaftar = () => {
  return (
    <>
      <div className="flex justify-center items-center relative bg-[#0F0B36] w-[100vw] lg:h-[500px] h-[200px] overflow-hidden py-20">
        <div className="absolute z-20 lg:top-[120px] top-[50px]">
          <a
            href="https://bit.ly/PendaftaranBlastOut2023"
            className="lg:px-6 lg:py-4 px-3 py-2 text-2xl bg-gradient-to-r from-pink-700 to-purple-700 font-bold text-[#240724] lg:text-5xl lg:hover:text-white lg:hover:shadow-pink-300 lg:hover:shadow-lg active:text-white active:shadow-pink-300 active:shadow-lg transition-all duration-200 rounded-2xl"
          >
            DAFTAR
          </a>
        </div>
        <div className="absolute lg:-bottom-[320px] z-10 -bottom-[50px] scale-150 lg:scale-100">
          <img src="./Group 5890.svg" className="w-[100vw]"></img>
        </div>
      </div>
    </>
  );
};

export default TombolDaftar;
