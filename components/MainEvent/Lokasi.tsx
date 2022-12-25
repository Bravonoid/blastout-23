import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Image from "next/image";
import { useMemo } from "react";

function Lokasi() {
  return (
    <div className="w-screen h-screen flex flex-col items-center mt-96 mb-96 relative">
      <h2 className="font-bold text-blastoutwhite text-glow text-6xl mb-28 uppercase mt-96">
        Lokasi
      </h2>
      <div className="relative h-full w-full">
        <Map />
        <Image
          src="/mainevent/lokasi-pins.svg"
          alt="pins"
          height={1000}
          width={1000}
          className="absolute w-[1455px] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
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
      <div className="w-[1228px] h-[536px] absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-neutral-900 border-[16px] border-blastoutmustard">
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
    <div className="w-[1228px] h-[536px] absolute top-0 left-1/2 -translate-x-1/2 z-10">
      <MapLayout>
        <GoogleMap
          zoom={18}
          center={center}
          mapContainerClassName="h-full w-full relative z-10 border-[16px] border-blastoutmustard"
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
        className="absolute w-72 -top-36 -left-28 -rotate-[20deg] z-20"
      />
      {/* detail kiri bawah */}
      <div className="h-[356px] w-[564px] absolute -bottom-48 -left-32 flex flex-col justify-center px-28 z-20 bg-[url(/mainevent/lokasi-paper.svg)] bg-contain bg-no-repeat font-inter">
        <h4 className="text-3xl">Sabtu, 7 Januari 2023</h4>
        <h3 className="text-5xl font-bold mt-4 mb-6">Nama Lokasi</h3>
        <h4 className="text-4xl">Detail alamat lorem ipsum dolor</h4>
      </div>
      {/* foto + bg orange */}
      <div className="absolute w-[32%] aspect-square bg-blastoutmustard -bottom-[20%] -right-[14%]" />
      <Image
        src="/mainevent/lokasi-foto.png"
        alt="foto"
        height={1000}
        width={1000}
        className="absolute w-[48%] top-[48%] -translate-y-1/2 -right-36 border-[16px]  z-0"
      />
    </>
  );
}
