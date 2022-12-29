import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Image from "next/image";
import { useMemo } from "react";

function Lokasi() {
  return (
    <div className="w-screen h-screen flex flex-col items-center mt-96 mb-96 relative">
      <h2 className="font-bold text-blastoutwhite text-glow text-2xl lg:text-6xl mb-8 lg:mb-28 uppercase font-inter">
        Lokasi
      </h2>
      <div className="relative h-full w-full">
        <Map />
        <Image
          src="/mainevent/lokasi-pins.svg"
          alt="pins"
          height={1000}
          width={1000}
          className="hidden lg:inline-block absolute 2xl:w-[1440px] lg:-top-16 xl:-top-[30%] left-1/2 -translate-x-1/2 z-30 pointer-events-none"
        />
        {/* <Image src="/mainevent/lokasi-pin.svg" alt="pin" height={1000} width={1000} className="absolute w-fit left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" /> */}
      </div>
    </div>
  );
}

export default Lokasi;

function Map() {
  const center = useMemo(
    () => ({ lat: -7.767511422463657, lng: 110.37648074742108 }),
    []
  );

  const defaultMapOptions = {
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAkWmNE9uX7j24LSYqOROaMIjUel3M_Lwk",
  });

  if (!isLoaded) {
    return (
      <div className="w-[240px] h-[400px] lg:w-[1228px] lg:h-[536px] absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-neutral-900 border-4 lg:border-[16px] border-blastoutmustard">
        <MapLayout>
          <div className="h-full grid place-content-center">
            {/* <div className="w-4 h-16 bg-blastoutmustard rounded-full animate-spin-slow" /> */}
            <span className="font-bold text-4xl text-blastoutmustard">
              Loading...
            </span>
          </div>
        </MapLayout>
      </div>
    );
  }

  return (
    <div className="w-[240px] h-[400px] sm:w-[80vw] lg:h-[536px] absolute top-0 left-1/2 -translate-x-1/2 z-10">
      <MapLayout>
        <GoogleMap
          zoom={18}
          center={center}
          mapContainerClassName="h-full w-full relative z-10 border-4 lg:border-[16px] border-blastoutmustard"
          options={defaultMapOptions}
        >
          <MarkerF position={center} />
        </GoogleMap>
      </MapLayout>
    </div>
  );
}

function MapLayout({ children }) {
  return (
    <>
      {children}
      {/* logo blastout bulet */}
      <Image
        src="/mainevent/lokasi-blastout.png"
        alt="blastout logo"
        height={1000}
        width={1000}
        className="absolute w-16 sm:w-36 lg:w-60 -top-6 -left-8 lg:-top-20 lg:-left-16 xl:-top-36 xl:-left-28 -rotate-[20deg] z-20"
      />
      {/* detail kiri bawah */}
      <div className="w-[60%] md:w-[300px] lg:w-[45%] lg:h-60 2xl:h-[356px] 2xl:w-[564px] absolute -bottom-12 lg:-bottom-24 xl:-bottom-48 left-1/2 lg:-left-20 xl:-left-32 -translate-x-1/2 lg:translate-x-0 flex flex-col justify-center py-2 px-3 lg:px-16 xl:px-28 z-20 bg-[#E5E5E5] lg:bg-[url(/mainevent/lokasi-paper.svg)] bg-contain bg-no-repeat font-inter border-4 border-[#FF3234] drop-shadow-[0_0_12px_rgba(255,50,52,.25)] lg:border-transparent lg:bg-transparent lg:drop-shadow-none">
        <h4 className="text-[10px] lg:text-xl 2xl:text-3xl">
          Sabtu, 7 Januari 2023
        </h4>
        <h3 className="text-[14px] lg:text-3xl 2xl:text-5xl font-bold lg:my-2 2xl:mt-4 2xl:mb-6">
          Nama Lokasi
        </h3>
        <h4 className="text-[12px] lg:text-2xl 2xl:text-4xl">
          Detail alamat lorem ipsum dolor
        </h4>
      </div>
      {/* foto + bg orange */}
      <div className="absolute w-2/3 h-1/2 bg-[#FB5507] -bottom-4 -left-4 lg:w-[32%] lg:aspect-square lg:bg-blastoutmustard lg:-bottom-[20%] lg:-right-[14%]" />
      <Image
        src="/mainevent/lokasi-foto.png"
        alt="foto"
        height={1000}
        width={1000}
        className="absolute w-2/3 sm:w-1/3 -top-4 -right-4 lg:w-[48%] lg:top-[48%] lg:-translate-y-1/2 lg:-right-36 border-4 lg:border-[16px] z-0"
      />
    </>
  );
}
