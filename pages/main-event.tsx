import Hero from "../components/MainEvent/Hero";
import Lokasi2 from "../components/MainEvent/Lokasi2";
import WhatsInside from "../components/MainEvent/WhatsInside";
import Navbar from "../components/Navbar";
import TombolDaftar from "../components/MainEvent/TombolDaftar";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import Head from "next/head";
import Timeline from "../components/Tryout/Timeline";

function mainEvent() {
  return (
    <>
      <Head>
        <title>Main Event | Blastout 2023</title>
      </Head>
      <Navbar />
      <div className="bg-blastoutdarkpurple overflow-hidden">
        <Hero />
        {/* <Timeline /> */}
        <WhatsInside />
        <ComingSoon title={"GUEST STAR"} bgColor="#0F0B36" />
        <Timeline pageNumber={3} />
        <Lokasi2 />
        <TombolDaftar />
      </div>
      <Footer />
    </>
  );
}

export default mainEvent;
