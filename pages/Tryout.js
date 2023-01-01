import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Penjelasan from "../components/Tryout/Penjelasan";
import Timeline from "../components/Tryout/Timeline";
import Sistem from "../components/Tryout/Sistem";
import Footer from "../components/Footer";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Tryout | Blastout 2023</title>
      </Head>
      <Navbar />
      <Penjelasan />
      <Timeline />
      <Sistem />
      <Footer />
    </>
  );
};
export default Beranda;
