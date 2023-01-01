import React from "react";
import Image from "next/image";
import cloud from "../../assets/Tentang/cloud1.png";
import background from "../../assets/Tentang/background_tema.png";
import tema from "../../assets/Tentang/tema.png";
import tema_mobile from "../../assets/Tentang/tema_mobile.png";
import cloud2 from "../../assets/Tentang/cloud2.png";

const Tema = () => {
  return (
    <>
      <div
        class="h-auto py-20 text-[#000000] bg-[#0F0B36] relative bg-cover xl:bg-contain"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Image
          src={cloud}
          alt="cloud"
          class="absolute w-[35%] sm:-top-10 lg:-top-16 xl:-top-24 left-0 mobile:-top-6 mobile:w-[150px]"
        />
        <Image
          src={tema}
          alt="tema"
          class="px-[115px] mobile:hidden relative z-50"
        />
        <Image
          src={tema_mobile}
          alt="tema"
          class="mobile:block sm:hidden relative px-5 z-50"
        />
        <Image
          src={cloud2}
          alt="cloud"
          class="absolute right-0 w-1/3 mobile:bottom-6 sm:bottom-0 xl:-bottom-16 2xl:-bottom-20 z-40"
        />
      </div>
    </>
  );
};
export default Tema;
