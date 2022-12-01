import React from "react";

function Sponsor() {
  return (
    <section className="max-w-8xl pt-12 mx-auto">
      <h1 className="text-5xl font-bold text-center mb-12">Sponsor</h1>
      <div className="flex items-center justify-evenly gap-y-7 sm:gap-3 flex-wrap">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-500 h-20 basis-[40%] sm:basis-[24%] sm:h-44"
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Sponsor;
