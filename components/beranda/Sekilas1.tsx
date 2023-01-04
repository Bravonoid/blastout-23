import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

const Sekilas1 = () => {
  const [k, setK] = useState(1);

  const anim = [{class: "absolute bottom-0 flex opacity-0 w-[200vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] scale-x-[2] sm:scale-[1] ease-linear"}, {class: "absolute bottom-0 flex w-[200vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] scale-x-[2] sm:scale-[1] ease-linear transition-[transform] duration-[20000ms]"}, {class: "absolute top-0 flex opacity-0 w-[200vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] scale-x-[2] sm:scale-[1] ease-linear"}, {class: "absolute top-0 flex w-[200vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] scale-x-[2] sm:scale-[1] ease-linear transition-[transform] duration-[20000ms]"}];
  const style = [{transform: "translateX(0)"}, {transform: "translateX(-50%)"}, {transform: "translateX(-50%)"}, {transform: "translateX(0)"}];
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

  const [tm, setTm] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTm(20000);
      setK((k+1)%2);
    }, tm);
    return () => clearInterval(interval);
  }, [k, tm]);

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
      <div className="my-[2vw] relative">
        <div className="opacity-0 bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] scale-x-[2] sm:scale-[1]"></div>
        <div className="opacity-0 bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] scale-x-[2] sm:scale-[1]"></div>
        <div className={anim[k].class} style={style[k]}>
          <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] sm:scale-[1]"></div>
          <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] sm:scale-[1]"></div>
        </div>
        <div className={anim[(k+1)%2].class} style={style[(k+1)%2]}>
          <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] sm:scale-[1]"></div>
          <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] sm:scale-[1]"></div>
        </div>
        <div className={anim[k+2].class} style={style[k+2]}>
          <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] sm:scale-[1]"></div>
          <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] sm:scale-[1]"></div>
        </div>
        <div className={anim[(k+1)%2 + 2].class} style={style[(k+1)%2 + 2]}>
          <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] sm:scale-[1]"></div>
          <div className="bg-[url('/beranda/redblastout.png')] w-[100vw] h-[5vw] sm:h-[3vw] bg-contain bg-center bg-no-repeat scale-y-[2] sm:scale-[1]"></div>
        </div>
        {/* <div className={anim[(k+1)%2].class} style={style[(k+1)%2]}></div> */}
      </div>
    </div>
  );
};

export default Sekilas1;
