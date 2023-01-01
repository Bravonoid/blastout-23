import React from "react";
import Image from "next/image";
import cloud from "../../assets/Tryout/cloud.png";
import rounded from "../../assets/Tryout/round_border.png";
import round from "../../assets/Tryout/round_text.png";
import cloud1 from "../../assets/Tryout/cloud2.png";
import wave from "../../assets/Tryout/wave.png";
import grid from "../../assets/Tryout/grid.png";

const Penjelasan = () => {
  return (
    <>
      <div class="h-screen mobile:h-[1200px] sm:h-[1100px] md:h-[1200px] relative overflow-hidden bg-[#0F0B36] z-50 pb-40">
        <Image
          src={cloud}
          alt="cloud"
          class="absolute xl:w-[500px] xl:top-[10px] left-0 mobile:top-[30px] mobile:w-[250px] sm:top-[30px] sm:w-[300px]"
        />
        <div class="flex lg:flex-row mobile:flex-col-reverse sm:flex-col-reverse mobile:pt-20">
          <div class="flex flex-col text-justify font-inter pt-60 pb-20 pl-20 mobile:px-[60px] sm:px-[60px]">
            <div class="flex flex-row gap-x-6">
              <h1 class="font-bold text-blastoutwhite text-glow text-2xl lg:text-4xl xl:text-5xl uppercase font-inter flex items-center justify-center">
                TRYOUT <span class="bg-[#FFBD0C] text-black p-2">DAY 1</span>
              </h1>
              <div class="border-[#D9D9D9] border-t-2 px-[60px] block my-auto mobile:hidden sm:hidden lg:block" />
            </div>
            <p class="lg:py-8 lg:w-1/2 text-[#D9D9D9] font-inter mobile:text-sm mobile:w-full sm:text-sm sm:w-full py-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec
              neque eros, porta a varius vel, luctus eget ex. Cras non
              pellentesque diam. Ut at arcu urna. Mauris tempor ex vitae libero
              placerat commodo. Suspendisse consectetur non nunc egestas
              aliquam.
            </p>
          </div>
          <div class="flex justify-center py-28 lg:pr-[300px]">
            <Image
              src={rounded}
              alt="cloud"
              class="absolute w-1/4 animate-spin-medium mobile:w-[300px] mobile:top-[140px] sm:w-[300px] sm:top-[160px]"
            />
            <Image
              src={round}
              alt="cloud"
              class="absolute w-1/6 mobile:w-[200px] sm:w-[200px] sm:top-[210px]"
            />
          </div>
        </div>
        <Image
          src={cloud1}
          alt="cloud1"
          class="absolute sm:w-[50%] right-0 bottom-0 mobile:w-[200px] mobile:top-[900px] sm:top-[800px] lg:top-[600px]"
        />
        <Image
          src={wave}
          alt="cloud1"
          class="absolute sm:w-[30%] xl:w-[300px] left-0 -bottom-8 mobile:w-[100px] z-50 mobile:top-[900px] sm:top-[800px] lg:top-[600px] xl:top-[600px]"
        />
        {/* <Image
          src={grid}
          alt="grid"
          class="absolute sm:w-[35%] lg:w-[200px] right-0 bottom-0 mobile:w-[100px] mobile:top-[950px] sm:top-[850px] lg:top-[700px]"
        /> */}
      </div>
    </>
  );
};
export default Penjelasan;
