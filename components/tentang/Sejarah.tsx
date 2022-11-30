import { useEffect, useState } from "react";

function Sejarah() {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const changeNumber = setInterval(() => {
      setNumber((x) => (x < 2 ? x + 1 : 0));
    }, 5000);

    return () => clearTimeout(changeNumber);
  }, []);

  return (
    <section className="max-w-8xl mx-auto h-screen flex flex-col pt-8 space-y-5">
      <h1 className="font-bold text-5xl text-center">KILAS LAMPAU</h1>
      <h2 className="font-semibold text-3xl text-center flex justify-center items-center">
        <style jsx>{`
          .animate-0 {
            animation: roll 10s forwards infinite;
          }

          .animate-1 {
            animation: roll-second 10s forwards infinite;
          }

          .animate-2 {
            animation: roll-third 10s forwards infinite;
          }

          .geser-0 {
            animation: geser 10s forwards infinite;
          }

          .geser-1 {
            animation: geser-second 10s forwards infinite;
          }

          .geser-2 {
            animation: geser-third 10s forwards infinite;
          }

          .width-0 {
            animation: width 15s forwards infinite;
          }

          .width-1 {
            animation: width-second 15s forwards infinite;
          }

          .width-2 {
            animation: width-third 15s forwards infinite;
          }

          @keyframes roll {
            0% {
              top: -2rem;
              transform: rotate(-90deg);
              opacity: 0;
            }
            11% {
              top: 0;
              transform: rotate(0deg);
              opacity: 1;
            }
            22% {
              top: 0;
              transform: rotate(0deg);
              opacity: 1;
            }
            33% {
              top: 5rem;
              transform: rotate(30deg);
              opacity: 0;
            }
          }

          @keyframes roll-second {
            33% {
              top: -2rem;
              transform: rotate(-90deg);
              opacity: 0;
            }
            44% {
              top: 0;
              transform: rotate(0deg);
              opacity: 1;
            }
            55% {
              top: 0;
              transform: rotate(0deg);
              opacity: 1;
            }
            66% {
              top: 5rem;
              transform: rotate(30deg);
              opacity: 0;
            }
          }

          @keyframes roll-third {
            66% {
              top: -2rem;
              transform: rotate(-90deg);
              opacity: 0;
            }
            77% {
              top: 0;
              transform: rotate(0deg);
              opacity: 1;
            }
            88% {
              top: 0;
              transform: rotate(0deg);
              opacity: 1;
            }
            99% {
              top: 5rem;
              transform: rotate(30deg);
              opacity: 0;
            }
          }

          @keyframes geser {
            0% {
              transform: translateX(-1rem);
            }
            11% {
              transform: translateX(0);
              opacity: 1;
            }
            22% {
              transform: translateX(0);
              opacity: 1;
            }
            33% {
              transform: translateX(1rem);
              opacity: 0;
            }
          }

          @keyframes geser-second {
            33% {
              transform: translateX(-1rem);
              opacity: 0;
            }
            44% {
              transform: translateX(0);
              opacity: 1;
            }
            55% {
              transform: translateX(0);
              opacity: 1;
            }
            66% {
              transform: translateX(1rem);
              opacity: 0;
            }
          }

          @keyframes geser-third {
            66% {
              transform: translateX(-1rem);
              opacity: 0;
            }
            77% {
              transform: translateX(0);
              opacity: 1;
            }
            88% {
              transform: translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateX(1rem);
              opacity: 0;
            }
          }

          @keyframes width {
            0% {
              width: 0;
              opacity: 0;
            }
            11% {
              width: 100%;
              opacity: 1;
            }
            22% {
              width: 100%;
              opacity: 1;
            }
            33% {
              width: 100%;
              transform: scaleX(0);
              opacity: 0;
            }
          }

          @keyframes width-second {
            33% {
              width: 0;
              opacity: 0;
            }
            44% {
              width: 100%;
              opacity: 1;
            }
            55% {
              width: 100%;
              opacity: 1;
            }
            66% {
              width: 100%;
              opacity: 0;
            }
          }

          @keyframes width-third {
            66% {
              width: 0;
              opacity: 0;
            }
            77% {
              width: 100%;
              opacity: 1;
            }
            88% {
              width: 100%;
              opacity: 1;
            }
            99% {
              width: 100%;
              opacity: 0;
            }
          }

          @keyframes coba {
            0% {
              width: 100%;
              transform: scaleX(0);
              opacity: 0;
            }
            1% {
              transform: scaleX(0);
              opacity: 1;
            }
            33% {
              width: 100%;
              transform: scaleX(1);
              opacity: 1;
            }
            66% {
              width: 100%;
              transform: scaleX(1);
              opacity: 1;
            }
            99% {
              opacity: 1;
            }
            100% {
              width: 100%;
              transform: scaleX(0);
              opacity: 0;
            }
          }

          @keyframes coba-dua {
            0% {
              width: 0;
            }
            33% {
              width: 100%;
            }
            66% {
              width: 100%;
            }
            100% {
              width: 0;
            }
          }
        `}</style>
        BLASTOUT 202
        <div className="relative flex items-center justify-left">
          <div className="opacity-0 w-auto">0</div>
          {/* {[...Array(3)].map((_, i) => (
            <div
              style={{ transformOrigin: "50% 100%" }}
              className={`absolute text-red-500 underline opacity-0 w-0 width-${i}`}
              key={i}
            >
              {i}
            </div>
          ))} */}

          {[...Array(3)].map((_, i) => (
            <div
              style={{ transformOrigin: "0% 50%" }}
              className={`absolute text-red-500 underline overflow-hidden w-0 left-0 text-left ${
                i == number ? "animate-[coba-dua_6s]" : ""
              }`}
              key={i}
            >
              {i}
            </div>
          ))}
        </div>
      </h2>

      <div className="relative flex flex-col w-full h-3/4 justify-between space-y-10">
        <div className="w-full h-full bg-gray-300"></div>
        <div className="w-1/3 flex justify-between">
          {[...Array(3)].map((_, i) => (
            <button
              className={`border-2 py-2 px-6 ${
                i == number ? "bg-gray-500" : "bg-gray-400"
              } text-3xl font-semibold`}
              key={i}
            >
              202{i}
            </button>
          ))}
        </div>
        <div className="absolute bg-gray-500 w-2/5 h-2/5 bottom-0 right-14"></div>
      </div>
    </section>
  );
}

export default Sejarah;
