import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Poppins, Montserrat } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <Component {...pageProps} />;
    </main>
  );
}
