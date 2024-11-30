import React from "react";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";

export default function Partner(){
  return (
    <section className="mt-20 flex flex-col gap-10 items-center">
      <div>
        <h2 className="text-4xl font-bold">Partner with us</h2>
      </div>
      <div className="text-2xl font-extralight">
        Collaborate with us to deliver creative strategies and innovative technologies for digital transformation.
      </div>
      <div className="w-3/4 mb-10 bg-[#265B9D] text-white flex flex-row rounded-xl overflow-hidden">
        <div className="w-1/2">
          <img src="assets/partners-final.jpg" alt="Partners" />
        </div>
        <div className="w-1/2 flex flex-col">
          <p className="text-justify p-5 font-extralight text-lg">At Innosoft Corporation, we understand the value of Team Effort. We approach each and every project with the understanding that absolute success can be achieved only through close collaboration with our customers, business partners and staff. At Innosoft, we value our many alliances and promote the spirit of Teaming in all that we do.</p>
          <div className="p-5">
            <AnimatedSubscribeButton 
              buttonColor="#71CAF2"
              buttonTextColor="#FFF"
              buttonHoverColor="#000"
              text="Learn More"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
