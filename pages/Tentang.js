import React from "react";
import Head from "next/head";
import Penjelasan from "../components/Tentang/Penjelasan";
import Tema from "../components/Tentang/Tema";
import Sejarah from "../components/tentang/Sejarah";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Tentang . Blastout 2023</title>
      </Head>
      <Penjelasan />
      <Tema />
      <Sejarah />
    </>
  );
};
export default Beranda;
