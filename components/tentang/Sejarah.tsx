import Image from "next/image";
import { useEffect, useState } from "react";
import Ornamen from "../../public/tentang/sejarah/ornamen.svg";

type Data = {
  tahun: number;
  image: string;
  description: string;
};

function Sejarah() {
  const [number, setNumber] = useState<number>(0);

  const data: Data[] = [
    {
      tahun: 2020,
      image: "",
      description:
        'BlastOut 2020 yang bertemakan "Sinergi Millenial Mendobrak Batas di Era 4.0" bertujuan memberikan gambaran kepada pelajar SMA/SMK tentang pelaksananaan SBMPTN yang menggunakan sistem baru yaitu CBT (Computer Based Test). Acara ini dilaksanakan secara luring dengan Mengadakan try out, Talkshow, Gama Fair dan Campus fair, serta Hiburan oleh Feby Putri',
    },
    {
      tahun: 2021,
      image: "",
      description:
        "BlastOut 2021 merupakan acara BlastOut yang pertama kali dilakukan secara daring dikarenakan wabah Covid. Meskipun secara daring, BlastOut 2021 tetap berlangsung secara meriah dengan mengadakan lomba, Try Out online, Podcast Gadjah Mada Fair, Talk Show, dan Closing Ceremony",
    },
    {
      tahun: 2022,
      image: "",
      description:
        'BlastOut 2022 dilaksanakan secara daring dengan mengambil tema "Be Resilient: Glide Across The Dynamic World". Acara ini terfokus pada rangkaian acara try out online, talk show, dan lomba. Try Out dan Talk show ini telah dilaksanakan secara meriah dan diikuti oleh lebih dari 1000 peserta.',
    },
  ];

  useEffect(() => {
    const changeNumber = setInterval(() => {
      setNumber((x) => (x < 2 ? x + 1 : 0));
    }, 5000);

    return () => clearTimeout(changeNumber);
  }, [number]);

  return (
    <section className="relative bg-[#0F0B36] font-inter overflow-hidden">
      <div className="absolute top-3 -left-52 sm:-left-10 blur-[2px]">
        <div className="relative">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-28 sm:max-h-[320px] opacity-40"
            data-aos="fade-left"
            data-aos-delay="1000"
          />
        </div>
        <div className="relative -mt-[8%] sm:-mt-[25%] blur-[2px]">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-28 sm:max-h-[320px]"
            data-aos="fade-left"
            data-aos-delay="900"
          />
        </div>
        <div className="relative -mt-[8%] sm:-mt-[25%] blur-[2px]">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-28 sm:max-h-[320px] opacity-40"
            data-aos="fade-left"
            data-aos-delay="800"
          />
        </div>
      </div>
      <div className="absolute bottom-0 sm:-bottom-24 -right-48 sm:-right-32">
        <div className="relative">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-28 sm:max-h-[320px] opacity-40"
            data-aos="fade-left"
            data-aos-delay="700"
          />
        </div>
        <div className="relative -mt-[5%] sm:-mt-[25%]">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-28 sm:max-h-[320px]"
            data-aos="fade-left"
            data-aos-delay="600"
          />
        </div>
        <div className="relative -mt-[8%] sm:-mt-[20%]">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-28 sm:max-h-[320px] opacity-40"
            data-aos="fade-left"
          />
        </div>
      </div>
      <div className="container sm:max-w-8xl sm:h-screen flex flex-col pt-8 space-y-3 sm:space-y-5 text-white mx-auto mb-12 sm:mb-0 font-inter">
        <h1
          className="font-bold shadow-[#9830D9] drop-shadow text-[#CB18A6] text-4xl sm:text-7xl text-center"
          data-aos="fade-down"
        >
          KILAS LAMPAU
        </h1>
        <h2
          className="font-bold font-inter text-2xl sm:text-5xl text-center flex justify-center items-center"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <style jsx>{`
            @keyframes width-animate {
              0% {
                width: 0;
              }
              33% {
                width: 100%;
              }
              66% {
                width: 100%;
              }
              100% {
                width: 0;
              }
            }
          `}</style>
          BLASTOUT 202
          <div className="relative flex items-center justify-left">
            <div className="opacity-0 w-auto">0</div>
            {[...Array(3)].map((_, i) => (
              <div
                className={`absolute overflow-hidden opacity-0  left-0 text-left transition-all duration-1000 ${
                  // i == number ? "animate-[width-animate_5.5s_ease-in-out]" : ""
                  i == number ? "opacity-100" : ""
                }`}
                key={i}
              >
                {i}
              </div>
            ))}
          </div>
        </h2>

        <div className="relative flex flex-col w-4/5 mx-auto h-full sm:h-3/4 sm:justify-between space-y-10">
          <div
            className="w-full h-48 sm:h-full rounded-xl bg-[#D9D9D9]"
            data-aos="zoom-in"
          ></div>
          <div
            className="sm:absolute border-4 transition-all text-xs sm:text-base sm:border-8 border-[#9830D9] bg-[#E943B6] rounded-xl sm:rounded-3xl flex justify-center text-black font-bold items-start text-justify w-5/6 p-3 sm:p-3 sm:w-2/5  left-0 right-0 mx-auto top-44  sm:left-auto sm:mx-0 sm:bottom-0 sm:top-auto sm:right-14"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {data.map(({ description }, i) => (
              <p
                className={`${
                  number == i
                    ? "opacity-100 w-auto h-auto"
                    : "w-0 h-0 opacity-0 overflow-hidden"
                } transition-opacity duration-1000`}
                key={i}
              >
                {description}
              </p>
            ))}
          </div>
          <div
            className="w-full sm:w-1/3 flex justify-between space-x-3 sm:space-x-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[...Array(3)].map((_, i) => (
              <button
                onClick={() => setNumber(i)}
                className={`py-1 px-4 sm:px-8 border-4 sm:border-8 rounded-lg box-border ${
                  i == number ? "border-[#D6139A]" : "border-[#9830D9]"
                } text-lg sm:text-2xl font-bold`}
                key={i}
              >
                202{i}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sejarah;
