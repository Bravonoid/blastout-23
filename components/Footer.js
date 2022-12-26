import React from "react";
const Footer = () => {
  return (
    <>
      <div class="py-5">
        <div class="mx-auto font-bold font-inter text-xl justify-center flex">
          BLASTOUT 2023
        </div>
        <div class="py-4 right-4 top-full static max-w-full flex justify-center">
          <div class="mx-3 flex">
            <a href="#" class="text-black text-sm font-inter font-bold">
              BERANDA
            </a>
          </div>
          <div class="mx-3 flex">
            <a href="#" class="text-black text-sm font-inter">
              TENTANG
            </a>
          </div>
          <div class="mx-3 flex">
            <a href="#" class="text-black text-sm font-inter">
              TRYOUT
            </a>
          </div>
          <div class="mx-3 flex">
            <a href="#" class="text-black text-sm font-inter">
              MAIN EVENT
            </a>
          </div>
        </div>
        <div class="flex justify-center">
          <img src="./Group 11.svg" class="flex mx-2 w-[30px]"></img>
          <img src="./Group 12.svg" class="flex mx-2 w-[30px]"></img>
        </div>
        <div class="flex justify-center mt-4">
          <div class="font-inter font-semibold text-sm">
            IT BLASTOUT 2023
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
