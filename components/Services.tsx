"use client";
import { SERVICES } from "@/constants";
import React, { MutableRefObject, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function Services() {
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex px-20">
      <button onClick={previous}>
        <ArrowBackIos sx={{ color: "#265B9D" }} fontSize="large" />
      </button>
      <div className="w-3/4 m-auto">
        <Slider {...settings} ref={sliderRef}>
          {SERVICES.map((service) => (
            <div
              className="bg-white text-black rounded-xl justify-center items-center !flex !flex-row"
              key={service.name}
            >
              <div className="rounded-t-xl w-1/2">
                <img
                  src={service.image}
                  alt="services_image"
                  className="w-80"
                />
              </div>

              <div className="w-1/2 flex flex-col gap-6">
                <h2 className="font-bold text-4xl">{service.name}</h2>
                <p className="font-extralight items-center justify-center text-justify">
                  {service.description}
                </p>
                <button className="bg-[#265B9D] px-6 py-2 text-white rounded-md w-fit cursor-pointer">
                  <a href={service.href}>Learn More</a>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button onClick={next}>
        <ArrowForwardIos sx={{ color: "#265B9D" }} fontSize="large" />
      </button>
    </div>
  );
}
