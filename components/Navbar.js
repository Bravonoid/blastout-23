import React from "react";
const Navbar = () => {
  return (
    <>
      <div class="bg-[#240724] px-4 flex justify-between w-[100vw] fixed top-0">
        <h3 class="text-[#FFBD0C] font-inter font-extrabold flex flex-col justify-center">
          BLASTOUT 2023
        </h3>
        <div class="py-2 right-4 top-full static max-w-full flex">
          <div class="mx-4 flex">
            <a href="#" class="text-[#FFBD0C] text-sm font-inter font-bold">
              BERANDA
            </a>
          </div>
          <div class="mx-4 flex">
            <a href="#" class="text-[#FFBD0C] text-sm font-inter">
              TENTANG
            </a>
          </div>
          <div class="mx-4 flex">
            <a href="#" class="text-[#FFBD0C] text-sm font-inter">
              TRYOUT
            </a>
          </div>
          <div class="mx-4 flex">
            <a href="#" class="text-[#FFBD0C] text-sm font-inter">
              MAIN EVENT
            </a>
          </div>
          <div class="mx-4 flex bg-[#FFBD0C] px-2 rounded-lg">
            <a href="#" class="text-[#240724] text-sm font-inter">
              DAFTAR
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
