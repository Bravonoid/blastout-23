import React from "react";
import Image from "next/image";
import cloud from "../../assets/Tryout/cloud.png";
import rounded from "../../assets/Tryout/round_border.png";
import round from "../../assets/Tryout/round_text.png";
import cloud1 from "../../assets/Tryout/cloud2.png";
import wave from "../../assets/Tryout/wave.png"

const Penjelasan = () => {
  return (
    <>
      <div class="h-screen relative overflow-hidden bg-[#0F0B36]">
        <Image src={cloud} alt="cloud" class="absolute w-[35%] -top-16 left-0 mobile:-top-8 mobile:w-[250px] sm:-top-8 sm:w-[250px]" />
        <div class="flex lg:flex-row mobile:flex-col-reverse sm:flex-col-reverse">
          <div class="flex flex-col text-justify font-Inter pt-40 pb-20 pl-20 mobile:px-[60px] sm:px-[60px]">
            <div class="flex flex-row gap-x-6">
              <h1 class="font-bold text-6xl text-[#F0F0F0] mobile:text-3xl mobile:block mobile:mx-auto sm:text-6xl sm:block sm:mx-auto lg:mx-0">
                TRYOUT <span class="bg-[#FFBD0C] text-black p-2">DAY 1</span>
              </h1>
              <div class="border-[#D9D9D9] border-t-2 px-[60px] block my-auto mobile:hidden sm:hidden lg:block" />
            </div>
            <p class="lg:py-8 lg:w-1/2 text-[#D9D9D9] font-inter mobile:text-sm mobile:w-full sm:text-sm sm:w-full py-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec
              neque eros, porta a varius vel, luctus eget ex. Cras non
              pellentesque diam. Ut at arcu urna. Mauris tempor ex vitae libero
              placerat commodo. Suspendisse consectetur non nunc egestas aliquam.
            </p>
          </div>
          <div class="flex justify-center py-28 lg:pr-[300px]">
          <Image src={rounded} alt="cloud" class="absolute w-1/4 animate-spin-medium mobile:w-[300px] mobile:top-[60px] sm:w-[300px] sm:top-[60px]" />
          <Image src={round} alt="cloud" class="absolute w-1/6 mobile:w-[200px] sm:w-[200px]" />
          </div>
        </div>
        <Image src={cloud1} alt="cloud1" class="absolute w-[35%] right-0 bottom-0"/>
        <Image src={wave} alt="cloud1" class="absolute w-[20%] left-0 -bottom-8"/>
      </div>
    </>
  );
};
export default Penjelasan;
