import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const smk = new Icon({
  iconUrl: "/mainevent/lokasi-pin.svg",
  iconSize: [100, 100],
});

export default function Map({ tryout }) {
  const center = [-7.689032498489004, 110.63463513292615];
  const center2 = [-7.704827264647206, 110.59487347116398];

  return (
    <>
      <MapContainer
        center={tryout ? center : center2}
        zoom={16.5}
        className="w-full h-full relative z-10 border-4 lg:border-[8px] 2xl:border-[16px] border-blastoutmustard"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          className=""
        />
        <Marker key={1} position={tryout ? center : center2} icon={smk}>
          <Popup>
            <span className="text-2xl">
              {tryout ? "SMK Negeri 4 Klaten" : "Al Hakim Convention Hall"}
            </span>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
