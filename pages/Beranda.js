import React from "react";
import Head from "next/head";
import Header from "../components/Beranda/Header";
import Sekilas from "../components/Beranda/Sekilas";
import Acara from "../components/Beranda/Acara";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Beranda . Blastout 2023</title>
      </Head>
      <Header />
      <Sekilas />
      <Acara />
    </>
  );
};
export default Beranda;
