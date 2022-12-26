import React from "react";
import Link from "next/link";
import Image from "next/image"
import text from "../../assets/Tentang/text_tentang.png";
import blastout from  "../../assets/Tentang/text_blastout.png";
import blastout_side from "../../assets/Tentang/side_blastout.png";

const Penjelasan = () => {
  return (
    <>
      <div class="h-fit  overflow-hidden pb-40 bg-[#0F0B36]">
      <Image src={blastout_side} alt="text" class="w-1/6 absolute right-0 -top-8" />
      <Image src={text} alt="text" class="px-40" />
        <div class="flex flex-row gap-x-12 px-40">
          <div class="h-[200px] w-[600px] bg-slate-500" />
          <div class="flex flex-col gap-y-12">
            {/* <h1 class="text-6xl font-bold font-TransAmerica">BLASTOUT</h1> */}
            <Image src={blastout} alt="blastout" class="w-1/2 "/>
            <p class="text-justify font-inter text-[#FFFFFF]">
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
