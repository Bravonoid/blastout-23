import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Acara = () => {
  const [state, setState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [k, setK] = useState(0);
  const rangkaian = [
    {
      title: "BRIEFING",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 0,
      bg: "./rangkaianAcara/briefing.png",
    },
    {
      title: "TRYOUT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 1,
      bg: "./rangkaianAcara/tryout.png",
    },
    {
      title: "BLASTALK",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 2,
      bg: "./rangkaianAcara/blastalk.png",
    },
    {
      title: "FACULTY FAIR",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 3,
      bg: "./rangkaianAcara/facfair.png",
    },
    {
      title: "CAMPUS FAIR",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 4,
      bg: "./rangkaianAcara/camfair.png",
    },
    {
      title: "ENTERTAINMENT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 5,
      bg: "./rangkaianAcara/entertainment.png",
    },
  ];

  const normal = {
    w: "12%",
    h: "12%",
    disp: "none",
    rot: "-90deg",
    titleSize: "50px",
    trans: "translate(16.25vh, -18vh)",
  };

  const active = {
    w: "30%",
    h: "30%",
    disp: "block",
    rot: "0deg",
    titleSize: "40px",
    trans: "translate(0, 0)",
  };

  useEffect(() => {
    let i = k;
    let temp = [false, false, false, false, false, false];
    temp[i % 6] = true;
    setState([...temp]);
    const interval = setInterval(() => {
      setK(k + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [k]);

  const enterHandler = (e, key) => {
    // clearInterval(interval);
    let x = key % 6;
    setK(x);
    let temp = [false, false, false, false, false, false];
    temp[x] = true;
    setState([...temp]);
    // console.log(e._targetInst.index + " " + e._targetInst.key);
    // console.log(e.target.__reactFiber$dh933erxn7i.key % 6);
    // console.log(key);
  };

  const leaveHandler = (e, key) => {
    let x = key % 6;
    setK(x);
    // console.log(x);
  };

  return (
    <>
      <div className="flex justify-center font-bold text-3xl sm:text-[50px] w-full m-[20px] text-[#EEEEEE]">
        RANGKAIAN ACARA
      </div>
      <div className="h-[100vh] sm:h-[50vh] flex flex-col sm:flex-row justify-evenly mb-[200px] px-[50px]">
        {rangkaian &&
          rangkaian.map((item, i) => {
            const width = state[i] ? active.w : normal.w;
            const height = state[i] ? active.h : normal.h;
            const disp = state[i] ? active.disp : normal.disp;
            const rot = state[i] ? active.rot : normal.rot;
            const trans = state[i] ? active.trans : normal.trans;
            const fontSize = state[i] ? active.titleSize : normal.titleSize;
            const st = state[i]
              ? {
                  width: width,
                  background:
                    "linear-gradient(180deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
                }
              : {
                  width: width,
                  background:
                    "linear-gradient(270deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
                };
            const stsm = state[i]
              ? {
                  height: height,
                  background:
                    "linear-gradient(180deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
                }
              : {
                  height: height,
                  background:
                    "linear-gradient(270deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
                };
            return (
              <>
                <div
                  key={item.no}
                  className="sm:hidden relative overflow-hidden w-[80vw] flex flex-col transition-all duration-500 justify-end p-[2.5vh] text-white"
                  style={stsm}
                  onMouseOver={(e) => enterHandler(e, i)}
                  onMouseLeave={(e) => leaveHandler(e, i)}
                >
                  <div
                    className="font-bold w-[37.5vh] flex justify-start"
                    key={item.no + 6}
                  >
                    <p className="text-xl">{item.title}</p>
                  </div>
                  <div
                    className="text-sm"
                    style={{ display: disp }}
                    key={item.no + 12}
                  >
                    {item.desc}
                  </div>
                  <img
                    src={item.bg}
                    className="absolute -z-[10] left-0 bottom-0 w-full h-full"
                  ></img>
                </div>
                <div
                  key={item.no}
                  className="hidden sm:flex relative overflow-hidden h-[50vh] flex-col transition-all duration-500 justify-end p-[2.5vh] text-white"
                  style={st}
                  onMouseOver={(e) => enterHandler(e, i)}
                  onMouseLeave={(e) => leaveHandler(e, i)}
                >
                  <div
                    className="font-bold w-[37.5vh] flex justify-start"
                    style={{
                      fontSize: fontSize,
                      rotate: rot,
                      transform: trans,
                    }}
                    key={item.no + 6}
                  >
                    <p className="text-2xl">{item.title}</p>
                  </div>
                  <div
                    className="text-l"
                    style={{ display: disp }}
                    key={item.no + 12}
                  >
                    {item.desc}
                  </div>
                  <img
                    src={item.bg}
                    className="absolute -z-[10] left-0 bottom-0 w-full h-full"
                  ></img>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Acara;
