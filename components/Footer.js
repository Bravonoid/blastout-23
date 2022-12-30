import React from "react";
const Footer = () => {
  return (
    <>
      <div className="flex lg:justify-center my-[500px] w-[100vw]">
        <div className="bg-[#0A0823] visible lg:invisible w-[100vw] h-[400px]">
          <img
            src="Footer.svg"
            alt=""
            className="w-[100vw] invisible lg:visible"
          ></img>
        </div>
        <div className="lg:mt-[40px] absolute lg:flex z-[10] lg:justify-center">
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
            className="visible lg:invisible mt-16 ml-10"
          ></img>
        </div>
        <div className="lg:mt-[80px] absolute lg:flex z-[10] mt-[120px] ml-[25px]">
          <div className="mx-4 my-2 lg:flex">
            <a
              href="#"
              className="text-[#FBDF97] text-sm lg:text-lg font-inter font-bold"
            >
              BERANDA
            </a>
          </div>
          <div className="mx-4 my-2 lg:flex">
            <a
              href="#"
              className="text-[#FBDF97] text-sm lg:text-lg font-inter"
            >
              TENTANG
            </a>
          </div>
          <div className="mx-4 my-2 lg:flex">
            <a
              href="#"
              className="text-[#FBDF97] text-sm lg:text-lg font-inter"
            >
              TRYOUT
            </a>
          </div>
          <div className="mx-4 my-2 lg:flex">
            <a
              href="#"
              className="text-[#FBDF97] text-sm lg:text-lg font-inter"
            >
              MAIN EVENT
            </a>
          </div>
        </div>
        <div className="absolute flex z-[10] justify-center lg:mt-[130px] mt-[260px] ml-8 lg:ml-0">
          <a href="#" className="">
            <img
              src="Group 11.svg"
              className="flex mx-2 lg:w-[40px] w-[30px]"
            ></img>
          </a>
          <a href="#" className="">
            <img
              src="Group 12.svg"
              className="flex mx-2 lg:w-[40px] w-[30px]"
            ></img>
          </a>
        </div>
        <div className="absolute lg:flex z-[10] justify-center mt-[310px] ml-10 lg:mt-[185px] lg:ml-0">
          <div className="font-inter text-[#FBDF97] font-semibold text-xs lg:text-lg">
            IT BLASTOUT 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
