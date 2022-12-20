import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import TombolDaftar from "../components/MainEvent/TombolDaftar";
const MainEvent = () => {
  return (
    <>
      <Head>
        <title>MainEvent . Blastout 2023</title>
      </Head>
      <Navbar/>
      <TombolDaftar />
    </>
  );
};
export default MainEvent;
