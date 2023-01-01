import Head from "next/head";
import Header from "../components/Beranda/Header";
import Navbar from "../components/Navbar";
import Sekilas from "../components/Beranda/Sekilas1";
import Acara from "../components/Beranda/Acara";
import Testimoni from "../components/Beranda/Testimoni";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
import Timeline from "../components/Beranda/Timeline";
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
      <Timeline />
      <Testimoni />
      <ComingSoon title={"MEDIA PARTNER | SPONSOR"} bgColor="#0F0B36" />
      <Footer />
    </>
  );
}
