import React from "react";
import Head from "next/head";
import Penjelasan from "../components/Tryout/Penjelasan";
import Timeline from "../components/Tryout/Timeline";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Tryout . Blastout 2023</title>
      </Head>
      <Penjelasan />
      <Timeline />
    </>
  );
};
export default Beranda;
