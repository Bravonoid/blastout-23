import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

const smk = new Icon({
  iconUrl: "/mainevent/lokasi-blastout.png",
  iconSize: [100, 100],
});

export default function Map() {
  const center = [-7.689032498489004, 110.63463513292615];

  return (
    <>
      <MapContainer
        center={center}
        zoom={16.5}
        className="relative z-10 border-4 lg:border-[8px] 2xl:border-[16px] border-blastoutmustard"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          className=""
        />
        <Marker key={1} position={center} icon={smk} />
      </MapContainer>
    </>
  );
}
