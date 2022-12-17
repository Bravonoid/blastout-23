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
  ];

  return (
    <section className="max-w-8xl mx-auto py-14">
      <h1 className="text-center text-4xl font-bold mb-8">TIMELINE</h1>
      <div className="w-full flex justify-between items-center">
        {data.map(({ id, date, desc }) => (
          <div
            key={id}
            className="flex items-center font-semibold flex-col space-y-2"
          >
            <h1 className="text-xl">{date}</h1>
            <div className="w-10 h-10 rounded-full border-2"></div>
            <p className="text-2xl">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
