import React from "react";
import Image from "next/image";
import Link from "next/link";
import Line from "../../assets/Beranda/Vector 2.png";
import { useRouter } from "next/router";
const Sekilas = () => {
  const router = useRouter();
  return (
    <>
      <div class="h-screen  overflow-hidden bg-blastoutpurple text-[#FFFFFF] py-20">
        <div class="relative flex flex-col gap-y-12">
          <h1 class="font-bold text-6xl font-TransAmerica text-center">
            BLASTOUT 
            <Link href="./Tentang"><span class="hover:shadow-[0px_0px_9px_9px_#FFBD0C] duration-300 text-[#FFBD0C] p-0">&#x3e;</span></Link>
          </h1>
          <Image src={Line} alt="line" class="block mx-auto pt-5 w-[300px]" />
          <p class="text-center px-20 font-Poppins text-[36px]">
          BlastOut merupakan program kerja dari Balairung Klass, organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan penampilan hiburan.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sekilas;
