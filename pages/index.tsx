import Head from "next/head";
import Header from "../components/beranda/Header";
import Navbar from "../components/Navbar";
import Sekilas from "../components/beranda/Sekilas1";
import Acara from "../components/beranda/Acara";
import Testimoni from "../components/beranda/Testimoni";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
import Timeline from "../components/beranda/Timeline";
export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda | Blastout 2023</title>
        <meta
          name="description"
          content="BlastOut merupakan program kerja dari Balairung Klass, organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan penampilan hiburan."
        />
        <meta
          property="og:URL"
          content="https://blastout.balairungklass.com/"
        />
        <meta property="og:title" content="Beranda | Blastout 2023" />
        <meta
          property="og:description"
          content="BlastOut merupakan program kerja dari Balairung Klass, organisasi mahasiswa daerah dengan anggota mahasiswa UGM yang berdomisili di Klaten. BlastOut terdiri dari rangkaian acara briefing ke SMA di Kab. Klaten, tryout beserta pembahasan soal, talkshow, expo kampus, dan penampilan hiburan."
        />
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
