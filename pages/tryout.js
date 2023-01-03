import Head from "next/head";
import Navbar from "../components/Navbar";
import Penjelasan from "../components/Tryout/Penjelasan";
import Timeline from "../components/Tryout/Timeline";
import Sistem from "../components/Tryout/Sistem";
import Lokasi from "../components/mainevent/Lokasi";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";
import Lokasi2 from "../components/mainevent/Lokasi2";
import TombolDaftar from "../components/MainEvent/TombolDaftar";

const Beranda = () => {
  return (
    <div className="bg-blastoutdarkpurple">
      <Head>
        <title>Tryout | Blastout 2023</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
        <meta
          name="description"
          content="Try Out (TO) yang diadakan oleh Balairung Klass UGM merupakan serangkaian kegiatan pelatihan ujian masuk perguruan tinggi yang ditujukan kepada siswa-siswi SMA/SMK Sederajat di seluruh Kabupaten Klaten. Kegiatan ini bertujuan agar siswa-siswi SMA/SMK Sederajat yang ingin melanjutkan pendidikan ke perguruan tinggi memiliki bekal materi dan sistem ujian yang akan mereka hadapi."
        />
        <meta
          property="og:URL"
          content="https://blastout.balairungklass.com/tryout"
        />
        <meta property="og:title" content="Tryout | Blastout 2023" />
        <meta
          property="og:description"
          content="Try Out (TO) yang diadakan oleh Balairung Klass UGM merupakan serangkaian kegiatan pelatihan ujian masuk perguruan tinggi yang ditujukan kepada siswa-siswi SMA/SMK Sederajat di seluruh Kabupaten Klaten. Kegiatan ini bertujuan agar siswa-siswi SMA/SMK Sederajat yang ingin melanjutkan pendidikan ke perguruan tinggi memiliki bekal materi dan sistem ujian yang akan mereka hadapi."
        />
      </Head>
      <Navbar />
      <Penjelasan />
      <ComingSoon title="SISTEM" bgColor="#0F0B36" />
      {/* <Sistem /> */}
      <Timeline pageNumber={2} />
      <Lokasi2 tryout />
      <TombolDaftar />
      <Footer isButtonExist={true} />
    </div>
  );
};
export default Beranda;
