import Image from "next/image";

function Timeline() {
  return (
    <div className="w-full my-32 relative">
      <h2 className="font-bold text-blastoutwhite text-glow text-2xl lg:text-5xl uppercase font-inter text-center mb-36 2xl:mb-48">
        Timeline
      </h2>
      <div className="relative w-[85%] mx-auto group">
        <div className="w-full relative z-10">
          <Image
            src="/beranda/timeline/arrow.svg"
            alt="arrow bg"
            width={1000}
            height={1000}
            className="w-full relative bg-blastoutdarkpurple"
          />
          <div className="w-full h-full grid grid-cols-5 grid-rows-2 absolute top-0 left-0 pl-[10vw] pr-[10vw]">
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
    </div>
  );
}

export default Timeline;

function Date(title, bottom) {
  return (
    <div
      className={`relative font-inter font-black text-2xl xl:text-[1.75rem] 2xl:text-4xl text-blastoutdarkpurple w-full h-full flex leading-none ${
        bottom && "items-end"
      }`}
    >
      <span className="ml-2 2xl:ml-4">
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1]}
      </span>
      <div className="absolute top-0 left-0 h-full w-[4px] 2xl:w-[6px] bg-blastoutdarkpurple" />
    </div>
  );
}

function Event(title, bottom) {
  return (
    <div
      className={`relative w-full h-full grid grid-rows-2 transition duration-1000 ${
        !bottom
          ? "translate-y-[80%] group-hover:translate-y-0"
          : "-translate-y-[80%] group-hover:translate-y-0"
      }`}
    >
      <div
        className={`relative w-full h-full ${
          !bottom ? "row-start-2" : "row-start-1"
        }`}
      >
        <div className="absolute top-0 left-0 h-full w-[4px] 2xl:w-[6px] bg-blastoutpink" />
        <div
          className={`absolute left-0 h-[4px] 2xl:h-[6px] w-full bg-blastoutpink ${
            !bottom ? "top-0" : "bottom-0"
          }`}
        />
      </div>
      <div
        className={`font-inter font-extrabold text-2xl 2xl:text-3xl 2xl:my-2 text-blastoutwhite uppercase flex justify-center whitespace-nowrap ${
          !bottom ? "items-end row-start-1" : "row-start-2"
        }`}
      >
        {title}
      </div>
    </div>
  );
}
