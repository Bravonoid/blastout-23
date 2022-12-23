import Image from "next/image";

function WhatsInside() {
  const events = [
    {
      title: "Interactive Talkshow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex.",
    },
    {
      title: "Faculty Fair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex.",
    },
    {
      title: "Campus Fair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex.",
    },
    {
      title: "Entertainment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus eget ex.",
    },
  ];

  return (
    <div className="min-h-screen font-inter flex flex-col justify-center items-center relative mt-24">
      <h2 className="uppercase text-blastoutwhite text-glow text-2xl lg:text-5xl font-bold mb-12">
        What's Inside
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 px-16 lg:px-0">
        {events.map(({ title, desc }, i) => (
          <article
            key={i}
            className="bg-neutral-400 lg:w-80 h-[240px] lg:h-[22rem] px-4 py-5 lg:p-10 flex flex-col justify-between z-10"
          >
            <div className="h-[4rem] w-fit aspect-square bg-neutral-600 rounded-full" />
            <div>
              <h4 className="text-[16px] lg:text-[40px] font-bold mb-2 lg:mb-5">
                {title}
              </h4>
              <p className="text-[14px] lg:text-[18px] leading-none">{desc}</p>
            </div>
          </article>
        ))}
      </div>
      {/* whats inside blastout kiri atas */}
      <Image
        src="/mainevent/whats-whats.svg"
        alt="whats inside blastout"
        width={1000}
        height={1000}
        className="w-[224px] lg:w-[624px] absolute left-0 top-24"
      />
      {/* blastout kiri bawah */}
      <Image
        src="/mainevent/whats-blastout.svg"
        alt="whats inside blastout"
        width={1000}
        height={1000}
        className="w-[150px] lg:w-[466px] absolute -left-8 lg:-left-32 -bottom-96"
      />
      {/* bg kanan bawah */}
      <Image
        src="/mainevent/whats-paper.svg"
        alt="whats inside blastout"
        width={1000}
        height={1000}
        className="w-[60vw] lg:w-[50vw] absolute right-0 -bottom-96"
      />
    </div>
  );
}

export default WhatsInside;
