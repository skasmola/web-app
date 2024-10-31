"use client"

import React from "react";
import Slider from "react-slick";

export default function Insights() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <section className="mt-20 flex flex-col items-center gap-10">
      <div>
        <h2 className="text-4xl font-bold">Insights</h2>
      </div>
      <div className="text-2xl font-extralight">
        Thought-provoking insights, case studies, and articles from our experts 
      </div>
      <div className="w-3/4 mb-10">
        <Slider {...settings} className="flex gap-4">
          <div className="relative h-64">
              <img
                src="/assets/Increasing.jpeg"
                alt="#"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <p className="text-white text-2xl font-bold">jdbfj vjwbvweufeiwf</p>
              </div>
          </div>
          <div className="w-full relative h-64">
              <img
                src="/assets/Increasing.jpeg"
                alt="#"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <p className="text-white text-2xl font-bold">jdbfj vjwbvweufeiwf</p>
              </div>
          </div>
          <div className="w-full relative h-64 p-4 bg-white">
              <img
                src="/assets/Increasing.jpeg"
                alt="#"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <p className="text-white text-2xl font-bold">jdbfj vjwbvweufeiwf</p>
              </div>
          </div>
          <div className="w-full relative h-64">
              <img
                src="/assets/Increasing.jpeg"
                alt="#"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <p className="text-white text-2xl font-bold">jdbfj vjwbvweufeiwf</p>
              </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}
