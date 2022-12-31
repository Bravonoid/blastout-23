import React from "react";
import block1 from "../../assets/Beranda/Group 14.png";
import block2 from "../../assets/Beranda/Group 15.png";
import background from "../../assets/Beranda/asset_judul.png";
import background1 from "../../assets/Beranda/background.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div
        class="h-screen overflow-hidden bg-blastoutdarkpurple bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${background1.src})` }}
      >
        <div class="w-3/4">
          <Image src={background} alt="background" />
        </div>
      </div>
    </>
  );
};

export default Header;
