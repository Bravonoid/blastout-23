import React, { useState } from "react";
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
            <img src="BLASTOUT 2023.png" alt="" className="h-[20px]"></img>
          </div>
          <div className="py-4 right-4 top-full max-w-full flex mr-8 items-center">
            <div className="mx-5 flex">
              <a
                href="#"
                className="text-[#FBDF97] text-lg font-inter font-semibold hover:text-[#b5a16d]"
              >
                BERANDA
              </a>
            </div>
            <div className="mx-5 flex">
              <a
                href="#"
                className="text-[#FBDF97] text-lg font-inter font-semibold hover:text-[#b5a16d]"
              >
                TENTANG
              </a>
            </div>
            <div className="mx-5 flex">
              <a
                href="#"
                className="text-[#FBDF97] text-lg font-inter font-semibold hover:text-[#b5a16d]"
              >
                TRYOUT
              </a>
            </div>
            <div className="mx-5 flex">
              <a
                href="#"
                className="text-[#FBDF97] text-lg font-inter font-semibold hover:text-[#b5a16d]"
              >
                MAIN EVENT
              </a>
            </div>
            <div className="mx-5 flex bg-[#FBDF97] px-[10px] py-[3px] rounded-xl hover:bg-[#b5a16d]">
              <a
                href="https://bit.ly/PendaftaranBlastOut2023"
                className="text-[#0A0823] text-lg font-inter font-semibold"
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
                ? "absolute py-5 bg-[#201D41] w-full max-w-full h-[70vw] top-[0px] left-0 translate-y-[60px] transition duration-300 ease-in-out z-[100]"
                : "invisible absolute py-5 bg-[#201D41] w-full max-w-full h-[70vw] top-[0px] left-0 z-[100]"
            }
          >
            <div className="flex justify-center mb-3">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                BERANDA
              </a>
            </div>
            <div className="flex justify-center my-4">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                TENTANG
              </a>
            </div>
            <div className="flex justify-center my-4">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                TRY OUT
              </a>
            </div>
            <div className="flex justify-center my-4">
              <a
                href="#"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                MAIN EVENT
              </a>
            </div>
            <div className="flex justify-center my-4">
              <a
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
