import dynamic from "next/dynamic";
import Image from "next/image";
const Map = dynamic(() => import("./lokasi/Map"), { ssr: false });

export default function Lokasi2({ tryout }) {
  return (
    <>
      <div className="w-screen h-full flex flex-col items-center justify-center pt-20 pb-40 md:mb-52 lg:mt-32 lg:mb-64 xl:mb-80 relative">
        <h2 className="font-bold text-blastoutwhite text-glow text-2xl lg:text-4xl xl:text-5xl mb-8 lg:mb-16 uppercase font-inter">
          Lokasi
        </h2>
        <div className="relative 2xl:min-h-[20vh] mb-96">
          <div className="w-[240px] h-[400px] sm:w-[80vw] sm:h-[50vh] lg:w-[70vw] lg:h-[50vh] xl:h-[60vh] 2xl:h-[70vh] absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <Map tryout={tryout} />
            <div className="h-full w-full text-2xl lg:text-3xl 2xl:text-5xl text-blastoutwhite font-bold font-inter bg-blastoutdarkpink border-8 border-blastoutmustard absolute top-0 left-0 flex justify-center items-center">
              Loading...
            </div>
            {/* logo blastout bulet */}
            <Image
              src="/mainevent/lokasi-blastout.png"
              alt="blastout logo"
              height={1000}
              width={1000}
              className="absolute w-16 sm:w-36 lg:w-40 xl:w-48 2xl:w-56 -top-6 -left-8 lg:-top-20 lg:-left-16 -rotate-[20deg] z-20"
            />
            {/* detail kiri bawah */}
            <div className="w-[60%] md:w-[300px] lg:w-[48%] xl:w-[40%] lg:h-60 2xl:h-80 absolute -bottom-12 lg:-bottom-24 xl:-bottom-36 left-1/2 lg:-left-32 xl:-left-36 2xl:-left-44 -translate-x-1/2 lg:translate-x-0 flex flex-col justify-center py-2 px-3 lg:px-16 lg:-py-4 z-20 bg-[#E5E5E5] lg:bg-[url(/mainevent/lokasi-paper.svg)] bg-contain bg-no-repeat font-inter border-4 border-[#FF3234] drop-shadow-[0_0_12px_rgba(255,50,52,.25)] lg:border-transparent lg:bg-transparent lg:drop-shadow-none">
              <h4 className="text-[10px] lg:text-lg 2xl:text-xl">
                {tryout ? 'Sabtu, 4 Februari 2023' : 'Minggu, 5 Februari 2003'}
              </h4>
              <h3 className="text-[14px] lg:text-2xl 2xl:text-3xl font-bold sm:mb-1 lg:my-2">
                {tryout ? 'SMK Negeri 4 Klaten' : 'Al Hakim Convention Hall'}
              </h3>
            </div>
            {/* foto + bg orange */}
            <div className="absolute w-2/3 h-1/2 bg-[#FB5507] -bottom-4 -left-4 lg:w-[32%] lg:aspect-square lg:bg-blastoutmustard lg:-bottom-16 lg:left-auto lg:-right-28 xl:-right-36 2xl:-right-48" />
            <Image
              src="/mainevent/lokasi-foto.png"
              alt="foto"
              height={1000}
              width={1000}
              className="absolute w-2/3 sm:w-1/3 -top-4 -right-4 lg:w-auto lg:h-[55vh] xl:h-[65vh] 2xl:h-[75vh] lg:top-[50%] lg:-translate-y-1/2 lg:-right-24 xl:-right-32 2xl:-right-44 border-4 lg:border-[8px] 2xl:border-[16px] pointer-events-none"
            />
          </div>
        </div>
        <Image
          src="/mainevent/lokasi-pins.svg"
          alt="pins"
          height={1000}
          width={1000}
          className="hidden lg:inline-block absolute w-[90%] top-[12%] left-1/2 -translate-x-1/2  z-30 pointer-events-none"
        />
      </div>
    </>
  );
}
