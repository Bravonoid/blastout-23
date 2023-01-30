import React from "react";
import AOS from "aos";
import { useEffect } from "react";
const GuestStar = () => {

    useEffect(() => {
      AOS.init({
        once: false,
        duration: 1000,
      });
    }, []);

  return (
    <>
      <div className="block lg:hidden w-full">
        <div className="flex justify-center items-center w-screen bg-[#0F0B36] relative h-[1440px] overflow-hidden">
          <div className="font-bold z-30 absolute text-blastoutwhite text-glow text-2xl uppercase font-inter mb-[1200px]" data-aos="zoom-out">
            SPEAKERS
          </div>
          <div className="absolute mb-[830px] w-[280px] z-20" data-aos="fade-right">
            <img src="Group 6074.png"></img>
          </div>
          <div className="absolute mb-[220px] w-[280px] z-20" data-aos="fade-left">
            <img src="Group 6073.png"></img>
          </div>
          <h2 className="absolute font-bold z-30 text-blastoutwhite text-glow text-2xl uppercase font-inter mt-[150px]" data-aos="zoom-out">
            GUEST STARS
          </h2>
          <div className="absolute mt-[470px] w-[280px] z-20" data-aos="fade-right">
            <img src="Group 6065.png"></img>
          </div>
          <div className="absolute mt-[900px] w-[280px] z-20 scale-90" data-aos="fade-left">
            <img src="Group 6064.png" className="scale-125"></img>
          </div>
          <div className="absolute w-screen -bottom-[30px]" data-aos="zoom-out">
            <img src="Group 104.png" className="w-screen"></img>
          </div>
          <div className="absolute -right-[70px] top-[320px] w-[150px]" data-aos="fade-left">
            <img src="Group 6081.png"></img>
          </div>
          <div className="absolute -left-[70px] top-[320px] w-[150px]" data-aos="fade-right">
            <img src="Group 6082.png"></img>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex justify-center items-center w-screen bg-[#0F0B36] relative h-[1440px] overflow-hidden">
          <div className="font-bold z-30 absolute text-blastoutwhite text-glow text-5xl uppercase font-inter top-[150px]" data-aos="zoom-out">
            SPEAKERS
          </div>
          <div className="flex justify-center top-[250px] z-20 absolute">
            <div className="w-[500px] z-20 mx-[100px] flex" data-aos="fade-right">
              <img src="Group 6074.png"></img>
            </div>
            <div className="w-[500px] z-20 mx-[100px] flex" data-aos="fade-left">
              <img src="Group 6073.png"></img>
            </div>
          </div>
          <div className="absolute right-0 top-[230px] w-[300px]" data-aos="fade-left">
            <img src="Group 6081.png"></img>
          </div>
          <div className="absolute left-0 top-[230px] w-[300px]" data-aos="fade-right">
            <img src="Group 6082.png"></img>
          </div>
          <div className="font-bold z-30 absolute text-blastoutwhite text-glow text-5xl uppercase font-inter mt-[200px]" data-aos="zoom-out">
            GUEST STARS
          </div>
          <div className="flex justify-center bottom-[200px] z-20 absolute">
            <div className="w-[500px] scale-110 z-20 mx-[100px]" data-aos="fade-right">
              <img src="Group 6065.png"></img>
            </div>
            <div className="w-[500px] scale-110 z-20 mx-[100px]" data-aos="fade-left">
              <img src="Group 6064.png"></img>
            </div>
          </div>
          <div className="absolute w-screen -bottom-[150px]" data-aos="zoom-out">
            <img src="Group 104.png" className="w-screen"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestStar;
