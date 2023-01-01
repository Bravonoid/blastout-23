import Image from "next/image";

function Sistem() {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque eros, porta a varius vel, luctus get ex. Cras non pellentesque diam. Ut at arcu urna. Mauris tempor ex vitae libero placerat commodo. Suspendisse consectetur non nunc egestas aliquam.",
    },
  ];
  return (
    <>
      <style jsx>{`
        .serif::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0.75rem;
          height: 2px;
          background-color: #ffbd0c;
        }
        .serif::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0.75rem;
          height: 2px;
          background-color: #ffbd0c;
        }
        @media (min-width: 1023px) {
          .serif::before {
            width: 1.25rem;
            height: 4px;
          }
          .serif::after {
            width: 1.25rem;
            height: 4px;
          }
        }
        @media (min-width: 1535px) {
          .serif::before {
            width: 2rem;
            height: 8px;
          }
          .serif::after {
            width: 2rem;
            height: 8px;
          }
        }
      `}</style>
      <div className="flex flex-col justify-center items-center font-inter text-white bg-blastoutdarkpurple relative overflow-hidden pt-20 lg:px-20 2xl:px-32">
        <h2 className="uppercase font-bold text-2xl lg:text-4xl 2xl:text-6xl mb-16 text-glow">
          Sistem
        </h2>
        <div className="grid grid-cols-2 grid-rows-[repeat(8,auto)] lg:grid-cols-[1fr_.5fr_1fr] mr-10 -ml-[36%] sm:-ml-[48%] lg:m-0 z-10">
          {Step(2, 1)}
          {Step(4, 3)}
          {Step(6, 1)}
          {Step(8, 3)}
          <div className="row-[span_8_/_span_8] flex flex-col items-center row-start-1 col-start-1 lg:col-start-2 place-self-end lg:place-self-center h-full mr-[14%] lg:mr-0 lg:mt-36 2xl:mt-52">
            <h3 className="-mb-2 text-[12px] lg:text-xl 2xl:text-4xl">STEP</h3>
            <h3 className="text-xl lg:text-3xl 2xl:text-6xl font-bold">01</h3>
            <div className="w-[2px] lg:w-[4px] 2xl:w-[8px] h-full bg-blastoutgold my-3 lg:my-6 relative serif"></div>
            <h3 className="-mb-2 text-[12px] lg:text-xl 2xl:text-4xl">STEP</h3>
            <h3 className="text-xl lg:text-3xl 2xl:text-6xl font-bold">02</h3>
            <div className="w-[2px] lg:w-[4px] 2xl:w-[8px] h-full bg-blastoutgold my-3 lg:my-6 relative serif"></div>
            <h3 className="-mb-2 text-[12px] lg:text-xl 2xl:text-4xl">STEP</h3>
            <h3 className="text-xl lg:text-3xl 2xl:text-6xl font-bold">03</h3>
            <div className="w-[2px] lg:w-[4px] 2xl:w-[8px] h-full bg-blastoutgold my-3 lg:my-6 relative serif"></div>
            <h3 className="-mb-2 text-[12px] lg:text-xl 2xl:text-4xl">STEP</h3>
            <h3 className="text-xl lg:text-3xl 2xl:text-6xl font-bold">04</h3>
            <div className="w-[2px] lg:w-[4px] 2xl:w-[8px] h-full bg-transparent my-3 lg:my-6 relative"></div>
          </div>
          {StepImg(3, 1, 1)}
          {StepImg(1, 3, 2)}
          {StepImg(3, 5, 3)}
          {StepImg(1, 7, 4)}
        </div>
        <Image
          src="/tryout/sistem/bg-grid.svg"
          alt=""
          width={1000}
          height={1000}
          className="w-40 absolute top-5 -right-16 lg:w-56 lg:-top-0 lg:-right-10 2xl:w-96 2xl:-right-36"
        />
        <Image
          src="/tryout/sistem/bg-round.svg"
          alt=""
          width={1000}
          height={1000}
          className="w-40 absolute top-[36rem] sm:top-[30rem] -right-14 lg:w-64 lg:top-[24rem] lg:right-auto lg:-left-16 2xl:w-[26rem] 2xl:top-[32rem]"
        />
        <Image
          src="/tryout/sistem/bg-triangle.svg"
          alt=""
          width={1000}
          height={1000}
          className="h-48 w-fit absolute top-[68rem] sm:top-[56rem] md:top-[52rem] -right-2 lg:hidden"
        />
      </div>
    </>
  );
}

export default Sistem;

function Step(i, j) {
  return (
    <div
      className={`col-start-2 mb-20 lg:mb-36 
      ${
        i == 2
          ? "row-start-2"
          : i == 4
          ? "row-start-4"
          : i == 6
          ? "row-start-6"
          : i == 8
          ? "row-start-8"
          : ""
      }
      ${
        i == 2
          ? "lg:row-start-1"
          : i == 4
          ? "lg:row-start-2"
          : i == 6
          ? "lg:row-start-3"
          : i == 8
          ? "lg:row-start-4"
          : ""
      }
      ${j == 1 ? "lg:col-start-1" : j == 3 ? "lg:col-start-3" : ""}`}
    >
      <h3 className="text-base 2xl:text-5xl font-bold text-blastoutpink drop-shadow-[0_0_16px_rgba(244,164,182,.3)] mb-3 2xl:mb-6">
        Lorem Ipsum {i}
      </h3>
      <p className="text-[14px] 2xl:text-2xl text-justify lg:text-start mb-3 leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
        imperdiet quam. Pellentesque volutpat fringilla ultricies. Donec neque
        eros, porta a varius vel, luctus eget ex. Cras non pellentesque diam. Ut
        at arcu urna. Mauris tempor ex vitae libero placerat commodo.
        Suspendisse consectetur non nunc egestas aliquam.
      </p>
      <hr className="bg-blastoutgold h-[2px] lg:h-[4px] border-none" />
    </div>
  );
}

function StepImg(i, j, k) {
  return (
    <div
      className={`w-28 lg:w-44 2xl:w-80 h-fit mb-6 lg:mb-auto ${
        i === 1 ? "lg:ml-auto" : ""
      } col-start-2 lg:col-start-${i} lg:row-start-${k} bg-blastoutpink p-2
      ${
        j == 1
          ? "row-start-1"
          : j == 3
          ? "row-start-3"
          : j == 5
          ? "row-start-5"
          : j == 7
          ? "row-start-7"
          : ""
      }`}
    >
      <Image
        src="/mainevent/lokasi-foto.png"
        alt="dummy"
        width={1000}
        height={1000}
        className="w-full border-4 border-black"
      />
    </div>
  );
}
