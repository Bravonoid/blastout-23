import Head from "next/head";
import Image from "next/image";
import Header from "../components/Beranda/Header";
import Sekilas from "../components/Beranda/Sekilas";
import Penjelasan from "../components/Tentang/Penjelasan";
import Tema from "../components/Tentang/Tema";
import Penjelasan_Tryout from "../components/Tryout/Penjelasan";

export default function Home() {
  return (
    <>
      <Header />
      <Sekilas />
      <Penjelasan />
      <Tema />
      <Penjelasan_Tryout />
    </>
  );
}
