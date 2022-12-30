import Image from "next/image";
import { useEffect, useState } from "react";
import Ornamen from "../../public/tentang/sejarah/ornamen.svg";

function Sejarah() {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const changeNumber = setInterval(() => {
      setNumber((x) => (x < 2 ? x + 1 : 0));
    }, 5000);

    return () => clearTimeout(changeNumber);
  }, [number]);

  return (
    <section className="relative bg-[#0F0B36] font-inter overflow-hidden">
      <div className="absolute top-3 -left-10 blur-[2px]">
        <div className="relative">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-[320px] opacity-40"
          />
        </div>
        <div className="relative -mt-[25%] blur-[2px]">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-[320px] "
          />
        </div>
        <div className="relative -mt-[25%] blur-[2px]">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-[320px] opacity-40"
          />
        </div>
      </div>
      <div className="absolute -bottom-24 -right-32">
        <div className="relative">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-[320px] opacity-40"
          />
        </div>
        <div className="relative -mt-[25%]">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-[320px] "
          />
        </div>
        <div className="relative -mt-[20%]">
          <Image
            src="/tentang/sejarah/ornamen.svg"
            alt=""
            width={596}
            height={320.5}
            className="max-h-[320px] opacity-40"
          />
        </div>
      </div>
      <div className="max-w-8xl h-screen flex flex-col pt-8 space-y-5 text-white mx-auto">
        <h1 className="font-bold text-[#CB18A6] text-7xl text-center">
          KILAS LAMPAU
        </h1>
        <h2 className="font-bold font-inter text-5xl text-center flex justify-center items-center">
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
                className={`absolute text-red-500 underline overflow-hidden w-0 left-0 text-left ${
                  i == number ? "animate-[width-animate_5.5s_ease-in-out]" : ""
                }`}
                key={i}
              >
                {i}
              </div>
            ))}
          </div>
        </h2>

        <div className="relative flex flex-col w-4/5 mx-auto h-3/4 justify-between space-y-10">
          <div className="w-full h-full rounded-xl bg-[#D9D9D9]"></div>
          <div className="w-1/3 flex justify-between space-x-3">
            {[...Array(3)].map((_, i) => (
              <button
                onClick={() => setNumber(i)}
                className={`py-1 px-8 border-8 rounded-lg box-border ${
                  i == number ? "border-[#D6139A]" : "border-[#9830D9]"
                } text-2xl font-bold`}
                key={i}
              >
                202{i}
              </button>
            ))}
          </div>
          <div className="absolute border-8 border-[#9830D9] bg-[#E943B6] rounded-3xl flex justify-center items-start text-justify p-6 w-2/5 h-2/5 bottom-0 right-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec
            neque eros, porta a varius vel, luctus eget ex. Cras non
            pellentesque diam.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sejarah;
