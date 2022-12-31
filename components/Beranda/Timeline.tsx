import Image from "next/image";

function Timeline() {
  return (
    <div className="w-full">
      <Image
        src="/beranda/timeline/arrow.svg"
        alt="arrow bg"
        width={1000}
        height={1000}
        className="w-[90%] mx-auto"
      />
    </div>
  );
}

export default Timeline;
