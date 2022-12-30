import Image from "next/image";

function WhatsInside() {
  const events = [
    {
      title: "Interactive Talkshow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex.",
      img: "1-talkshow",
    },
    {
      title: "Faculty Fair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex.",
      img: "2-faculty",
    },
    {
      title: "Campus Fair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex.",
      img: "3-campus",
    },
    {
      title: "Entertainment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex.",
      img: "4-entertainment",
    },
  ];

  return (
    <>
      <div className="font-inter flex flex-col justify-center items-center relative mt-24 md:mt-12">
        <h2 className="uppercase text-blastoutwhite text-glow text-2xl lg:text-4xl xl:text-5xl font-bold mb-12">
          What's Inside
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 xl:gap-12 px-16 lg:px-0">
          {events.map(({ title, desc, img }, i) => (
            <article
              key={i}
              className="bg-[#E5E5E5] text-[#1A1A1A] border-4 border-blastoutdarkpink aspect-square max-w-[15rem] lg:max-w-none lg:w-[22rem] lg:h-[26rem] px-4 py-6 lg:p-10 flex flex-col justify-between z-10 cursor-default transition group hover:border-blastoutpink hover:drop-shadow-[0_0_48px_rgba(255,0,112,.6)]"
            >
              <div className="flex items-center lg:flex-col lg:items-start lg:justify-between lg:h-full gap-x-3">
                <div className="w-10 h-10 p-[.6rem] rounded-full bg-blastoutdarkpink flex items-center justify-center mb-2 transition group-hover:bg-blastoutpink lg:h-16 lg:w-16 lg:p-4 lg:mb-8">
                  <Image
                    src={`/mainevent/whatsinside/${img}.svg`}
                    alt={`${img} logo`}
                    width={1000}
                    height={1000}
                    className="aspect-square"
                  />
                </div>
                {i !== 0 ? (
                  <div className="h-full w-full lg:mt-8 hidden lg:inline-block" />
                ) : (
                  ""
                )}
                <h4 className="text-[16px] lg:text-3xl xl:text-4xl font-bold mb-2 lg:mb-5 leading-tight font-inter">
                  {title}
                </h4>
              </div>
              <p className="text-[14px] lg:text-[18px] leading-[1.1]">{desc}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-between w-[100vw] mt-20">
          <Image
            src="/mainevent/whats-blastout.svg"
            alt="whats inside blastout"
            width={1000}
            height={1000}
            className="w-32 sm:w-[200px] lg:w-[300px] 2xl:w-[400px] -ml-8"
          />
          {/* bg kanan bawah */}
          <Image
            src="/mainevent/whats-paper.svg"
            alt="whats inside blastout"
            width={1000}
            height={1000}
            className="w-40 sm:w-[300px] lg:w-[400px] 2xl:w-[500px]"
          />
        </div>
        {/* whats inside blastout kiri atas */}
        <Image
          src="/mainevent/whats-whats.svg"
          alt="whats inside blastout"
          width={1000}
          height={1000}
          className="w-[224px] lg:w-[400px] xl:w-[624px] absolute left-0 top-24"
        />
        {/* blastout kiri bawah */}
      </div>
    </>
  );
}

export default WhatsInside;
