import React from "react";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";

export default function Customers() {
  return (
    <section className="flex justify-center mt-20 items-center flex-col">
      <div className="text-4xl font-bold">Our Customers</div>
      <div className="text-2xl font-extralight mt-10">
        20+ years serving government agencies and commercial enterprises
      </div>
      <ThreeDCardDemo />
    </section>
  );
}
