import React from "react";
import Head from "next/head";
import Penjelasan from "../components/Tentang/Penjelasan";
import Tema from "../components/Tentang/Tema";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Tentang . Blastout 2023</title>
      </Head>
      <Penjelasan />
      <Tema />
    </>
  );
};
export default Beranda;
