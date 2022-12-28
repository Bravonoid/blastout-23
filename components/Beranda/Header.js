import React from "react";
import block1 from "../../assets/Beranda/Group 14.png";
import block2 from "../../assets/Beranda/Group 15.png";
import background from "../../assets/Beranda/background_beranda.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="h-screen overflow-hidden bg-blastoutpurple">
        <div class="block mx-auto my-40 w-3/4 relative">
          <Image src={background} alt="background" />
        </div>
      </div>
    </>
  );
};

export default Header;
