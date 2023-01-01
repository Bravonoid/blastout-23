import Head from "next/head";
import Navbar from "../components/Navbar";
import Penjelasan from "../components/Tryout/Penjelasan";
import Timeline from "../components/Tryout/Timeline";
import Sistem from "../components/Tryout/Sistem";
import Lokasi from "../components/mainevent/Lokasi";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import Lokasi2 from "../components/mainevent/Lokasi2";

const Beranda = () => {
  return (
    <div className="bg-blastoutdarkpurple">
      <Head>
        <title>Tryout | Blastout 2023</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>
      <Navbar />
      <Penjelasan />
      {/* <ComingSoon title="SISTEM" bgColor="#0F0B36" /> */}
      <Sistem />
      <Timeline pageNumber={2} />
      <Lokasi2 />
      <Footer />
    </div>
  );
};
export default Beranda;
