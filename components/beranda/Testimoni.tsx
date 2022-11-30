import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css";

function Testimoni() {
  const swiperRef = useRef<SwiperClass>();
  const [swiperIndex, setSwiperIndex] = useState<number>(0);

  const data = [
    {
      name: "Rizky",
      title: "CEO",
      testimony:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      name: "Juna",
      title: "CTO",
      testimony: "Quisquam, quod. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      name: "Mahdi",
      title: "COO",
      testimony:
        "adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <section className="h-screen pt-12 flex items-start sm:items-center">
      <div className="container sm:max-w-8xl mx-auto sm:h-3/5 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">TESTIMONI</h1>
        <div className="flex justify-center items-center w-full px-2 sm:px-0 sm:w-5/6 h-full mt-8">
          <Button
            onClick={() => swiperRef.current?.slidePrev()}
            icon={faCaretLeft}
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
            icon={faCaretRight}
          />
        </div>
        <div className="relative mx-10 pt-12 sm:hidden">
          <h2
            className={`font-medium text-justify text-xl before:content-['“'] before:-scale-x-100 before:absolute before:-mt-2 before:-ml-5 after:content-['“'] after:absolute after:-right-5 after:-bottom-5 after:text-3xl after:font-bold before:text-3xl before:font-bold`}
          >
            {data[swiperIndex].testimony}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Testimoni;

type ButtonProps = {
  onClick: () => void;
  icon: IconDefinition;
};

const Button = ({ onClick, icon }: ButtonProps) => {
  return (
    <FontAwesomeIcon
      onClick={() => onClick()}
      className="w-12 h-12 sm:w-20 sm:h-20 cursor-pointer"
      icon={icon}
    />
  );
};

type CardCarouselProps = {
  name: string;
  title: string;
  testimony: string;
};

const CardCarousel = ({ name, title, testimony }: CardCarouselProps) => {
  return (
    <div className="flex bg-gray-300 w-full h-full justify-center items-center">
      <div className="flex flex-col w-full sm:w-4/12 h-full bg-gray-400 p-12">
        <div className="bg-gray-500 aspect-square">INI FOTO GAN</div>
        <div className="mt-auto">
          <h1 className="font-bold text-3xl">{name}</h1>
          <p className="font-semibold text-xl">{title}</p>
        </div>
      </div>
      <div className="hidden sm:flex justify-center items-center w-8/12 p-12">
        <div className="relative">
          <p
            className={`font-medium text-justify text-xl before:content-['“'] before:-scale-x-100 before:absolute before:-mt-2 before:-ml-5 after:content-['“'] after:absolute after:-right-5 after:-bottom-5 after:text-3xl after:font-bold before:text-3xl before:font-bold`}
          >
            {testimony}
          </p>
        </div>
      </div>
    </div>
  );
};
