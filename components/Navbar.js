/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(0);
  const [st, setSt] = useState({ transform: "translateX(-100%)" });

  // const konten = ["BERANDA", "TENTANG", "TRYOUT", "MAIN EVENT"];
  const konten = [
    { title: "BERANDA", link: "/" },
    { title: "TENTANG", link: "/tentang" },
    { title: "TRYOUT", link: "/tryout" },
    { title: "MAIN EVENT", link: "/main-event" },
  ];

  const hovering = (e) => {
    let x = parseInt(e.target.offsetParent.id);
    if (x === 0) setSt({ transform: "translateX(12.5%)" });
    else if (x === 1) setSt({ transform: "translateX(140%)" });
    else if (x === 2) setSt({ transform: "translateX(270%)" });
    else if (x === 3) setSt({ transform: "translateX(400%)" });
    // console.log(x);
  };

  const mouseOut = () => {
    setSt({ transform: "translateX(-100%)" });
  };

  const clickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="hidden lg:block">
        <div className="bg-[#0A0823] px-4 flex justify-between w-[100vw] fixed top-0 z-[100]">
          <div className="flex flex-col justify-center ml-12">
            <Link href="/">
              <img src="BLASTOUT 2023.png" alt="" className="h-[20px]"></img>
            </Link>
          </div>
          <div className="py-4 right-4 top-full max-w-full flex mr-[70px] items-center justify-evenly relative">
            {konten &&
              konten.map((item, i) => {
                return (
                  <div
                    id={i + ""}
                    key={i}
                    className="mx-1 flex justify-center relative group w-[120px]"
                    onMouseOver={hovering}
                    onMouseOut={mouseOut}
                  >
                    <Link
                      href={item.link}
                      className="text-[#FBDF97] text-lg font-inter group-hover:font-bold transition-all duration-200 z-[10]"
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            <div className="ml-5 mr-1 flex bg-[#FBDF97] px-[10px] py-[3px] rounded-xl hover:bg-[#0A0823] transition-all duration-300 text-[#0A0823] hover:text-[#FBDF97] hover:font-semibold w-[87px]">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/PendaftaranBlastOut2023"
                className="text-lg font-inter"
              >
                DAFTAR
              </a>
            </div>
            <div className="h-[4px] absolute bottom-2 inset-x-0 overflow-hidden">
              <div
                className="bg-[#b5a16d] h-[2px] w-[100px] duration-300"
                style={st}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="bg-[#0A0823] px-4 flex justify-between w-[100vw] fixed top-0 z-[99]">
          <div className="flex flex-col justify-center ml-5 z-[105]">
            <a href="./">
              <img
                src="BLASTOUT 2023.png"
                alt="blastout"
                className="h-[14px]"
              ></img>
            </a>
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
                ? "absolute py-5 bg-[#201D41] w-full max-w-full pb-[20px] top-[0px] left-0 translate-y-[60px] transition duration-300 ease-in-out z-[100]"
                : "invisible absolute py-5 bg-[#201D41] w-full max-w-full pb-[20px] top-[0px] left-0 z-[100]"
            }
          >
            <div className="flex justify-center mb-3">
              <Link
                href="/"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                BERANDA
              </Link>
            </div>
            <div className="flex justify-center my-4">
              <Link
                href="/tentang"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                TENTANG
              </Link>
            </div>
            <div className="flex justify-center my-4">
              <Link
                href="/tryout"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                TRY OUT
              </Link>
            </div>
            <div className="flex justify-center my-4">
              <Link
                href="/main-event"
                className="text-[#FBDF97] text-md font-inter font-bold active:text-[#b5a16d]"
              >
                MAIN EVENT
              </Link>
            </div>
            <div className="flex justify-center my-4">
              <a
                target="_blank"
                rel="noreferrer"
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
