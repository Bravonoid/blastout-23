import React from "react";
import block1 from "../../assets/Beranda/Group 14.png";
import block2 from "../../assets/Beranda/Group 15.png";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return(
        <>
            <div class="h-screen  overflow-hidden bg-white">
                <div class="block my-auto relative">
                    <Link href="./Penjelasan">
                        <Image src={block1} alt="block" class="relative top-0 pl-5 pt-5"/>
                        <div class="flex justify-center items-center flex-col my-[225px]">
                            <h1 class="font-bold text-6xl font-Inter text-center items-center">BLASTOUT 2023</h1>
                            <h1 class="font-Inter text-xl items-center text-center">Adaptasi, Susun Strategi , Raih Mimpi</h1>
                        </div>
                        <Image src={block2} alt="block" class="absolute right-0 pr-5"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;