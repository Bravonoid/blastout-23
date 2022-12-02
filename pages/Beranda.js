import React from "react";
import Head from "next/head";  
import Header from "../components/Beranda/Header";
import Sekilas from "../components/Beranda/Sekilas";
const Beranda = () => {
    return(
        <>
            <Head>
                <title>Beranda . Blastout 2023</title>
            </Head>
            <Header />
            <Sekilas />
        </>
    )
}
export default Beranda