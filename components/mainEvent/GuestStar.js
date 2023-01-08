import React from "react";
const GuestStar = () => {
  return (
    <>
      <div className="block lg:hidden w-full">
        <div className= "flex justify-center items-center w-screen bg-[#0F0B36] relative h-[1440px] overflow-hidden">
            <div className="font-bold z-30 absolute text-blastoutwhite text-glow text-2xl uppercase font-inter mb-[1200px]">
            SPEAKERS
            </div>
            <div className="absolute mb-[830px] w-[280px] z-20">
              <img src="Group 6074.png">
              </img>
            </div>
            <div className="absolute mb-[220px] w-[280px] z-20">
              <img src="Group 6073.png">
              </img>
            </div>
            <h2 className="absolute font-bold z-30 text-blastoutwhite text-glow text-2xl uppercase font-inter mt-[150px]">
              GUEST STARS
            </h2>
            <div className="absolute mt-[470px] w-[280px] z-20">
              <img src="Frame 6066.png">
              </img>
            </div>
            <div className="absolute mt-[900px] w-[280px] z-20">
              <img src="Frame 6066 (1).png" className="scale-125">
              </img>
            </div>
            <div className="absolute w-screen -bottom-[30px]">
              <img src="Group 104.png"  className="w-screen">
              </img>
            </div>
            <div className="absolute -right-[70px] top-[320px] w-[150px]">
              <img src="Group 6081.png">
              </img>
            </div>
            <div className="absolute -left-[70px] top-[320px] w-[150px]">
              <img src="Group 6082.png">
              </img>
            </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className= "flex justify-center items-center w-screen bg-[#0F0B36] relative h-[1440px] overflow-hidden">
          <div className="font-bold z-30 absolute text-blastoutwhite text-glow text-5xl uppercase font-inter top-[150px]">
            SPEAKERS
          </div>
          <div className="flex justify-center top-[250px] z-20 absolute">
            <div className="w-[500px] z-20 mx-[100px] flex">
                <img src="Group 6074.png">
                </img>
            </div>
            <div className="w-[500px] z-20 mx-[100px] flex">
                <img src="Group 6073.png">
                </img>
            </div>
          </div>
          <div className="absolute right-0 top-[230px] w-[300px]">
              <img src="Group 6081.png">
              </img>
          </div>
          <div className="absolute left-0 top-[230px] w-[300px]">
              <img src="Group 6082.png">
              </img>
          </div>
          <div className="font-bold z-30 absolute text-blastoutwhite text-glow text-5xl uppercase font-inter mt-[200px]">
            GUEST STARS
          </div>
          <div className="flex justify-center bottom-[200px] z-20 absolute">
            <div className="w-[500px] z-20 mx-[100px]">
                <img src="Frame 6066.png">
                </img>
            </div>
            <div className="w-[500px] scale-125 z-20 mx-[100px] mt-[30px]">
                <img src="Frame 6066 (1).png">
                </img>
            </div>
          </div>
          <div className="absolute w-screen -bottom-[150px]">
              <img src="Group 104.png"  className="w-screen">
              </img>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestStar;