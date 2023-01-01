import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Sekilas1 = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/tentang");
  };

  return (
    <div className="bg-[#0F0B36] flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row justify-evenly w-[80%] h-[6vw] sm:h-[4vw] items-center">
          <div className="bg-[url('/beranda/BLASTOUT.png')] w-[70%] h-[6vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat"></div>
          <div
            className="bg-[url('/beranda/arrow.png')] w-[10%] h-[4vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat hover:scale-[1.05]"
            onClick={clickHandler}
          ></div>
        </div>
        <div className="bg-[url('/beranda/vector2.png')] w-[50vw] h-[1.5vw] sm:w-[32.5vw] sm:h-[1vw] bg-contain bg-center bg-no-repeat"></div>
      </div>
      <div className="w-[60vw] font-inter text-[10px] sm:text-3xl text-center my-[5vh] sm:my-[4vw]">
        BlastOut merupakan program kerja dari Balairung Klass, organisasi
        mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di
        Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab.
        Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan
        penampilan hiburan.
      </div>
      <div className="my-[2vw]">
        <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[3vw] bg-contain bg-center bg-no-repeat"></div>
        <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[3vw] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default Sekilas1;
