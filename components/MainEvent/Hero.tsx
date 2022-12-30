import Image from "next/image";
import { useEffect, useState } from "react";
import CountdownTimer from "../../lib/CountdownTimer";

function Hero() {
  const [date, setDate] = useState(0);

  useEffect(() => {
    const NOW_IN_MS = new Date().getTime();
    const ANNOUNCEMENT_IN_MS = new Date("January 1, 2023 15:00:00").getTime();

    let timeRemaining = ANNOUNCEMENT_IN_MS - NOW_IN_MS;

    const check = new Date(Date.now()).getTime() < ANNOUNCEMENT_IN_MS;
    if (!check) setCount(false);

    setDate(NOW_IN_MS + timeRemaining);
    // setDate(NOW_IN_MS + 3000);
  }, []);

  const [count, setCount] = useState(true);

  return (
    <>
      <div className="w-screen min-h-screen relative">
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between relative overflow-x-hidden min-h-[80vh] xl:min-h-[90vh]">
          {/* countdown, acara utama, day count */}
          <div className="w-full basis-[40%] font-inter flex flex-col justify-end items-center lg:items-start lg:pl-24">
            <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6 text-blastoutwhite">
              <CountdownTimer targetDate={date} setCount={setCount} />
              <h2 className="whitespace-nowrap border-y border-blastoutgold uppercase font-bold text-[32px] sm:text-4xl md:text-5xl 2xl:text-[5rem] text-center leading-none pt-2 lg:pt-3 pb-2 lg:pb-3 text-glow">
                Acara Utama
              </h2>
              {/* <h2 className="self-center lg:self-start text-xl lg:text-6xl uppercase font-bold p-1 bg-blastoutgold text-black w-fit">
              Day 2
            </h2> */}
              <Image
                src="/mainevent/hero-days.svg"
                alt="day counter"
                height={1000}
                width={1000}
                className="w-1/2 lg:w-[160px] 2xl:w-[260px] mx-auto lg:mx-0"
              />
            </div>
          </div>
          {/* title */}
          <div className="w-full max-w-xs md:max-w-lg lg:max-w-none mx-auto basis-[60%] flex justify-center items-center mt-28 mb-6 lg:mb-32">
            <Image
              src="/mainevent/hero-title.png"
              width={1000}
              height={1000}
              alt="blastout title"
              className="w-[120%] z-10"
            />
          </div>
        </div>
        <div className="w-screen flex justify-between overflow-hidden -mb-16">
          {/* bg kertas bawah */}
          <Image
            src="/mainevent/hero_whats-paper.svg"
            width={1000}
            height={1000}
            alt="bg"
            className="w-1/2"
          />
          <div className="relative">
            {/* bg blastout muter */}
            <Image
              src="/mainevent/hero_whats-blastout.svg"
              width={1000}
              height={1000}
              alt="bg"
              className="absolute -right-1/2 h-full animate-spin-slow"
            />
            {/* bg grid blastout */}
            <Image
              src="/mainevent/hero_whats-grid.svg"
              width={1000}
              height={1000}
              alt="bg"
              className="w-[40vw]"
            />
          </div>
        </div>
        {/* bg grid atas */}
        <Image
          src="/mainevent/hero-grid.svg"
          width={1000}
          height={1000}
          alt="bg"
          className="absolute top-0 lg:-top-10 xl:-top-20 w-[135px] md:w-[250px] lg:w-[325px] xl:w-[475px]"
        />
        {/* bg kotak gradasi */}
        <Image
          src="/mainevent/hero-grad_rect.svg"
          width={1000}
          height={1000}
          alt="bg"
          className="absolute left-0 top-24 md:top-44 lg:top-48 xl:top-64 h-[26px] md:h-[48px] lg:h-[60px] xl:h-[100px] w-fit"
        />
        {/* bg kertas atas */}
        <Image
          src="/mainevent/hero_whats-paper.svg"
          width={1000}
          height={1000}
          alt="bg"
          className="w-[345px] md:w-[600px] xl:w-[900px] absolute -top-10 md:-top-24 lg:-top-[10%] -right-28 lg:-right-[20%] -rotate-[168deg]"
        />
      </div>
    </>
  );
}

export default Hero;
