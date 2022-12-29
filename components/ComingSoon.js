import React from "react";
const ComingSoon = () => {
  return (
    <>
      <div className="visible lg:invisible">
        <img src="./Android Small - 1.svg"></img>
      </div>
      <div className="invisible lg:visible">
        <div className="flex flex-col justify-center items-center w-[100vw] relative">
          <img src="./Coming Soon bg.svg" className="w-full" alt=""></img>
          <div className="absolute justify-between">
            <img src="./Line 12.svg" className="z-[10] w-3/4" alt=""></img>
            <div
              className="z-[10] font-bold text-black text-6xl items-center"
              style={{ "text-shadow": "0 0 3px #FF000" }}
            >
              COMING SOON
            </div>
            <img src="./Line 12.svg" className="z-[10] w-3/4" alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
