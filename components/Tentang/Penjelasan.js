import React from "react";
import Link from "next/link";

const Penjelasan = () => {
  return (
    <>
      <div class="h-fit  overflow-hidden py-40 bg-[#0F0B36]">
        <div class="flex flex-row gap-x-12 px-40">
          <div class="h-[200px] w-[600px] bg-slate-500" />
          <div class="flex flex-col gap-y-12">
            <h1 class="text-6xl font-bold font-TransAmerica">BLASTOUT</h1>
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
