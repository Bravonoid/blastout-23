import React from "react";
import Image from "next/image";
import cloud from "../../assets/Tryout/cloud.png";
import rounded from "../../assets/Tryout/round_border.png";
import round from "../../assets/Tryout/round_text.png";
import cloud1 from "../../assets/Tryout/cloud2.png";
import wave from "../../assets/Tryout/wave.png";
import AOS from "aos";
import { useEffect } from "react";
// import grid from "../../assets/Tryout/grid.png";

const Penjelasan = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="h-screen mobile:h-[1200px] sm:h-[1100px] md:h-[1200px] relative overflow-hidden bg-[#0F0B36] z-50 pb-40">
        <Image
          src={cloud}
          alt="cloud"
          className="absolute xl:w-[500px] xl:top-[10px] left-0 mobile:top-[30px] mobile:w-[250px] sm:top-[30px] sm:w-[300px]"
          data-aos="fade-right"
        />
        <div className="flex lg:flex-row mobile:flex-col-reverse sm:flex-col-reverse mobile:pt-20">
          <div className="flex flex-col text-justify font-inter pt-48 lg:pt-80 pb-20 pl-20 px-[60px] lg:px-60 2xl:pl-80">
            <div
              className="flex flex-row items-center justify-center lg:justify-start gap-x-4"
              data-aos="fade-right"
            >
              <h1 className="font-bold text-blastoutwhite text-glow text-2xl lg:text-4xl xl:text-5xl uppercase font-inter flex items-center justify-center">
                TRYOUT{" "}
                <span className="bg-[#FFBD0C] ml-4 text-black p-1">DAY 1</span>
              </h1>
              <div className="border-[#D9D9D9] border-t-2 px-[60px] block my-auto mobile:hidden sm:hidden lg:block" />
            </div>
            <p
              className="lg:max-w-[500px] text-[#D9D9D9] font-inter text-sm w-full lg:text-2xl py-8 2xl:max-w-[700px]"
              data-aos="zoom-out-up"
              data-aos-delay={100}
            >
              Try Out (TO) yang diadakan oleh Balairung Klass UGM merupakan
              serangkaian kegiatan pelatihan ujian masuk perguruan tinggi yang
              ditujukan kepada siswa-siswi SMA/SMK Sederajat di seluruh
              Kabupaten Klaten. Kegiatan ini bertujuan agar siswa-siswi SMA/SMK
              Sederajat yang ingin melanjutkan pendidikan ke perguruan tinggi
              memiliki bekal materi dan sistem ujian yang akan mereka hadapi.
            </p>
          </div>
          <div className="flex justify-center py-28 2xl:pl-60">
            <Image
              src={rounded}
              alt="cloud"
              className="absolute animate-spin-medium mobile:w-[300px] mobile:top-[140px] sm:w-[300px] sm:top-[160px] lg:top-[300px] xl:w-[400px] xl:top-[260px]"
            />
            <Image
              src={round}
              alt="cloud"
              className="absolute mobile:w-[200px] sm:w-[200px] sm:top-[210px] lg:top-[350px] xl:w-[300px] xl:top-[310px]"
            />
          </div>
        </div>
        <Image
          src={cloud1}
          alt="cloud1"
          className="absolute sm:w-[50%] right-0 bottom-0 mobile:w-[200px] mobile:top-[900px] sm:top-[800px] lg:top-[600px]"
          data-aos="fade-left"
        />
        <Image
          src={wave}
          alt="cloud1"
          className="absolute sm:w-[30%] xl:w-[300px] left-0 -bottom-8 mobile:w-[100px] z-50 mobile:top-[900px] sm:top-[800px] lg:top-[600px] xl:top-[600px]"
          data-aos="zoom-out-up"
          data-aos-delay={100}
        />
        {/* <Image
          src={grid}
          alt="grid"
          className="absolute sm:w-[35%] lg:w-[200px] right-0 bottom-0 mobile:w-[100px] mobile:top-[950px] sm:top-[850px] lg:top-[700px]"
        /> */}
      </div>
    </>
  );
};
export default Penjelasan;
