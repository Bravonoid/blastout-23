import React from "react";
import block1 from "../../assets/Beranda/Group 14.png";
import block2 from "../../assets/Beranda/Group 15.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="h-screen  overflow-hidden bg-blastoutpurple">
        <div className="block my-auto relative">
          <Link href="/">
            <Image
              src={block1}
              alt="block"
              className="relative top-0 pl-5 pt-5"
            />
            <div className="flex justify-center items-center flex-col my-[225px]">
              <h1 className="font-bold text-6xl font-Inter text-center items-center">
                BLASTOUT 2023
              </h1>
              <h1 className="font-Inter text-xl items-center text-center">
                Adaptasi, Susun Strategi , Raih Mimpi
              </h1>
            </div>
            <Image src={block2} alt="block" className="absolute right-0 pr-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
