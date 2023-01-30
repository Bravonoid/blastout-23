import Image from "next/image";

type Data = {
  nama: string;
  src: string;
};

function Sponsor() {
  const data: Data[] = [
    { nama: "DQ Lighting", src: "/beranda/sponsor/dq_lighting.png" },
    {
      nama: "Klasik Production",
      src: "/beranda/sponsor/klasik_production.png",
    },
    {
      nama: "PP Construction and Investment",
      src: "/beranda/sponsor/pp.png",
    },
    { nama: "Raxsa Apparel", src: "/beranda/sponsor/raxsa.png" },
    { nama: "DQ Lighting", src: "/beranda/sponsor/dq_lighting.png" },
    {
      nama: "Klasik Production",
      src: "/beranda/sponsor/klasik_production.png",
    },
    {
      nama: "PP Construction and Investment",
      src: "/beranda/sponsor/pp.png",
    },
    { nama: "Raxsa Apparel", src: "/beranda/sponsor/raxsa.png" },
  ];

  return (
    <section className="bg-[#0F0B36] pt-20">
      <style jsx>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% - 3rem)));
            }
          }

          .animate {
            animation: marquee 32s linear infinite;
            will-change: transform;
            white-space: nowrap;
          }

          .animate-hover:hover .animate {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="max-w-8xl pt-12 mx-auto ">
        <div className="flex flex-col justify-center items-center mt-12 mb-12">
          <h1
            style={{
              textShadow:
                "4px 0px 8px rgba(185, 35, 69, 0.5), -4px 0px 8px rgba(199, 126, 19, 0.4)",
            }}
            className="text-2xl xl:text-5xl font-bold mb-2 text-white"
          >
            SPONSOR
          </h1>
          <Image
            src="/beranda/sponsor/union.svg"
            width={230}
            height={13}
            alt=""
            className="h-[4.5px] xl:h-2.5"
          />
        </div>
        <div
          style={{
            userSelect: "none",
          }}
          className="flex gap-12 animate-hover"
        >
          <div className="flex shrink-0 gap-12 animate">
            {data.map(({ nama, src }, i) => (
              <div
                key={i}
                className="aspect-square relative h-44 lg:h-72 2xl:h-96 "
              >
                <Image src={src} alt={nama} fill className="object-contain" />
              </div>
            ))}
          </div>
          <div aria-hidden="true" className="flex shrink-0 gap-12 animate">
            {data.map(({ nama, src }, i) => (
              <div
                key={i}
                className="aspect-square relative h-44 lg:h-72 2xl:h-96 "
              >
                <Image src={src} alt={nama} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
