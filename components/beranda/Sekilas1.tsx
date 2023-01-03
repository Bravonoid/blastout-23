import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

const Sekilas1 = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/tentang");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#0F0B36] flex flex-col items-center justify-center text-white pt-20">
      <div
        className="flex flex-col items-center justify-center w-full"
        data-aos="fade-right"
      >
        <div
          className="flex flex-row justify-evenly w-[65%] sm:w-[30%] h-[8vw] sm:h-[4vw] items-center cursor-pointer"
          onClick={clickHandler}
        >
          <div className="bg-[url('/beranda/BLASTOUT.png')] w-[70%] sm:w-[70%] h-[6vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat"></div>
          <div className="bg-[url('/beranda/arrow.png')] w-[10%] h-[5vw] sm:h-[2.5vw] bg-contain bg-center bg-no-repeat hover:scale-[1.05]"></div>
        </div>
        <div className="bg-[url('/beranda/vector2.png')] w-[70vw] h-[2vw] scale-y-[0.5] sm:w-[32.5vw] sm:h-[1vw] bg-contain bg-center bg-no-repeat"></div>
      </div>
      <div
        className="w-[60vw] font-inter text-[lg] sm:text-3xl text-center mt-[2.5vh] mb-[5vh] sm:my-[4vw]"
        data-aos="zoom-out-up"
        data-aos-delay={500}
      >
        BlastOut merupakan program kerja dari Balairung Klass, organisasi
        mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di
        Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab.
        Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan
        penampilan hiburan.
      </div>
      <div className="my-[2vw]">
        <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] scale-x-[2] sm:scale-[1]"></div>
        <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] scale-x-[2] sm:scale-[1]"></div>
      </div>
    </div>
  );
};

export default Sekilas1;
