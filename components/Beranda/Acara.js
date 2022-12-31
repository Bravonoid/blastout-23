import React, { useState, useEffect } from "react";

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
      desc: "Briefing merupakan serangkaian kegiatan yang dilakukan sebelum hari H pelaksanaan BlastOut 2023. Kegiatan ini berisi sosialisasi ke SMA - SMA yang ada di klaten mengenai UGM dan Balairungklass Association (BKlass) sebagai ormada mahasiswa Klaten di UGM.",
      no: 0,
      bg: "bg-[url('/rangkaianAcara/briefing.png')] w-[27vw] h-full shrink-0 text-white bg-cover",
      bgsm: "bg-[url('/rangkaianAcara/briefing.png')] h-[30vh] w-full shrink-0 text-white bg-cover",
    },
    {
      title: "TRYOUT",
      desc: "TryOut merupakan serangkaian kegiatan pelatihan ujian masuk perguruan tinggi yang ditujukan kepada siswa-siswi SMA/SMK Sederajat di seluruh Kabupaten Klaten. Kegiatan ini bertujuan agar siswa-siswi SMA/SMK Sederajat yang ingin melanjutkan pendidikan ke perguruan tinggi memiliki bekal materi dan sistem ujian yang akan mereka hadapi.",
      no: 1,
      bg: "bg-[url('/rangkaianAcara/tryout.png')] w-[27vw] h-full shrink-0 text-white bg-cover",
      bgsm: "bg-[url('/rangkaianAcara/tryout.png')] h-[30vh] w-full shrink-0 text-white bg-cover",
    },
    {
      title: "BLASTALK",
      desc: "Merupakan talkshow interaktif yang menghadirkan pembicara-pembicara inspiratif. Blastalk menjadi sarana untuk mengetahui strategi meraih kampus impian dan hal-hal yang dapat dilakukan untuk menjadi pelajar adaptif.",
      no: 2,
      bg: "bg-[url('/rangkaianAcara/blastalk.png')] w-[27vw] h-full shrink-0 text-white bg-cover",
      bgsm: "bg-[url('/rangkaianAcara/blastalk.png')] h-[30vh] w-full shrink-0 text-white bg-cover",
    },
    // {
    //   title: "FACULTY FAIR",
    //   desc: "",
    //   no: 3,
    //   bg: "bg-[url('/rangkaianAcara/facfair.png')] w-[27vw] h-full shrink-0 text-white bg-cover",
    //   bgsm: "bg-[url('/rangkaianAcara/facfair.png')] h-[30vh] w-full shrink-0 text-white bg-cover",
    // },
    {
      title: "CAMPUS FAIR",
      desc: "Campus Fair merupakan serangkaian kegiatan yang mengenalkan beberapa Universitas, Fakultas di UGM, dan beberapa UKM yang berada di UGM. Campus Fair ini bertujuan untuk memberikan gambaran lebih mendalam kepada siswa-siswi SMA/SMK terkait universitas dan fakultas yang diminati. Dalam Campus Fair ini, terdapat banyak stand beserta mahasiswa/i yang berasal dari universitas atau fakultas terkait yang akan membantu menjawab rasa penasaran dari siswa-siswi SMA/SMK untuk memberikan gambaran terkait univeritas maupun fakultas tersebut.",
      no: 3,
      bg: "bg-[url('/rangkaianAcara/camfair.png')] w-[27vw] h-full shrink-0 text-white bg-cover",
      bgsm: "bg-[url('/rangkaianAcara/camfair.png')] h-[30vh] w-full shrink-0 text-white bg-cover",
    },
    {
      title: "ENTERTAINMENT",
      desc: "Entertainment GS merupakan sesi penampilan band lokal ataupun nasional yang tentunya menarik sebagai hiburan bagi para peserta setelah mengikuti rangkaian acara. Blastout mengundang beberapa band yang akan tampil untuk menghibur peserta dengan mempersembahkan beberapa lagu.",
      no: 4,
      bg: "bg-[url('/rangkaianAcara/entertainment.png')] w-[27vw] h-full shrink-0 text-white bg-cover",
      bgsm: "bg-[url('/rangkaianAcara/entertainment.png')] h-[30vh] w-full shrink-0 text-white bg-cover",
    },
  ];

  const normal = {
    w: "12%",
    h: "12%",
    disp: "none",
    rot: "-90deg",
    titleSize: "50px",
    trans: "translate(16vh, -18vh)",
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
    temp[i % 5] = true;
    setState([...temp]);
    const interval = setInterval(() => {
      setK(k + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [k]);

  const enterHandler = (e, key) => {
    // clearInterval(interval);
    let x = key % 5;
    setK(x);
    let temp = [false, false, false, false, false, false];
    temp[x] = true;
    setState([...temp]);
    // console.log(e._targetInst.index + " " + e._targetInst.key);
    // console.log(e.target.__reactFiber$dh933erxn7i.key % 6);
    // console.log(key);
  };

  const leaveHandler = (e, key) => {
    let x = key % 5;
    setK(x);
    // console.log(x);
  };

  return (
    <div className="bg-[#0F0B36] h-[110vh] sm:h-[70vh]">
      <div className="flex justify-center font-bold text-3xl sm:text-5xl w-full text-[#EEEEEE] py-[3vh] sm:py-[7vh]">
        <p
          style={{
            textShadow:
              "4px 0px 8px rgba(185, 35, 69, 0.5), -4px 0px 8px rgba(199, 126, 19, 0.4)",
          }}
          className="m-0 p-0"
        >
          RANGKAIAN ACARA
        </p>
      </div>
      <div className="h-[100vh] sm:h-[50vh] flex flex-col sm:flex-row justify-evenly items-center mb-[200px] px-[5vw]">
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
                  filter:
                    "drop-shadow(-2px 0 3px rgb(131 56 237 / 1)) drop-shadow(2px 0 3px rgb(255 0 112 / 1))",
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
                  filter:
                    "drop-shadow(-2px 0 3px rgb(131 56 237 / 1)) drop-shadow(2px 0 3px rgb(255 0 112 / 1))",
                }
              : {
                  height: height,
                  background:
                    "linear-gradient(270deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
                };
            const bg = state[i]
              ? {
                  background:
                    "linear-gradient(180deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
                }
              : {
                  background:
                    "linear-gradient(270deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
                };
            const bgsm = state[i]
              ? {
                  background:
                    "linear-gradient(180deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
                }
              : {
                  background:
                    "linear-gradient(180deg, rgba(37, 37, 37, 0) 30%, rgba(0, 0, 0, 0.8) 120%)",
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
                    className="font-bold w-[37.5vh] flex justify-start z-[10]"
                    key={item.no + 5}
                  >
                    <p className="text-l">{item.title}</p>
                  </div>
                  <div
                    className="text-xs z-[10]"
                    style={{ display: disp }}
                    key={item.no + 10}
                  >
                    {item.desc}
                  </div>
                  <div
                    key={item.no + 30}
                    className="left-0 absolute h-[30vh] w-full"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    <div className={item.bgsm}></div>
                  </div>
                  <div
                    key={item.no + 35}
                    className="h-full w-full absolute z-[5] bottom-0 left-0"
                    style={bgsm}
                  ></div>
                </div>
                <div
                  key={item.no + 15}
                  className="hidden sm:flex relative overflow-hidden h-[50vh] flex-col transition-all duration-500 justify-end items-start p-[2.5vh] text-white"
                  style={st}
                  onMouseOver={(e) => enterHandler(e, i)}
                  onMouseLeave={(e) => leaveHandler(e, i)}
                >
                  <div
                    className="font-bold w-[37.5vh] flex justify-start z-[10]"
                    style={{
                      fontSize: fontSize,
                      rotate: rot,
                      transform: trans,
                    }}
                    key={item.no + 20}
                  >
                    <p className="text-2xl">{item.title}</p>
                  </div>
                  <div
                    className="text-l z-[10]"
                    style={{ display: disp }}
                    key={item.no + 25}
                  >
                    {item.desc}
                  </div>
                  <div
                    key={item.no + 40}
                    className="bottom-0 absolute w-[27vw] flex flex-row justify-center h-full shrink-0"
                    style={{ left: "50%", transform: "translateX(-50%)" }}
                  >
                    <div className={item.bg}></div>
                  </div>
                  <div
                    key={item.no + 45}
                    className="h-full w-full absolute z-[5] bottom-0 left-0"
                    style={bg}
                  ></div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Acara;
