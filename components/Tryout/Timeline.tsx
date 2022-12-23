import Image from "next/image";
import styles from "./Timeline.module.css";

function Timeline() {
  const data = [
    {
      id: 1,
      date: "7 Januari",
      desc: "Lorem ipsum",
    },
    {
      id: 2,
      date: "8 Januari",
      desc: "Lorem ipsum",
    },
    {
      id: 3,
      date: "9 Januari",
      desc: "Lorem ipsum",
    },
    {
      id: 4,
      date: "10 Januari",
      desc: "Lorem ipsum",
    },
    {
      id: 5,
      date: "11 Januari",
      desc: "Lorem ipsum",
    },
  ];

  return (
    <section className="bg-[#0F0B36] font-inter relative overflow-hidden">
      <div className="h-full absolute left-0">
        <div className="relative h-full">
          <Image
            src="/tryout/timeline/ornamen.svg"
            height={1070}
            width={1350}
            alt=""
            className="hidden lg:block lg:-ml-[50%] xl:-ml-[47%]"
          />
          <div
            style={{
              background:
                "linear-gradient(0deg, #0F0B36 9.72%, rgba(15, 11, 54, 0) 67.78%)",
            }}
            className="absolute top-0 w-full h-full"
          ></div>
        </div>
      </div>
      <div className="h-full absolute right-0">
        <div className="relative h-full">
          <Image
            src="/tryout/timeline/ornamen.svg"
            height={1070}
            width={1350}
            alt=""
            className="hidden lg:block lg:ml-[50%] xl:ml-[47%]"
          />
          <div
            style={{
              background:
                "linear-gradient(0deg, #0F0B36 9.72%, rgba(15, 11, 54, 0) 67.78%)",
            }}
            className="absolute top-0 w-full h-full"
          ></div>
        </div>
      </div>
      <div className="z-50 relative max-w-8xl h-screen mx-auto flex flex-col justify-center items-center text-[#F0F0F0]">
        <h1
          style={{
            textShadow:
              "4px 0px 8px rgba(185, 35, 69, 0.5), -4px 0px 8px rgba(199, 126, 19, 0.4)",
          }}
          className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-20"
        >
          TIMELINE
        </h1>
        <div className={styles.stepperWrapper}>
          {data.map(({ id, date, desc }) => {
            const completed = id < 3;
            const active = id == 3;
            const odd = id % 2 == 0;

            return (
              <div
                key={id}
                className={`${styles.stepperItem} ${
                  active ? styles.stepperItemActive : ""
                } ${completed ? styles.stepperItemCompleted : ""}`}
              >
                <div
                  className={`${styles.textWrapper} ${
                    odd ? "mr-auto ml-[12.5%]" : "ml-auto mr-[12.5%]"
                  } sm:ml-0 sm:mr-0 ${active ? styles.textActive : ""}`}
                >
                  <div
                    className={`text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold sm:mb-6 ${
                      active
                        ? `${false && styles.textActive}`
                        : completed
                        ? "text-[#ff0070]"
                        : "text-[#8338ED]"
                    }`}
                  >
                    {date}
                  </div>
                  <div
                    className={`text-base xl:text-4xl font-bold sm:hidden block ${
                      active
                        ? `${false && styles.textActive}`
                        : completed
                        ? "text-[#ff0070]"
                        : "text-[#8338ED]"
                    }`}
                  >
                    {desc}
                  </div>
                </div>
                <button
                  className={`${styles.stepCounter} ${
                    active ? styles.stepCounterActive : ""
                  } ${completed ? styles.stepCounterCompleted : ""}`}
                >
                  <p
                    className={`text-lg sm:text-xl md:text-2xl  lg:text-3xl xl:text-4xl font-bold ${
                      active ? styles.stepCounterTextActive : ""
                    }`}
                  >
                    {id}
                  </p>
                </button>
                <div
                  className={`text-xl mt-3 md:text-2xl lg:text-3xl xl:text-4xl font-bold hidden sm:block ${
                    active
                      ? `${styles.textActive}`
                      : completed
                      ? "text-[#ff0070]"
                      : "text-[#8338ED]"
                  }`}
                >
                  {desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
