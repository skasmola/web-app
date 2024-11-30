import React from "react";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";

export default function Careers(){
  return (
    <section className="mt-20 flex flex-col gap-10 items-center">
      <div>
        <h2 className="text-4xl font-bold">Careers</h2>
      </div>
      <div className="text-2xl font-extralight">
        Every Innosoft employee inspires innovation in our client’s digital transformation.
      </div>
      <div className="w-3/4 mb-10 flex flex-row overflow-hidden rounded-xl">
        <div className="w-1/2 bg-[#265B9D]">
          <p className="text-justify text-white font-extralight text-lg p-5">Innosoft is seeking sharp, personable, highly organized STEM interns who are looking for the opportunity to grow their technical and professional skills while building a career with unlimited potential. We offer meaningful, impactful assignments that includes team building, career development opportunities in healthcare IT, and more!</p>
          <div className="p-5">
            <AnimatedSubscribeButton 
              buttonColor="#71CAF2"
              buttonTextColor="#FFF"
              buttonHoverColor="#000"
              text="Learn More"
            />
          </div>
        </div>
        <div className="w-1/2">
          <img src="assets/home-side.jpg" alt="Home side"/>
        </div>
      </div>
    </section>
  )
}
