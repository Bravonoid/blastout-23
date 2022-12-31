import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Penjelasan from "../components/Tentang/Penjelasan";
import Tema from "../components/Tentang/Tema";
import Sejarah from "../components/tentang/Sejarah";
import Footer from "../components/Footer";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Tentang . Blastout 2023</title>
      </Head>
      <Navbar/>
      <Penjelasan />
      <Tema />
      <Sejarah />
      <Footer/>
    </>
  );
};
export default Beranda;
