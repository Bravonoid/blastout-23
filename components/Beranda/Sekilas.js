import React from "react";
import Image from "next/image";
import Link from "next/link";
import Line from "../../assets/Beranda/Vector 2.png";
import Arrow from "../../assets/Beranda/arrow.svg";
import Text from "../../assets/Beranda/text.png";
import { useRouter } from "next/router";
const Sekilas = () => {
  const router = useRouter();
  return (
    <>
      <div class="h-screen  overflow-hidden bg-blastoutdarkpurple text-[#FFFFFF] py-20">
        <div class="relative flex flex-col gap-y-2">
          <div class="flex flex-row justify-center">
          <h1 class="font-bold text-6xl font-TransAmerica text-center">
            BLASTOUT 
          </h1>
          <Link href="./Tentang"><Image src={Arrow} alt="arrow" class="w-[100px] flex justify-center hover:shadow-[50px_50px_25px_24px_#FFBD0C] duration-300 text-[#FFBD0C] p-0"/></Link>
          </div>
          <Image src={Line} alt="line" class="block mx-auto pt-5 w-[500px]" />
          <p class="text-center px-[200px] font-Poppins text-[36px] pt-12">
          BlastOut merupakan program kerja dari Balairung Klass, organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan penampilan hiburan.
          </p>
          <Image src={Text} alt="text" class="pt-40"/>
        </div>
      </div>
    </>
  );
};

export default Sekilas;
