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
    <section class="bg-[#0F0B36]">
      <div class="max-w-8xl h-screen mx-auto flex flex-col justify-center items-center text-[#F0F0F0]">
        <h1
          style={{
            textShadow:
              "4px 0px 8px rgba(185, 35, 69, 0.5), -4px 0px 8px rgba(199, 126, 19, 0.4)",
          }}
          class="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 sm:mb-20"
        >
          TIMELINE
        </h1>
        <div class={styles.stepperWrapper}>
          {data.map(({ id, date, desc }) => {
            const completed = id < 3;
            const active = id == 3;
            const odd = id % 2 == 0;

            return (
              <div
                key={id}
                class={`${styles.stepperItem} ${
                  active ? styles.stepperItemActive : ""
                } ${completed ? styles.stepperItemCompleted : ""}`}
              >
                <div
                  class={`${styles.textWrapper} ${
                    odd ? "mr-[45%]" : "ml-[45%]"
                  } sm:ml-0`}
                >
                  <div
                    class={`text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold sm:mb-5 ${
                      active
                        ? `${styles.textActive} sm:text-[#ff0070]`
                        : completed
                        ? "text-[#ff0070]"
                        : "text-[#d9d9d9]"
                    }`}
                  >
                    {date}
                  </div>
                  <div
                    class={`text-base xl:text-4xl font-bold sm:hidden block ${
                      active
                        ? `${styles.textActive} sm:text-[#ff0070]`
                        : completed
                        ? "text-[#ff0070]"
                        : "text-[#d9d9d9]"
                    }`}
                  >
                    {desc}
                  </div>
                </div>
                <button
                  class={`${styles.stepCounter} ${
                    active ? styles.stepCounterActive : ""
                  } ${completed ? styles.stepCounterCompleted : ""}`}
                >
                  <p
                    class={`text-lg sm:text-xl md:text-2xl  lg:text-3xl xl:text-4xl font-bold ${
                      active ? styles.stepCounterTextActive : ""
                    }`}
                  >
                    {id}
                  </p>
                </button>
                <div
                  class={`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold hidden sm:block ${
                    active || completed ? "text-[#8438ED]" : "text-[#d9d9d9]"
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
