import React, { useEffect } from "react";
import Image from "next/image";
import background1 from "../../assets/Beranda/background.png";
import title from "../../public/beranda/title.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000
    })

  }, [])

  return (
    <>
      <div
        class="h-screen overflow-hidden shadow-inner-bottom bg-blastoutdarkpurple bg-cover bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${background1.src})` }}
      >
        <div class="flex flex-col justify-center items-center">
          <Image src={title} alt="title" data-aos="fade-up" />
          <p className="bg-gradient-to-br from-[#8338ED] to-[#FF0070] px-3 py-2 rounded-full font-inter font-bold text-white text-sm lg:text-4xl lg:-mt-10 lg:px-6 lg:py-3 md:text-2xl" data-aos="fade-in" data-aos-delay={750} >
            Adaptasi, Susun Strategi, Raih Mimpi
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
