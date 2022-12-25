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
      title: "Briefing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 0,
      bg: "./rangkaianAcara/briefing.png",
    },
    {
      title: "Try Out",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 1,
      bg: "./rangkaianAcara/tryout.png",
    },
    {
      title: "Talk Show",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 2,
      bg: "./rangkaianAcara/talkshow.png",
    },
    {
      title: "Faculty Fair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 3,
      bg: "./rangkaianAcara/facfair.png",
    },
    {
      title: "Campus Fair",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 4,
      bg: "./rangkaianAcara/camfair.png",
    },
    {
      title: "Entertainment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed semper nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nunc sit amet aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nisl nisl eu nunc.",
      img: "",
      no: 5,
      bg: "./rangkaianAcara/entertainment.png",
    },
  ];

  const normal = {
    w: "12%",
    disp: "none",
    rot: "-90deg",
    titleSize: "50px",
    trans: "translate(16.25vh, -16.25vh)",
  };

  const active = {
    w: "30%",
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
      <div className="font-bold w-[37.5vh] text-[50px] w-full flex justify-center m-[20px]">
        Rangkaian Acara
      </div>
      <div className="flex justify-evenly mb-[200px] px-[50px]">
        {rangkaian &&
          rangkaian.map((item, i) => {
            const width = state[i] ? active.w : normal.w;
            const disp = state[i] ? active.disp : normal.disp;
            const rot = state[i] ? active.rot : normal.rot;
            const trans = state[i] ? active.trans : normal.trans;
            const fontSize = state[i] ? active.titleSize : normal.titleSize;
            return (
              <div
                key={item.no}
                className="relative overflow-hidden h-[50vh] flex flex-col transition-all duration-500 justify-end p-[2.5vh] text-white"
                style={{
                  width: width,
                  background:
                    "linear-gradient(179.91deg, rgba(37, 37, 37, 0) 28.25%, rgba(0, 0, 0, 0.8) 110.91%)",
                }}
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
                  <p
                    className="bg-[#8338ED] rounded-[25px] px-[20px] py-[5px] text-2xl font-retrolight"
                    style={{
                      background:
                        "linear-gradient(111.14deg, #8338ED 23.71%, #FF0070 102.48%)",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
                <div
                  className="font-bold"
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
            );
          })}
      </div>
    </>
  );
};

export default Acara;
