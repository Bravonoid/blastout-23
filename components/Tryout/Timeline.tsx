import styles from "./Timeline.module.css";

function Timeline() {
  const data = [
    {
      id: 1,
      date: "7 Januari 2022",
      desc: "Lorem ipsum",
    },
    {
      id: 2,
      date: "8 Januari 2022",
      desc: "Lorem ipsum",
    },
    {
      id: 3,
      date: "9 Januari 2022",
      desc: "Lorem ipsum",
    },
    {
      id: 4,
      date: "10 Januari 2022",
      desc: "Lorem ipsum",
    },
    {
      id: 5,
      date: "11 Januari 2022",
      desc: "Lorem ipsum",
    },
  ];

  return (
    <section className="bg-[#0F0B36]">
      <div className="max-w-8xl h-screen mx-auto flex flex-col justify-center items-center text-[#F0F0F0]">
        <h1
          style={{
            textShadow:
              "4px 0px 8px rgba(185, 35, 69, 0.5), -4px 0px 8px rgba(199, 126, 19, 0.4)",
          }}
          className="text-center text-6xl font-bold mb-20"
        >
          TIMELINE
        </h1>
        <div className={styles.stepperWrapper}>
          {data.map(({ id, date, desc }) => {
            const completed = id < 3;
            const active = id == 3;

            return (
              <div
                key={id}
                className={`${styles.stepperItem} ${
                  active ? styles.stepperItemActive : ""
                } ${completed ? styles.stepperItemCompleted : ""}`}
              >
                <div
                  className={`text-3xl font-bold mb-5 ${
                    active || completed ? "text-[#ff0070]" : "text-[#d9d9d9]"
                  }`}
                >
                  {date}
                </div>
                <button
                  className={`${styles.stepCounter} ${
                    active ? styles.stepCounterActive : ""
                  } ${completed ? styles.stepCounterCompleted : ""}`}
                >
                  <p className="text-4xl font-bold">{id}</p>
                </button>
                <div
                  className={`text-4xl font-bold ${
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
