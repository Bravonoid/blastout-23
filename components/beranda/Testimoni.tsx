import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import Image from "next/image";

type Data = {
  nama: string;
  fakultas: string;
  blastout: string;
  testimoni: string;
  image: string;
};

function Testimoni() {
  const swiperRef = useRef<SwiperClass>();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);

  const data: Data[] = [
    {
      nama: "Siwi Yuwandaru",
      fakultas: "Gizi Kesehatan 2021",
      blastout: "Blastout 2020",
      testimoni:
        "Blastout seru banget!! Tryoutnya mengasah kemampuan dan bisa dapet gambaran ujian masuk ptn. Rangkaian acaranya beragam banget bikin memorable!!",
      image: "/beranda/testimoni/siwi.png",
    },
    {
      nama: "Dinda",
      fakultas: "Fisika 2020",
      blastout: "Blastout 2019",
      testimoni:
        "Blassout jadi acara try out yang udah aku tunggu se masa SMA, kenapa sangat tertarik dengan acara ini, yang pertama karena dari penyelenggara nya adalah mahasiswa dari Universitas Gadjah Mada, dimana menjadi universitas impian banyak orang termasuk aku. Yang kedua, dilihat dari rangkaian acara bener bener real dengan UTBK di tahunku dulu, dari proses pendaftaran, pengumuman lokasi ujian, tata cara berpakaian saat ujian sampai pengumuman bener bener reall dengan pelaksanaan utbk. Yang ketiga guestar nya juga keren, feby putri dan mas fathur wkwkwkw.Kalo dari aku sih rating nya 100000000/10 buat acara blassout.",
      image: "/beranda/testimoni/dinda.png",
    },
    {
      nama: "Naufal Majid Nursalim",
      fakultas: "Teknik Geodesi 2022",
      blastout: "Blastout 2022",
      testimoni:
        "Menurut saya Blastout 2022 merupakan acara yang sangat menarik. Try out yang diadakan cocok banget buat jadi persiapan ujian masuk ptn. Try out tersebut bisa dijadikan sebagai latihan untuk menguji sejauh mana tingkat kemampuan dan tingkat pemahaman materi masing-masing. Selain try out tersebut ada juga beberapa rangkaian acara asik lainnya, yaitu talkshow dan lomba. Intinya secara keseluruhan acaranya asik banget.",
      image: "/beranda/testimoni/naufal.png",
    },
    {
      nama: "Hidayat Syaifudin Ma'arif",
      fakultas: "Teknik Sipil 2022",
      blastout: "Blastout 2020",
      testimoni:
        "tryout blastout22 membantu, yang bikin seru ada perankingan hasil peserta. Pembahasan soal mudah dipahami dan ada penjelasan video juga biar makin paham. blastout mantabb",
      image: "/beranda/testimoni/hidayat.png",
    },
    {
      nama: "Rosyidatun Nur Fa'izah",
      fakultas: "FKH 2021",
      blastout: "Blastout 2020 & 2021",
      testimoni:
        "pernah cobain yang offline sama online dan itu seru bangettt. Apalagi taun ini bakal offline kann, pasti bakal lebih seruu",
      image: "",
    },
    {
      nama: "Salva Ditya Alvira",
      fakultas: "Kedokteran Gigi 2022",
      blastout: "Blastout 2022",
      testimoni:
        "TO blastout kemarin cukup membantu buat nyiapin utbk, karena bisa nambah perbendaharaan soal-soal juga, selain itu kita dikasih urutan ranking hasil TO nya jadi sekalian bisa buat patokan sejauh mana kita paham tentang materi utbk kemarin",
      image: "/beranda/testimoni/salva.png",
    },
    {
      nama: "Rangga Mahardhika Indarta",
      fakultas: "Teknik Pertanian 2022",
      blastout: "Blastout 2022",
      testimoni:
        "Blastout tahun lalu seru dan bermanfaat banget. Meskipun online, rangkaian acaranya tetep bagusss. Ada tryout yang soalnya bener² bermanfaat dan talkshownya juga bermanfaat bangett.",
      image: "",
    },
  ];

  return (
    <section className="sm:h-screen bg-[#0F0B36] text-white font-inter pt-12 flex items-start sm:items-center">
      <div className="container sm:max-w-8xl mx-auto sm:h-full flex flex-col items-center">
        <h1
          style={{
            textShadow:
              "4px 0px 8px rgba(185, 35, 69, 0.5), -4px 0px 8px rgba(199, 126, 19, 0.4)",
          }}
          className="text-5xl font-bold mb-12 mt-12"
        >
          TESTIMONI
        </h1>
        <div className="flex justify-center items-center w-full px-2 sm:px-0 sm:w-5/6 h-full">
          <Button
            onClick={() => swiperRef.current?.slidePrev()}
            image="/beranda/testimoni/arrow.svg"
            position="left"
          />
          <Swiper
            onBeforeInit={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            grabCursor={true}
            onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="w-full h-full"
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <CardCarousel {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            onClick={() => swiperRef.current?.slideNext()}
            image="/beranda/testimoni/arrow.svg"
            position="right"
          />
        </div>
        <div className="relative mx-10 sm:hidden mb-12">
          <h2
            className={`font-medium text-justify text-xl before:content-['“'] before:-scale-x-100 before:absolute before:-mt-2 before:-ml-5 after:content-['“'] after:absolute after:-right-5 after:-bottom-5 after:text-3xl after:font-bold before:text-3xl before:font-bold mt-6`}
          >
            {data[swiperIndex].testimoni}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Testimoni;

type ButtonProps = {
  onClick: () => void;
  image: string;
  position: "left" | "right";
};

const Button = ({ onClick, image, position }: ButtonProps) => {
  const [isHover, setHover] = useState<boolean>(false);
  useEffect(() => {
    console.log(isHover);
  }, [isHover]);

  return (
    <div
      className="transition-all"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {isHover ? (
        <Image
          src="/beranda/testimoni/arrow-glow.svg"
          alt=""
          width={45}
          height={60}
          onClick={onClick}
          className={`${
            position == "left" ? "rotate-180" : ""
          } scale-150 cursor-pointer`}
        />
      ) : (
        <Image
          src={image}
          alt=""
          width={45}
          height={60}
          onClick={onClick}
          className={`${position == "left" ? "rotate-180" : ""} cursor-pointer`}
        />
      )}
    </div>
  );
};

type CardCarouselProps = {} & Data;

const CardCarousel = ({
  nama,
  blastout,
  fakultas,
  testimoni,
  image,
}: CardCarouselProps) => {
  return (
    <div className="flex w-full h-5/6 justify-center items-center">
      <div className="flex flex-col w-full sm:w-4/12 h-full sm:pl-12">
        {/* <div className="bg-gray-500 aspect-square">INI FOTO GAN</div> */}
        <Image
          src={image}
          width={303}
          height={438}
          className="aspect-square h-full object-contain"
          alt=""
        />
        <div className="mt-auto text-center">
          <h1 className="font-bold text-2xl sm:text-4xl">{nama}</h1>
          <p className="font-medium text-lg sm:text-2xl">{fakultas}</p>
          <p className="font-medium text-lg sm:text-2xl">{blastout}</p>
        </div>
      </div>
      <div className="hidden sm:flex justify-center h-full items-center w-8/12 p-12">
        <div className="relative h-3/4 flex items-center justify-center">
          <div
            className={`text-justify flex justify-center flex-col h-full text-3xl`}
          >
            <Image
              src="/beranda/testimoni/quote.svg"
              width={80}
              height={70}
              alt=""
            />
            <p className="h-auto overflow-y-visible">{testimoni}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
