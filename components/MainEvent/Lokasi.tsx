import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Image from "next/image";
import { useMemo } from "react";

function Lokasi() {
  return (
    <div className="w-screen h-full flex flex-col items-center justify-center mt-20 mb-40 md:mb-52 lg:mt-32 lg:mb-64 xl:mb-80 relative">
      <h2 className="font-bold text-blastoutwhite text-glow text-2xl lg:text-4xl xl:text-5xl mb-8 lg:mb-16 uppercase font-inter">
        Lokasi
      </h2>
      <div className="relative 2xl:min-h-[20vh] mb-96">
        <Map />
      </div>
      <Image
        src="/mainevent/lokasi-pins.svg"
        alt="pins"
        height={1000}
        width={1000}
        className="hidden lg:inline-block absolute w-[90%] top-[4%] left-1/2 -translate-x-1/2  z-30 pointer-events-none"
      />
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
      // <div className="w-[240px] h-[400px] sm:w-[80vw] sm:h-[50vh] lg:w-[80vw] lg:h-[50vh] absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-neutral-900 border-4 lg:border-[16px] border-blastoutmustard">
      <MapLayoutWrapper>
        <MapLayout>
          <div className="h-full bg-neutral-900/90 grid place-content-center border-4 lg:border-[8px] 2xl:border-[16px] border-blastoutmustard">
            <span className="font-bold text-4xl text-blastoutmustard">
              Loading...
            </span>
          </div>
        </MapLayout>
      </MapLayoutWrapper>
      // </div>
    );
  }

  return (
    // <div className="w-[240px] h-[400px] sm:w-[80vw] sm:h-[50vh] lg:w-[70vw] lg:h-[50vh] xl:h-[55vh] 2xl:h-[70vh] absolute top-0 left-1/2 -translate-x-1/2 z-10">
    <MapLayoutWrapper>
      <MapLayout>
        <GoogleMap
          zoom={18}
          center={center}
          mapContainerClassName="h-full w-full relative z-10 border-4 lg:border-[8px] 2xl:border-[16px] border-blastoutmustard"
          options={defaultMapOptions}
        >
          <MarkerF position={center} />
        </GoogleMap>
      </MapLayout>
    </MapLayoutWrapper>
    // </div>
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
        className="absolute w-16 sm:w-36 lg:w-40 xl:w-48 2xl:w-56 -top-6 -left-8 lg:-top-20 lg:-left-16 -rotate-[20deg] z-20"
      />
      {/* detail kiri bawah */}
      <div className="w-[60%] md:w-[300px] lg:w-[48%] xl:w-[40%] lg:h-60 2xl:h-80 absolute -bottom-12 lg:-bottom-24 xl:-bottom-36 left-1/2 lg:-left-32 xl:-left-36 2xl:-left-44 -translate-x-1/2 lg:translate-x-0 flex flex-col justify-center py-2 px-3 lg:px-16 lg:-py-4 z-20 bg-[#E5E5E5] lg:bg-[url(/mainevent/lokasi-paper.svg)] bg-contain bg-no-repeat font-inter border-4 border-[#FF3234] drop-shadow-[0_0_12px_rgba(255,50,52,.25)] lg:border-transparent lg:bg-transparent lg:drop-shadow-none">
        <h4 className="text-[10px] lg:text-lg 2xl:text-xl">
          Sabtu, 4 Februari 2023
        </h4>
        <h3 className="text-[14px] lg:text-2xl 2xl:text-3xl font-bold sm:mb-1 lg:my-2">
          SMK Negeri 4 Klaten
        </h3>
      </div>
      {/* foto + bg orange */}
      <div className="absolute w-2/3 h-1/2 bg-[#FB5507] -bottom-4 -left-4 lg:w-[32%] lg:aspect-square lg:bg-blastoutmustard lg:-bottom-16 lg:left-auto lg:-right-28 xl:-right-36 2xl:-right-48" />
      <Image
        src="/mainevent/lokasi-foto.png"
        alt="foto"
        height={1000}
        width={1000}
        className="absolute w-2/3 sm:w-1/3 -top-4 -right-4 lg:w-auto lg:h-[55vh] xl:h-[60vh] 2xl:h-[75vh] lg:top-[50%] lg:-translate-y-1/2 lg:-right-24 xl:-right-32 2xl:-right-44   border-4 lg:border-[8px] 2xl:border-[16px] z-0"
      />
    </>
  );
}

function MapLayoutWrapper({ children }: { children: any }) {
  return (
    <div className="w-[240px] h-[400px] sm:w-[80vw] sm:h-[50vh] lg:w-[70vw] lg:h-[50vh] xl:h-[55vh] 2xl:h-[70vh] absolute top-0 left-1/2 -translate-x-1/2 z-10">
      {children}
    </div>
  );
}
