import React, { useState } from "react";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const clickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="invisible lg:visible">
        <div className="bg-[#0A0823] px-4 flex justify-between w-[100vw] fixed top-0">
          <div className="flex flex-col justify-center ml-8">
            <img src="BLASTOUT 2023.png" alt="" className="h-[16px]"></img>
          </div>
          <div className="py-3 right-4 top-full static max-w-full flex mr-8">
            <div className="mx-5 flex">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold"
              >
                BERANDA
              </a>
            </div>
            <div className="mx-5 flex">
              <a href="#" className="text-[#FBDF97] text-md font-inter">
                TENTANG
              </a>
            </div>
            <div className="mx-5 flex">
              <a href="#" className="text-[#FBDF97] text-md font-inter">
                TRYOUT
              </a>
            </div>
            <div className="mx-5 flex">
              <a href="#" className="text-[#FBDF97] text-md font-inter">
                MAIN EVENT
              </a>
            </div>
            <div className="mx-5 flex bg-[#FBDF97] px-2 rounded-lg">
              <a href="#" className="text-[#0A0823] text-md font-inter">
                DAFTAR
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="visible lg:invisible">
        <div className="bg-[#0A0823] px-4 flex justify-between w-[100vw] fixed top-0">
          <div className="flex flex-col justify-center ml-5">
            <img src="BLASTOUT 2023.png" alt="" className="h-[14px]"></img>
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
                ? "absolute py-5 bg-[#201D41] w-full max-w-full h-[60vw] top-full left-0"
                : "hidden absolute py-5 bg-[#201D41] w-full max-w-full h-[60vw] top-full left-0"
            }
          >
            <div className="flex justify-center mb-3">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold"
              >
                BERANDA
              </a>
            </div>
            <div className="flex justify-center my-4">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold"
              >
                TENTANG
              </a>
            </div>
            <div className="flex justify-center my-4">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold"
              >
                TRY OUT
              </a>
            </div>
            <div className="flex justify-center my-4">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold"
              >
                MAIN EVENT
              </a>
            </div>
            <div className="flex justify-center my-4">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold"
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
