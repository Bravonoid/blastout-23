import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import TombolDaftar from "../components/MainEvent/TombolDaftar";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
const MainEvent = () => {
  return (
    <>
      <Head>
        <title>MainEvent . Blastout 2023</title>
      </Head>
      <Navbar />
      <TombolDaftar/>
      <Footer />
      <ComingSoon />
    </>
  );
};
export default MainEvent;
