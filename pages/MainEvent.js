import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/mainevent/Hero";
import Lokasi2 from "../components/mainevent/Lokasi2";
import WhatsInside from "../components/mainevent/WhatsInside";
import TombolDaftar from "../components/MainEvent/TombolDaftar";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

const MainEvent = () => {
  return (
    <div className="bg-blastoutdarkpurple">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
        <title>MainEvent . Blastout 2023</title>
      </Head>
      <Navbar />
      <Hero />
      <WhatsInside />
      <Lokasi2 />
      <TombolDaftar />
      <ComingSoon />
      <Footer />
    </div>
  );
};
export default MainEvent;
