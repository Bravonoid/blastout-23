import React from "react";
import Head from "next/head";
import Penjelasan from "../components/Tryout/Penjelasan";
import Timeline from "../components/Tryout/Timeline";
import Sistem from "../components/Tryout/Sistem";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Tryout . Blastout 2023</title>
      </Head>
      <Penjelasan />
      <Timeline />
      <Sistem />
    </>
  );
};
export default Beranda;
