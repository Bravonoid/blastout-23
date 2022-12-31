import React from "react";
import Head from "next/head";
import Header from "../components/Beranda/Header";
import Sekilas from "../components/Beranda/Sekilas";
import Acara from "../components/Beranda/Acara";
import Link from "next/link";
import Timeline from "../components/Beranda/Timeline";
const Beranda = () => {
  return (
    <div className="bg-blastoutdarkpurple">
      <Head>
        <title>Beranda . Blastout 2023</title>
      </Head>
      <Header />
      <Sekilas />
      <Acara />
      <Timeline />
    </div>
  );
};
export default Beranda;
