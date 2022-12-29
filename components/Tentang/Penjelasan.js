import React from "react";
import Link from "next/link";
import Image from "next/image"
import text from "../../assets/Tentang/text_tentang.png";
import blastout from  "../../assets/Tentang/text_blastout.png";
import blastout_side from "../../assets/Tentang/side_blastout.png";

const Penjelasan = () => {
  return (
    <>
      <div class="h-fit  overflow-hidden pb-40 mobile:pb-20 bg-[#0F0B36]">
      <Image src={blastout_side} alt="text" class="sm:h-[800px] sm:w-[200px] lg:h-[700px] mobile:h-[600px] absolute right-0 -top-8 mobile:w-[175px] -z-0" />
      <Image src={text} alt="text" class="mobile:hidden sm:py-12 sm:px-[62px] sm:w-[600px]" />
      <h1 class="mobile:block drop-shadow-2xl shadow-yellow-500 text-white text-4xl font-bold pl-12 pt-12 pb-12 z-50 sm:hidden">TENTANG</h1>
        <div class="flex lg:flex-row sm:gap-x-12 xl:mx-32 xl:px-8 mobile:mx-[62px] sm:mx-[62px] sm:px-5 bg-[#030022] py-5 w-fit rounded-[50px] mobile:flex-col z-50 sm:flex-col gap-y-5">
          <Image src={blastout} alt="blastout" class="w-3/4 mobile:block mx-auto py-5 z-50 sm:block lg:hidden"/>
          <div class="lg:h-[200px] lg:w-[600px] bg-white rounded-xl mobile:w-[88.43px] mobile:h-[88.43px] sm:w-[88.43px] sm:h-[88.43px] block mx-auto z-50" />
          <div class="flex flex-col gap-y-12">
            {/* <h1 class="text-6xl font-bold font-TransAmerica">BLASTOUT</h1> */}
            <Image src={blastout} alt="blastout" class="w-1/2 mobile:hidden sm:w-[300px] sm:hidden lg:block"/>
            <p class="text-justify font-inter text-[#FFFFFF] mobile:px-5 z-50 mobile:pt-5 mobile:text-sm sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec
              neque eros, porta a varius vel, luctus eget ex. Cras non
              pellentesque diam. Ut at arcu urna. Mauris tempor ex vitae libero
              placerat commodo. Suspendisse consectetur non nunc egestas
              aliquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Penjelasan;
