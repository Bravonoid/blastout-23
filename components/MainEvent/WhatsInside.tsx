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
    <div className="flex flex-col justify-center items-center relative">
      <h2 className="uppercase text-blastoutwhite text-glow text-5xl font-bold mb-12">
        What&apos;s Inside
      </h2>
      <div className="grid grid-cols-2 gap-24">
        {events.map(({ title, desc }, i) => (
          <article
            key={i}
            className="bg-neutral-400 w-80 h-[22rem] p-10 flex flex-col justify-between"
          >
            <div className="h-[4rem] w-fit aspect-square bg-neutral-600 rounded-full" />
            <div>
              <h4 className="text-4xl text-bold mb-5">{title}</h4>
              <p className="leading-none">{desc}</p>
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
        className="w-[624px] absolute left-0 top-24"
      />
      {/* blastout kiri bawah */}
      <Image
        src="/mainevent/whats-blastout.svg"
        alt="whats inside blastout"
        width={1000}
        height={1000}
        className="w-[466px] absolute -left-32 -bottom-96"
      />
      {/* bg kanan bawah */}
      <Image
        src="/mainevent/whats-paper.svg"
        alt="whats inside blastout"
        width={1000}
        height={1000}
        className="w-[50vw] absolute right-0 -bottom-96"
      />
    </div>
  );
}

export default WhatsInside;
