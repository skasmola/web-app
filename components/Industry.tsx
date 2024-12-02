"use client";

import React from "react";
import Slider from "react-slick";

export default function Industry() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
    <section className="mt-20 flex flex-col items-center gap-10">
      <div>
        <h2 className="text-4xl font-bold">Industry</h2>
      </div>
      <div className="text-2xl font-extralight">
        Working closely with partners across the ecosystem helps us innovate at
        scale and see around the next big corner
      </div>
      <div className="w-3/4 mb-10">
        <Slider {...settings}>
          <div className="flex items-center p-4">
            <img src="assets/acq.png" alt="Image 1" className="mr-10" />
          </div>
          <div className="flex items-center justify-center p-4">
            <img src="assets/agi.png" alt="Image 2" className="ml-10" />
          </div>
          <div className="p-4 flex ">
            <img src="assets/aw.png" alt="Image 3" />
          </div>
          <div className="p-4 flex items-center">
            <img src="assets/hi.png" alt="Image 4" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
