import React from "react";
import Link from "next/link";
import Image from "next/image";
import text from "../../assets/Tentang/text_tentang.png";
import blastout from "../../assets/Tentang/text_blastout.png";
import blastout_side from "../../assets/Tentang/side_blastout.png";
import Logo from "../../assets/Tentang/logo.png";

const Penjelasan = () => {
  return (
    <>
      <div class="h-fit pt-12  overflow-hidden pb-40 mobile:pb-20 bg-[#0F0B36]">
        <Image
          src={blastout_side}
          alt="text"
          class="sm:h-[800px] sm:w-[200px] lg:h-[700px] mobile:h-full absolute right-0 -top-8 mobile:w-[175px] -z-0"
        />
        <Image
          src={text}
          alt="text"
          class="mobile:hidden sm:py-12 sm:px-[62px] sm:w-[600px]"
        />
        <h1 class="mobile:block drop-shadow-2xl shadow-yellow-500 text-white text-4xl font-bold pl-12 pt-12 pb-12 z-50 sm:hidden">
          TENTANG
        </h1>
        <div class="flex justify-center">
          <div class="flex lg:flex-row sm:gap-x-12 xl:mx-32 xl:px-8 mobile:mx-6 sm:mx-[62px] sm:px-5 bg-[#030022] py-5 w-fit rounded-[50px] mobile:flex-col z-50 sm:flex-col gap-y-5 max-w-[800px] 2xl:max-w-[1200px]">
            <Image
              src={blastout}
              alt="blastout"
              class="w-3/4 mobile:block mx-auto py-5 z-50 sm:block lg:hidden"
            />
            <Image
              src={Logo}
              alt="logo"
              class=" lg:w-[200px] lg:h-[200px] rounded-xl mobile:w-1/2 mobile:h-1/2 sm:w-1/2 sm:h-1/2 z-50 relative block mx-auto my-auto"
            />
            <div class="flex flex-col">
              {/* <h1 class="text-6xl font-bold font-TransAmerica">BLASTOUT</h1> */}
              <Image
                src={blastout}
                alt="blastout"
                class="w-1/2 mobile:hidden sm:w-[300px] sm:hidden lg:block pb-12"
              />
              <p class="text-justify font-inter text-[#FFFFFF] mobile:px-5 z-50 mobile:pt-5 text-base lg:text-xl mb-8">
                BlastOut merupakan program kerja tahunan dari Balairung Klass,
                organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang
                berdomisili di Klaten. Acara ini dilakukan secara offline selama
                2 hari, yaitu Sabtu - Minggu, 4 - 5 Februari 2023.{" "}
              </p>
              <p class="text-justify font-inter text-[#FFFFFF] mobile:px-5 z-50 text-base lg:text-xl">
                BlastOut terdiri dari rangkaian acara inti, yaitu:
              </p>
              <ol class="text-justify font-inter text-[#FFFFFF] mobile:px-5 z-50 text-base lg:text-xl list-disc pl-5 mobile:pl-10 mb-4">
                <li>briefing ke SMA di Kab. Klaten</li>
                <li>tryout beserta pembahasan soal</li>
                <li>talkshow oleh pembicara inspiratif</li>
                <li>
                  faculty fair yang dihadiri oleh fakultas-fakultas dan beberapa
                  UKM yang ada di UGM
                </li>
                <li>penampilan hiburan sebagai penutupan acara</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Penjelasan;
