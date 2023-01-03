import Hero from "../components/MainEvent/Hero";
import Lokasi2 from "../components/MainEvent/Lokasi2";
import WhatsInside from "../components/MainEvent/WhatsInside";
import Navbar from "../components/Navbar";
import TombolDaftar from "../components/MainEvent/TombolDaftar";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import Head from "next/head";
import Timeline from "../components/Tryout/Timeline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MainEvent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Main Event | Blastout 2023</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
        <meta
          name="description"
          content="BlastOut merupakan program kerja dari Balairung Klass, organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan penampilan hiburan."
        />
        <meta
          property="og:URL"
          content="https://blastout.balairungklass.com/main-event"
        />
        <meta property="og:title" content="Main Event | Blastout 2023" />
        <meta
          property="og:description"
          content="BlastOut merupakan program kerja dari Balairung Klass, organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan penampilan hiburan."
        />
      </Head>
      <Navbar />
      <div className="bg-blastoutdarkpurple overflow-hidden">
        <Hero />
        {/* <Timeline /> */}
        <WhatsInside />
        <ComingSoon title={"GUEST STAR"} bgColor="#0F0B36" />
        <Timeline pageNumber={3} />
        <Lokasi2 tryout={false} />
        <TombolDaftar />
      </div>
      <Footer isButtonExist={true} />
    </>
  );
}

export default MainEvent;
