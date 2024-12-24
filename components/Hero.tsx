import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col xl:flex-row mb-36">
      <div className="relative w-full h-[500px]">
        <img
          src="/assets/bg-top-video.jpg"
          alt="Home Image"
          className="w-full h-full object-cover"
        />
        <video
          src="/assets/adobestock_365579861.mov"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-6xl font-extralight mb-10">
            INSPIRING DIGITAL TRANSFORMATION
          </h2>
          <p className="text-2xl font-normal max-w-screen-lg text-pretty text-center">
            Innovative software consulting and development with powerful and
            adaptable solutions for your digital success
          </p>
        </div>
      </div>
    </section>
  );
}
