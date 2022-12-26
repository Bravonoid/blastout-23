import React from "react";
import Image from "next/image";
import Link from "next/link";
import Line from "../../assets/Beranda/Group 16.png";
import { useRouter } from "next/router";
const Sekilas = () => {
  const router = useRouter();
  return (
    <>
      <div class="h-screen  overflow-hidden bg-blastoutpurple text-[#FFFFFF] py-20">
        <div class="relative flex flex-col gap-y-12">
          <h1 class="font-bold text-6xl font-TransAmerica text-center">
            BLASTOUT 
            <Link href="./Tentang"><span class="hover:shadow-[0px_0px_9px_9px_#FFBD0C] duration-300 text-[#FFBD0C] p-0">&#x3e;</span></Link>
          </h1>
          <Image src={Line} alt="line" class="block mx-auto pt-5" />
          <p class="text-center px-20 font-Poppins text-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex. Cras non pellentesque diam. Ut at arcu urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex. Cras non pellentesque diam. Ut at arcu urna.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sekilas;
