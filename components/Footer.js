import React from "react";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center my-20 w-[100vw]">
        <div className="w-[100vw]">
            <img src="Footer.svg" alt="" className="w-[100vw]"></img>
        </div>
        <div className="mt-[40px] absolute flex z-[10]">
            <img src="BLASTOUT 2023.png" alt="" className="h-[20px]"></img>
        </div>
        <div className= "mt-[80px] absolute flex z-[10]">
            <div className="mx-4 flex">
                <a href="#" className="text-[#FBDF97] text-lg font-inter font-bold">BERANDA</a>
            </div>
            <div className="mx-4 flex">
                <a href="#" className="text-[#FBDF97] text-lg font-inter">TENTANG</a>
            </div>
            <div className="mx-4 flex">
                <a href="#" className="text-[#FBDF97] text-lg font-inter">TRYOUT</a>
            </div>
            <div className="mx-4 flex">
                <a href="#" className="text-[#FBDF97] text-lg font-inter">MAIN EVENT</a>
            </div>
        </div>
        <div className="absolute flex z-[10] justify-center mt-[130px]">
            <img src="Group 11.svg" className="flex mx-2 w-[40px]"></img>
            <img src="Group 12.svg" className="flex mx-2 w-[40px]"></img>
        </div>
        <div className="absolute flex z-[10] justify-center mt-[185px]">
            <div className="font-inter text-[#FBDF97] font-semibold text-lg">
                IT BLASTOUT 2023
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer;
