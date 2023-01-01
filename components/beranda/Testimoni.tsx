import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";

import "swiper/css";
import Image from "next/image";

type Data = {
  nama: string;
  fakultas: string;
  blastout: string;
  testimoni: string;
  image: string;
  scroll?: boolean;
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
      scroll: true,
    },
    {
      nama: "Naufal Majid N",
      fakultas: "Teknik Geodesi 2022",
      blastout: "Blastout 2022",
      testimoni:
        "Menurut saya Blastout 2022 merupakan acara yang sangat menarik. Try out yang diadakan cocok banget buat jadi persiapan ujian masuk ptn. Try out tersebut bisa dijadikan sebagai latihan untuk menguji sejauh mana tingkat kemampuan dan tingkat pemahaman materi masing-masing. Selain try out tersebut ada juga beberapa rangkaian acara asik lainnya, yaitu talkshow dan lomba. Intinya secara keseluruhan acaranya asik banget.",
      image: "/beranda/testimoni/naufal.png",
    },
    // {
    //   nama: "Fathya Rizkyana K",
    //   fakultas: "Kesehatan Gigi 2021",
    //   blastout: "Blastout 2021",
    //   testimoni:
    //     "seruu dapet pengalaman baru, bisa latihan soal model terbaru. terus ada talkshow jugaa yg menambah motivasi hidup :) gstarnya menambah semangat dan jadi bisa refreshing setelah otak bekerja keras ngutak-atik soal.",
    //   image: "/beranda/testimoni/hidayat.png",
    // },
    {
      nama: "Rangga Mahardhika",
      fakultas: "Teknik Pertanian 2022",
      blastout: "Blastout 2022",
      testimoni:
        "Blastout tahun lalu seru dan bermanfaat banget. Meskipun online, rangkaian acaranya tetep bagusss. Ada tryout yang soalnya bener² bermanfaat dan talkshownya juga bermanfaat bangett.",
      image: "/beranda/testimoni/rangga.png",
    },
    {
      nama: "Hidayat Syaifudin",
      fakultas: "Teknik Sipil 2022",
      blastout: "Blastout 2020",
      testimoni:
        "tryout blastout22 membantu, yang bikin seru ada perankingan hasil peserta. Pembahasan soal mudah dipahami dan ada penjelasan video juga biar makin paham. blastout mantabb",
      image: "/beranda/testimoni/hidayat.png",
    },
    {
      nama: "Rosyidatun Nur F",
      fakultas: "FKH 2021",
      blastout: "Blastout 2020 & 2021",
      testimoni:
        "pernah cobain yang offline sama online dan itu seru bangettt. Apalagi taun ini bakal offline kann, pasti bakal lebih seruu",
      image: "/beranda/testimoni/rosyidatun.png",
    },
    {
      nama: "Salva Ditya Alvira",
      fakultas: "Kedokteran Gigi 2022",
      blastout: "Blastout 2022",
      testimoni:
        "TO blastout kemarin cukup membantu buat nyiapin utbk, karena bisa nambah perbendaharaan soal-soal juga, selain itu kita dikasih urutan ranking hasil TO nya jadi sekalian bisa buat patokan sejauh mana kita paham tentang materi utbk kemarin",
      image: "/beranda/testimoni/salva.png",
    },
  ];

  return (
    <section className="xl:h-screen bg-[#0F0B36] text-white font-inter pt-12 flex items-start xl:items-center">
      <div className="container xl:max-w-8xl mx-auto xl:h-full flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mt-12 mb-12">
          <h1
            style={{
              textShadow:
                "4px 0px 8px rgba(185, 35, 69, 0.5), -4px 0px 8px rgba(199, 126, 19, 0.4)",
            }}
            className="text-2xl xl:text-5xl font-bold mb-2"
          >
            TESTIMONI
          </h1>
          <Image
            src="/beranda/testimoni/union.svg"
            width={345}
            height={13}
            alt=""
            className="h-[5px] xl:h-2.5"
          />
        </div>

        <div className="flex justify-center items-center w-full px-2 xl:px-0 xl:w-5/6 h-full">
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
        <div className="relative mx-10 mt-6 xl:hidden mb-12">
          <Image
            src="/beranda/testimoni/quote.svg"
            width={25}
            height={22}
            alt=""
          />
          <h2
            // className={`font-medium text-justify text-xl before:content-['“'] before:-scale-x-100 before:absolute before:-mt-2 before:-ml-5 after:content-['“'] after:absolute after:-right-5 after:-bottom-5 after:text-3xl after:font-bold before:text-3xl before:font-bold mt-6`}
            className={`text-sm`}
          >
            {data[swiperIndex].testimoni}
          </h2>
          <div className="w-full">
            <Image
              src="/beranda/testimoni/quote.svg"
              width={25}
              height={22}
              alt=""
              className="-rotate-180 ml-auto"
            />
          </div>
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
          className={`${
            position == "left" ? "rotate-180" : ""
          } h-8 sm:h-full cursor-pointer`}
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
  scroll,
}: CardCarouselProps) => {
  return (
    <div className="flex w-full h-5/6 justify-center items-center">
      <div className="flex flex-col sm:w-full xl:w-5/12 h-full justify-center items-center">
        {/* <div className="bg-gray-500 aspect-square">INI FOTO GAN</div> */}
        <Image
          src={image}
          width={303}
          height={438}
          className="aspect-square w-3/5 xl:w-full object-contain"
          quality={100}
          alt=""
        />
        <div className="text-center mt-2 xl:mt-4">
          <h1 className="font-bold text-lg sm:text-2xl xl:text-4xl">{nama}</h1>
          <p className="font-medium text-xs sm:text-lg xl:text-2xl">
            {fakultas}
          </p>
          <p className="font-medium text-xs sm:text-lg xl:text-2xl">
            {blastout}
          </p>
        </div>
      </div>
      <div
        className={`hidden xl:flex justify-center h-full items-center w-7/12 py-12 ${
          scroll ? "pr-4" : "pr-12"
        } `}
      >
        <div className="relative h-3/4 flex items-center justify-center">
          <div className={`flex justify-center flex-col h-full text-3xl`}>
            <Image
              src="/beranda/testimoni/quote.svg"
              width={80}
              height={70}
              alt=""
            />
            <p
              className={`h-auto ${
                scroll ? "overflow-y-scroll pr-3" : ""
              } text-justify`}
            >
              {testimoni}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
