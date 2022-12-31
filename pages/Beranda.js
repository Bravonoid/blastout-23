import React from "react";
import Head from "next/head";
import Header from "../components/Beranda/Header";
import Sekilas from "../components/Beranda/Sekilas";
import Acara from "../components/Beranda/Acara";
import Link from "next/link";
import Testimoni from "../components/beranda/Testimoni";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Beranda . Blastout 2023</title>
      </Head>
      <Header />
      <Sekilas />
      <Acara />
      <Testimoni />
    </>
  );
};
export default Beranda;
