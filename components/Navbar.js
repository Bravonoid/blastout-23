import React from "react";
const Navbar = () => {
  return (
    <>
      <div class="bg-[#0A0823] px-4 flex justify-between w-[100vw] fixed top-0">
                    <div class="flex flex-col justify-center ml-8">
                        <img src="BLASTOUT 2023.png" alt="" class="h-[16px]"></img>
                    </div>
                    <div class="py-3 right-4 top-full static max-w-full flex mr-8">
                            <div class="mx-5 flex">
                                <a href="#" class="text-[#FBDF97] text-md font-inter font-bold">BERANDA</a>
                            </div>
                            <div class="mx-5 flex">
                                <a href="#" class="text-[#FBDF97] text-md font-inter">TENTANG</a>
                            </div>
                            <div class="mx-5 flex">
                                <a href="#" class="text-[#FBDF97] text-md font-inter">TRYOUT</a>
                            </div>
                            <div class="mx-5 flex">
                                <a href="#" class="text-[#FBDF97] text-md font-inter">MAIN EVENT</a>
                            </div>
                            <div class="mx-5 flex bg-[#FBDF97] px-2 rounded-lg">
                                <a href="#" class="text-[#0A0823] text-md font-inter">DAFTAR</a>
                            </div>
                    </div>
                </div>
    </>
  );
};

export default Navbar;
