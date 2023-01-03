import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Penjelasan from "../components/tentang/Penjelasan";
import Tema from "../components/tentang/Tema";
import Sejarah from "../components/tentang/Sejarah";
import Footer from "../components/Footer";
const Beranda = () => {
  return (
    <>
      <Head>
        <title>Tentang | Blastout 2023</title>
        <meta
          name="description"
          content="BlastOut merupakan program kerja dari Balairung Klass, organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan penampilan hiburan."
        />
        <meta
          property="og:URL"
          content="https://blastout.balairungklass.com/tentang"
        />
        <meta property="og:title" content="Tentang | Blastout 2023" />
        <meta
          property="og:description"
          content="BlastOut merupakan program kerja dari Balairung Klass, organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan penampilan hiburan."
        />
      </Head>
      <Navbar />
      <Penjelasan />
      <Tema />
      <Sejarah />
      <Footer />
    </>
  );
};
export default Beranda;
