import React from "react";
import Image from "next/image";
import cloud from "../../assets/Tentang/cloud1.png";
import background from "../../assets/Tentang/background_tema.png";
import tema from "../../assets/Tentang/tema.png";
import cloud2 from "../../assets/Tentang/cloud2.png";

const Tema = () => {
  return (
    <>
      <div class="h-auto overflow-hidden py-20 text-[#000000] bg-[#0F0B36] bg-cover" style={{backgroundImage: `url(${background.src})`}}>
      <Image src={cloud} alt="cloud" class="absolute w-[35%] top-[450px] left-0" />
      <Image src={tema} alt="tema " class="px-5" />
      <Image src={cloud2} alt="cloud" class="absolute right-0 w-1/3" />
      </div>
    </>
  );
};
export default Tema;
