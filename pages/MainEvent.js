import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import TombolDaftar from "../components/MainEvent/TombolDaftar";
import Footer from "../components/Footer";
const MainEvent = () => {
  return (
    <>
      <Head>
        <title>MainEvent . Blastout 2023</title>
      </Head>
      <Navbar />
      <TombolDaftar />
      <Footer/>
    </>
  );
};
export default MainEvent;
