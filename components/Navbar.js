import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#0A0823] px-4 flex justify-between w-[100vw] fixed top-0">
        <div className="flex flex-col justify-center ml-8">
          <img src="BLASTOUT 2023.png" alt="" className="h-[18px]"></img>
        </div>
        <div className="py-3 right-4 top-full static max-w-full flex mr-8">
          <div className="mx-5 flex">
            <a href="#" className="text-[#FBDF97] text-lg font-inter font-bold">
              BERANDA
            </a>
          </div>
          <div className="mx-5 flex">
            <a href="#" className="text-[#FBDF97] text-lg font-inter">
              TENTANG
            </a>
          </div>
          <div className="mx-5 flex">
            <a href="#" className="text-[#FBDF97] text-lg font-inter">
              TRYOUT
            </a>
          </div>
          <div className="mx-5 flex">
            <a href="#" className="text-[#FBDF97] text-lg font-inter">
              MAIN EVENT
            </a>
          </div>
          <div className="mx-5 flex bg-[#FBDF97] px-2 rounded-lg">
            <a href="#" className="text-[#0A0823] text-lg font-inter">
              DAFTAR
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
