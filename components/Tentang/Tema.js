import React from "react";
import background from "../../assets/Tentang/asset_tema.png";

const Tema = () => {
  return (
    <>
      <div class="h-auto  overflow-hidden  py-20 bg-[#0F0B36] text-[#000000] bg-cover" style={{ backgroundImage: `url(${background.src})` }}>
        <div class="flex justfy-center items-center flex-col gap-y-12">
          <h1 class="font-bold text-5xl font-Inter">TEMA BESAR</h1>
          <h1 class="font-semibold text-6xl font-Inter">
            Explore Your Potential in Hybrid System
          </h1>
        </div>
      </div>
    </>
  );
};
export default Tema;
