import { useEffect, useState } from "react";

function Sejarah() {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const changeNumber = setInterval(() => {
      setNumber((x) => (x < 2 ? x + 1 : 0));
    }, 5000);

    return () => clearTimeout(changeNumber);
  }, [number]);

  return (
    <section className="max-w-8xl mx-auto h-screen flex flex-col pt-8 space-y-5">
      <h1 className="font-bold text-5xl text-center">KILAS LAMPAU</h1>
      <h2 className="font-semibold text-3xl text-center flex justify-center items-center">
        <style jsx>{`
          @keyframes width-animate {
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
          {[...Array(3)].map((_, i) => (
            <div
              className={`absolute text-red-500 underline overflow-hidden w-0 left-0 text-left ${
                i == number ? "animate-[width-animate_5.5s_ease-in-out]" : ""
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
              onClick={() => setNumber(i)}
              className={`py-2 px-6 ${
                i == number ? "bg-gray-500" : "bg-gray-400"
              } text-3xl font-semibold`}
              key={i}
            >
              202{i}
            </button>
          ))}
        </div>
        <div className="absolute flex justify-center items-start text-justify p-6 bg-gray-500 w-2/5 h-2/5 bottom-0 right-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
          imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque
          eros, porta a varius vel, luctus eget ex. Cras non pellentesque diam.
        </div>
      </div>
    </section>
  );
}

export default Sejarah;
