import React from "react";
import Image from "next/image";
import cloud from "../../assets/Tryout/cloud.png";
import rounded from "../../assets/Tryout/round_border.png";
import round from "../../assets/Tryout/round_text.png";
import cloud1 from "../../assets/Tryout/cloud2.png";
import grid from "../../assets/Tryout/grid.png"

const Penjelasan = () => {
  return (
    <>
      <div class="h-screen relative overflow-hidden bg-[#0F0B36]">
        <Image src={cloud} alt="cloud" class="absolute w-[35%] -top-16 left-0" />
        <div class="flex flex-row">
          <div class="flex flex-col text-justify font-Inter pt-40 pb-20 pl-20">
            <div class="flex flex-row gap-x-6">
              <h1 class="font-bold text-6xl text-[#F0F0F0]">
                TRYOUT <span class="bg-[#FFBD0C] text-black p-2">DAY 1</span>
              </h1>
              <div class="border-[#D9D9D9] border-t-2 px-[60px] block my-auto" />
            </div>
            <p class="py-8 w-1/2 text-[#D9D9D9] font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec
              neque eros, porta a varius vel, luctus eget ex. Cras non
              pellentesque diam. Ut at arcu urna. Mauris tempor ex vitae libero
              placerat commodo. Suspendisse consectetur non nunc egestas aliquam.
            </p>
          </div>
          <Image src={rounded} alt="cloud" class="absolute w-1/6 right-40 top-[25%] animate-spin" />
          <Image src={round} alt="cloud" class="absolute w-1/6 right-40 top-[25%]" />
        </div>
        <Image src={cloud1} alt="cloud1" class="absolute w-[35%] right-0 bottom-0"/>
        <Image src={grid} alt="cloud1" class="absolute w-[20%] left-0 -bottom-8"/>
      </div>
    </>
  );
};
export default Penjelasan;
