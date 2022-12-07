import React from "react";
import Image from "next/image";
import Line from "../../assets/Beranda/Group 16.png";
const Sekilas = () => {
  return (
    <>
      <div className="h-screen  overflow-hidden bg-slate-100 py-20">
        <div className="relative flex flex-col gap-y-12">
          <h1 className="font-bold text-4xl font-Inter text-center">
            BLASTOUT <span className="animate-pulse text-red-500">&#x3e;</span>
          </h1>
          <Image src={Line} alt="line" className="block mx-auto pt-5" />
          <p className="text-justify px-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec
            neque eros, porta a varius vel, luctus eget ex. Cras non
            pellentesque diam. Ut at arcu urna.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sekilas;
