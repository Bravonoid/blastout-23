import React from "react";
const Footer = () => {
  return (
    <>
      <div className="py-5">
        <div className="mx-auto font-bold font-inter text-xl justify-center flex">
          BLASTOUT 2023
        </div>
        <div className="py-4 right-4 top-full static max-w-full flex justify-center">
          <div className="mx-3 flex">
            <a href="#" className="text-black text-sm font-inter font-bold">
              BERANDA
            </a>
          </div>
          <div className="mx-3 flex">
            <a href="#" className="text-black text-sm font-inter">
              TENTANG
            </a>
          </div>
          <div className="mx-3 flex">
            <a href="#" className="text-black text-sm font-inter">
              TRYOUT
            </a>
          </div>
          <div className="mx-3 flex">
            <a href="#" className="text-black text-sm font-inter">
              MAIN EVENT
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="./Group 11.svg" className="flex mx-2 w-[30px]"></img>
          <img src="./Group 12.svg" className="flex mx-2 w-[30px]"></img>
        </div>
        <div className="flex justify-center mt-4">
          <div className="font-inter font-semibold text-sm">
            IT BLASTOUT 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
