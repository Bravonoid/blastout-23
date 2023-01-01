// import Timeline from "../components/Beranda/Timeline";
import Hero from "../components/MainEvent/Hero";
import Lokasi from "../components/MainEvent/Lokasi";
import WhatsInside from "../components/MainEvent/WhatsInside";
import Navbar from "../components/Navbar";
import TombolDaftar from "../components/MainEvent/TombolDaftar";
import Footer from "../components/Footer";

function mainEvent() {
  return (
    <div className="bg-blastoutdarkpurple overflow-hidden">
      <Navbar />
      <Hero />
      {/* <Timeline /> */}
      <WhatsInside />
      <Lokasi />
      <TombolDaftar />
      <Footer />
    </div>
  );
}

export default mainEvent;
