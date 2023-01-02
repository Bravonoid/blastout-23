import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <style jsx>{`
        .underline-event::after {
          content: "";
          height: 4px;
          width: 100%;
          position: absolute;
          bottom: -0.4em;
          left: 50%;
          transform: translateX(-50%);
          background-color: #ff0070;
          border-radius: 99px;
        }
      `}</style>
      <div className="w-full py-12 xl:py-24 2xl:py-36 relative bg-blastoutdarkpurple group">
        <div
          className="font-bold text-blastoutwhite text-glow text-2xl sm:text-5xl uppercase font-inter text-center mb-[12vw] lg:mb-36 2xl:mb-60 relative w-fit mx-auto"
          data-aos="fade-down"
        >
          Timeline
          <Image
            src="/beranda/timeline/underline.svg"
            alt="underline"
            width={1000}
            height={1000}
            className="absolute bottom-0 left-0 w-full -mb-1 sm:-mb-4"
          />
        </div>
        <div
          className="hidden lg:block relative w-[85%] mx-auto group my-24"
          id="arrow"
          data-aos="slide-right"
        >
          <div className="w-full relative z-10">
            <Image
              src="/beranda/timeline/arrow.svg"
              alt="arrow bg"
              width={1000}
              height={1000}
              className="w-full relative bg-blastoutdarkpurple"
            />
            <div className="w-full h-full grid lg:grid-cols-5 lg:grid-rows-2 absolute top-0 left-0 pl-[10vw] pr-[10vw]">
              {Date("03-20 JAN", false)}
              <div />
              {Date("05 FEB", false)}
              <div />
              {Date("05 FEB", false)}
              <div />
              {Date("04 FEB", true)}
              <div />
              {Date("05 FEB", true)}
            </div>
          </div>
          <div className="w-full h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-[10vw] pr-[10vw]">
            <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-5 grid-rows-3 pl-[10vw] pr-[10vw]">
              {Event("Briefing", false)}
              <div />
              {Event("Blastalk", false)}
              <div />
              {Event("Entertainment", false)}
              <div className="col-span-5" />
              <div />
              {Event("Tryout", true)}
              <div />
              {Event("Campus Fair", true)}
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <div className="grid grid-cols-2 -translate-x-[15%] sm:-translate-x-[12%] lg:hidden">
          <div className="relative flex justify-center bg-blastoutdarkpurple z-10 transition duration-1000">
            <Image
              src="/beranda/timeline/arrow-v.svg"
              alt="arrow bg"
              width={1000}
              height={1000}
              className="w-1/2 sm:w-1/3 bg-blastoutdarkpurple ml-auto"
              data-aos="fade-down"
              data-aos-delay={500}
            />
            <div className="w-1/2 sm:w-1/3 pt-[18vw] sm:pt-[12vw] pb-48 grid grid-rows-5 place-content-center text-center gap-y-[16vw] sm:gap-y-[10vw] absolute top-0 right-0">
              {Date("03-20 JAN", false)}
              {Date("04 FEB", false)}
              {Date("05 FEB", false)}
              {Date("05 FEB", false)}
              {Date("05 FEB", false)}
            </div>
          </div>
          <div className="flex flex-col gap-y-[22.5vw] sm:gap-y-[14vw] pt-[20vw] sm:pt-[13vw] ml-[5vw] transition duration-1000">
            <div
              className="font-inter font-black text-[6vw] sm:text-[4vw] text-white leading-none flex items-center w-fit h-fit uppercase tracking-wider underline-event relative whitespace-nowrap"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              Briefing
            </div>
            <div
              className="font-inter font-black text-[6vw] sm:text-[4vw] text-white leading-none flex items-center w-fit h-fit uppercase tracking-wider underline-event relative whitespace-nowrap"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              Tryout
            </div>
            <div
              className="font-inter font-black text-[6vw] sm:text-[4vw] text-white leading-none flex items-center w-fit h-fit uppercase tracking-wider underline-event relative whitespace-nowrap"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              Blastalk
            </div>
            <div
              className="font-inter font-black text-[6vw] sm:text-[4vw] text-white leading-none flex items-center w-fit h-fit uppercase tracking-wider underline-event relative whitespace-nowrap"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              Campus Fair
            </div>
            <div
              className="font-inter font-black text-[6vw] sm:text-[4vw] text-white leading-none flex items-center w-fit h-fit uppercase tracking-wider underline-event relative whitespace-nowrap"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              Entertainment
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;

function Date(title, bottom) {
  return (
    <div
      className={`relative font-inter font-black text-[6vw] sm:text-[4vw] lg:text-2xl xl:text-[1.75rem] 2xl:text-4xl text-blastoutdarkpurple w-full h-full flex justify-center lg:justify-start lg:text-start leading-none lg:my-0
      ${bottom && "items-end"}`}
      data-aos="fade-right"
      data-aos-delay={200}
    >
      <span className="lg:ml-[1vw] 2xl:ml-4">
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1]}
      </span>
      <div className="hidden lg:inline-block absolute top-0 left-0 h-full w-[4px] 2xl:w-[6px] bg-blastoutdarkpurple" />
    </div>
  );
}

function Event(title, bottom) {
  return (
    <div
      className={`relative w-full h-full lg:grid grid-rows-2 transition duration-1000`}
      data-aos={!bottom ? "slide-up" : "slide-down"}
      data-aos-anchor="#arrow"
      data-aos-anchor-placement="top-center"
      data-aos-delay={100}
    >
      <div
        className={`relative w-full h-full ${
          !bottom ? "row-start-2" : "row-start-1"
        }`}
      >
        <div className="hidden lg:inline-block absolute top-0 left-0 h-full w-[4px] 2xl:w-[6px] bg-blastoutpink" />
        <div
          className={`hidden lg:inline-block absolute left-0 h-[4px] 2xl:h-[6px] w-full bg-blastoutpink ${
            !bottom ? "top-0" : "bottom-0"
          }`}
        />
      </div>
      <div
        className={`font-inter font-extrabold text-sm lg:text-lg 2xl:text-3xl 2xl:my-2 text-blastoutwhite uppercase flex justify-center whitespace-nowrap ${
          !bottom ? "items-end row-start-1" : "row-start-2"
        }`}
      >
        {title}
      </div>
    </div>
  );
}
