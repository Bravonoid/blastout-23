import React from "react";
import Image from "next/image";
import Link from "next/link";
import Line from "../../assets/Beranda/Vector 2.png";
import Arrow from "../../assets/Beranda/arrow.png";
import ArrowGlow from "../../assets/Beranda/arrow_glow.png";
import Text from "../../assets/Beranda/text.png";
import { useState, useEffect } from "react";
const Sekilas = ({ onClick, image, position }) => {
  const [isHover, setHover] = useState(false);
  useEffect(() => {
    console.log(isHover);
  }, [isHover]);
  return (
    <>
      <div class="h-screen  overflow-hidden bg-blastoutdarkpurple text-[#FFFFFF] py-20">
        <div class="relative flex flex-col gap-y-2">
          <div class="flex flex-row justify-center gap-x-5">
            <h1 class="font-bold text-6xl font-TransAmerica text-center mobile:text-3xl">
              BLASTOUT
            </h1>
            <Link href="./Tentang">
              <div
                className="transition-all"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                {isHover ? (
                  <Image
                    src={ArrowGlow}
                    alt=""
                    onClick={onClick}
                    className="cursor-pointer w-[50px] scale-125 mobile:"
                  />
                ) : (
                  <Image
                    src={Arrow}
                    alt=""
                    onClick={onClick}
                    className="cursor-pointer mobile:w-[25px] w-[48px]"
                  />
                )}
              </div>
            </Link>
          </div>
          <Image
            src={Line}
            alt="line"
            class="block mx-auto pt-5 w-[500px] mobile:w-[300px]"
          />
          <p class="text-center px-[200px] font-Poppins lg:text-xl pt-12 mobile:px-5 mobile:text-sm sm:text-lg">
            BlastOut merupakan program kerja dari Balairung Klass, organisasi
            mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di
            Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di
            Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus,
            dan penampilan hiburan.
          </p>
          <Image src={Text} alt="text" class="pt-40" />
        </div>
      </div>
    </>
  );
};

export default Sekilas;
