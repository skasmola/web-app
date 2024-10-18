import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col xl:flex-row">
      <div className="w-full">
        <Image
          src="/assets/bg-top-video.jpg"
          alt="Top-picture"
          layout="responsive"
          width={100}
          height={100}
          fill
        />
      </div>
    </section>
  );
}
