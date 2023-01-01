import Head from "next/head";
import Header from "../components/Beranda/Header";
import Navbar from "../components/Navbar";
import Sekilas from "../components/Beranda/Sekilas";
import Acara from "../components/Beranda/Acara";
import Testimoni from "../components/Beranda/Testimoni";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda | Blastout 2023</title>
      </Head>
      <Navbar />
      <Header />
      <Sekilas />
      <Acara />
      <Testimoni />
      <Footer />
    </>
  );
}
