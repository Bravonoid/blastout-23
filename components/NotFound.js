import React from "react";
const NotFound = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex justify-center items-center w-screen bg-[#0F0B36] h-screen relative overflow-hidden">
            <div className="absolute z-[10] w-[400px] -bottom-[180px] -left-[130px] animate-spin-slow">
            <img
                src="./Buletan.svg"
                className=""
                alt=""
              ></img>
            </div>
            <div className="absolute z-[10] w-[350px] -bottom-[185px] -left-[115px]">
            <img
                src="./Group 124.svg"
                className=""
                alt=""
              ></img>
            </div>
            <div className="absolute z-[10] top-0">
            <img src="./atas404m.svg"></img>
            </div>
            <div className="absolute z-[10]">
            <img src="./Group 6015.png"></img>
            </div>
            <div className="absolute z-[10] bottom-0 right-0">
            <img src="./Group 6016.svg"></img>
            </div>
      </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex justify-center items-center w-screen bg-[#0F0B36] relative h-screen">
          <div className="absolute z-[10] top-0">
              <img src="./atas404hp.svg"></img>
          </div>
          <div className="absolute z-[10] bottom-0">
              <img src="./bawah404hp.svg"></img>
          </div>
          <div className="absolute z-[10]">
              <img src="./Group 5984.png"></img>
          </div>
      </div>
      </div>
    </>
  );
};

export default NotFound;
