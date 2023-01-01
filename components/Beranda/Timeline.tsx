import Image from "next/image";

function Timeline() {
  return (
    <div className="w-full my-32 relative">
      <h2 className="font-bold text-blastoutwhite text-glow text-2xl lg:text-4xl xl:text-5xl uppercase font-inter text-center mb-28">
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
          <div className="w-full h-full grid grid-cols-5 grid-rows-2 absolute top-0 left-0 pl-[5.5rem] pr-16">
            <div className="relative font-inter font-black text-2xl text-blastoutdarkpurple w-full h-full flex leading-none pr-14">
              <span className="ml-2">03-20 JAN</span>
              <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutdarkpurple" />
            </div>
            <div />
            <div className="relative font-inter font-black text-2xl text-blastoutdarkpurple w-full h-full flex leading-none pr-14 ">
              <span className="ml-2">05 FEB</span>
              <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutdarkpurple" />
            </div>
            <div />
            <div className="relative font-inter font-black text-2xl text-blastoutdarkpurple w-full h-full flex leading-none pr-14 ">
              <span className="ml-2">05 FEB</span>
              <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutdarkpurple" />
            </div>
            <div />
            <div className="relative font-inter font-black text-2xl text-blastoutdarkpurple w-full h-full flex leading-none pr-14 items-end">
              <span className="ml-2">04 FEB</span>
              <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutdarkpurple" />
            </div>
            <div />
            <div className="relative font-inter font-black text-2xl text-blastoutdarkpurple w-full h-full flex leading-none pr-14 items-end">
              <span className="ml-2">05 FEB</span>
              <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutdarkpurple" />
            </div>
          </div>
        </div>
        <div className="w-full h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-[5.5rem] pr-16">
          <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-5 grid-rows-3 pl-[5.5rem] pr-16">
            <div className="relative w-full h-full grid grid-rows-2 translate-y-[80%] group-hover:translate-y-0 transition duration-1000">
              <div className="font-inter font-extrabold text-xl text-blastoutwhite uppercase flex justify-center items-end">Briefing</div>
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutpink" />
                <div className="absolute top-0 left-0 h-[4px] w-full bg-blastoutpink" />
              </div>
            </div>
            <div />
            <div className="relative w-full h-full grid grid-rows-2 translate-y-[80%] group-hover:translate-y-0 transition duration-1000">
              <div className="font-inter font-extrabold text-xl text-blastoutwhite uppercase flex justify-center items-end">Blastalk</div>
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutpink" />
                <div className="absolute top-0 left-0 h-[4px] w-full bg-blastoutpink" />
              </div>
            </div>
            <div />
            <div className="relative w-full h-full grid grid-rows-2 translate-y-[80%] group-hover:translate-y-0 transition duration-1000">
              <div className="font-inter font-extrabold text-xl text-blastoutwhite uppercase flex justify-center items-end">Entertainment</div>
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutpink" />
                <div className="absolute top-0 left-0 h-[4px] w-full bg-blastoutpink" />
              </div>
            </div>
            <div className="col-span-5" />
            <div />
            <div className="relative w-full h-full grid grid-rows-2 -translate-y-[80%] group-hover:translate-y-0 transition duration-1000">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutpink" />
                <div className="absolute bottom-0 left-0 h-[4px] w-full bg-blastoutpink" />
              </div>
              <div className="font-inter font-extrabold text-xl text-blastoutwhite uppercase flex justify-center">Tryout</div>
            </div>
            <div />
            <div className="relative w-full h-full grid grid-rows-2 -translate-y-[80%] group-hover:translate-y-0 transition duration-1000">
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 h-full w-[4px] bg-blastoutpink" />
                <div className="absolute bottom-0 left-0 h-[4px] w-full bg-blastoutpink" />
              </div>
              <div className="font-inter font-extrabold text-xl text-blastoutwhite uppercase flex justify-center">Campus Fair</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
