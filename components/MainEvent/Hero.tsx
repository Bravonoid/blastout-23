import Image from "next/image";
import { useEffect, useState } from "react";
import CountdownTimer from "../../lib/CountdownTimer";

function Hero() {
  const [date, setDate] = useState(0);

  useEffect(() => {
    const NOW_IN_MS = new Date().getTime();
    const ANNOUNCEMENT_IN_MS = new Date("February 5, 2023 15:00:00").getTime();

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
          <div className="w-full basis-[40%] font-inter flex flex-col justify-end items-center lg:items-start lg:pl-24 z-10">
            <div className="flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6 text-blastoutwhite">
              <CountdownTimer targetDate={date} setCount={setCount} />
              <h2 className="whitespace-nowrap border-y border-blastoutgold uppercase font-bold text-[32px] sm:text-4xl md:text-5xl 2xl:text-[4rem] text-center leading-none pt-2 lg:pt-3 pb-2 lg:pb-3 text-glow">
                Acara Utama
              </h2>
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
          <div className="w-full max-w-xs md:max-w-lg lg:max-w-none mx-auto basis-[60%] flex justify-center items-center mt-28 mb-6">
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
          className="absolute top-12 2xl:-top-0 w-[135px] md:w-[250px] lg:w-[300px] 2xl:w-[450px]"
        />
        {/* bg kotak gradasi */}
        <Image
          src="/mainevent/hero-grad_rect.svg"
          width={1000}
          height={1000}
          alt="bg"
          className="absolute left-0 top-36 md:top-56 lg:top-[17rem] 2xl:top-[20rem] h-[26px] md:h-[48px] lg:h-[60px] 2xl:h-[80px] w-fit"
        />
        {/* bg kertas atas */}
        <Image
          src="/mainevent/hero_whats-paper.svg"
          width={1000}
          height={1000}
          alt="bg"
          className="w-[345px] md:w-[600px] 2xl:w-[900px] absolute top-0 md:-top-20 2xl:-top-[5%] -right-28 lg:-right-[20%] -rotate-[168deg]"
        />
      </div>
    </>
  );
}

export default Hero;
