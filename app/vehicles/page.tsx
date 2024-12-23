import React from "react";
import Link from "next/link";

export default function Vehicles() {
  return (
    <div className="box-border">
      <section
        className="bg-[#1A457C] text-white mt-0 flex flex-col items-center p-24 mb-24 bg-no-repeat gap-5"
        style={{
          backgroundImage: "url('assets/vehicl.png')",
          backgroundPosition: "95% 50%",
        }}
      >
        <h2 className="text-4xl font-bold m-auto">CONTRACT VEHICLES</h2>
        <p className="text-2xl font-extralight">
          Value added services to stay a head of the Competition
        </p>
      </section>
      <section className="w-3/4 mx-auto gap-5 flex flex-col mb-24">
        <p className="text-xl font-extralight leading-relaxed">
          We strive to make our services readily accessible for federal and
          state government agencies. Our contract vehicles provide streamlined
          processes and procedures that allow us to quickly turn around task or
          delivery-order proposals and start approved projects quickly.{" "}
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          We support a wide range of federal and state government contract
          vehicles, which are outlined below.
        </p>
      </section>
      <section className="flex flex-col w-3/4 mx-auto gap-20 bg-[#F3F3F3] p-10 rounded-lg">
        <div className="flex flex-row justify-between">
          <Link href="#" className="flex items-center flex-col gap-5">
            <img
              src="assets/cms.jpeg"
              alt="CMS"
              className="w-64 h-64 object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#265b9d]">
              CMS SPARC IDIQ Small
            </h2>
          </Link>
          <Link href="#" className="flex items-center flex-col gap-5">
            <img
              src="assets/images-gsa.png"
              alt="GSA"
              className="w-64 h-64 object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#265b9d]">
              GSA MAS Schedule
            </h2>
          </Link>
          <Link href="#" className="flex items-center flex-col gap-5">
            <img
              src="assets/CIOSP3-small.png"
              alt="CIOSP3"
              className="w-64 h-64 object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#265b9d]">
              NITAAC CIOSP3 Small
            </h2>
          </Link>
        </div>
        <div className="flex flex-row justify-between">
          <Link href="#" className="flex items-center flex-col gap-5">
            <img
              src="assets/CIOSP3-large-350x184.png"
              alt="CIOSP3 Large"
              className="w-64 h-64 object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#265b9d]">
              NITAAC CIOSP3 Large
            </h2>
          </Link>
          <Link href="#" className="flex items-center flex-col gap-5">
            <img
              src="assets/state-md-cat.jpeg"
              alt="STATE MD"
              className="w-64 h-64 object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#265b9d]">
              State of MD CATS+ IDIQ
            </h2>
          </Link>
          <Link href="#" className="flex items-center flex-col gap-5">
            <img
              src="assets/mhbe.jpeg"
              alt="CIOSP3"
              className="w-64 h-64 object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#265b9d]">
              State of MD IT IDIQ
            </h2>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="#" className="gap-5 flex flex-col">
            <img
              src="assets/cms.jpeg"
              alt="CMS"
              className="w-64 h-64 object-contain rounded-lg"
            />
            <h2 className="text-2xl font-bold text-[#265b9d]">
              CMS SPARC IDIQ Large
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
}
