// import Timeline from "../components/Beranda/Timeline";
import Hero from "../components/mainevent/Hero";
import Lokasi from "../components/mainevent/Lokasi";
import WhatsInside from "../components/mainevent/WhatsInside";

function mainEvent() {
  return (
    <div className="bg-blastoutdarkpurple overflow-hidden">
      <Hero />
      {/* <Timeline /> */}
      <WhatsInside />
      <Lokasi />
    </div>
  );
}

export default mainEvent;
