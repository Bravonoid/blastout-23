import React from "react";
import Head from "next/head";
import Header from "../components/Beranda/Header";
import Navbar from "../components/Navbar";
import Sekilas from "../components/Beranda/Sekilas";
import Acara from "../components/Beranda/Acara";
import Link from "next/link";
import Timeline from "../components/Beranda/Timeline";
import Testimoni from "../components/Beranda/Testimoni";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <div className="bg-blastoutdarkpurple">
      <Head>
        <title>Beranda . Blastout 2023</title>
      </Head>
      <Navbar />
      <Header />
      <Sekilas />
      <Acara />
      <Timeline />
      <Testimoni />
      <Footer />
    </div>
  );
};
export default Beranda;
