"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function Kudos() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="mt-20 flex flex-col items-center gap-10">
      <div>
        <h2 className="text-4xl font-bold">Customer Kudos</h2>
      </div>
      <div className="text-2xl font-extralight">
        Earning customers’ trust through our passion for excellence
      </div>
      <div className="w-3/4 m-auto text-center bg-[#265B9D] text-white rounded-2xl pt-10 px-10">
        <div className="w-full mb-10">
          <Slider {...settings}>
            <div>
              <h2>
                Innosoft’s seamless transition and proven structured project
                management processes achieved the mission critical requirements
                of the Health Insurance Exchange on time and within budget.
              </h2>
              <p className="mt-8 text-yellow-400">MHBE CIO</p>
            </div>
            <div>
              <h2>
                I commend Innosoft for their pivotal role in platform
                development, stakeholder communications, collaborations and
                continuous improvements that boosted Quality, efficiency, and
                Control of this successful large-scale, integrated Cloud-based
                SAFe Agile delivery program.
              </h2>
              <p className="mt-8 text-yellow-400">MDTHINK CTO</p>
            </div>
            <div>
              <h2>
                Innosoft’s high-value contributions helped the EBS CRM
                implementation be delivered on time while meeting technical
                challenges and delivery constraints of a program of this
                magnitude and scope.
              </h2>
              <p className="mt-8 text-yellow-400">
                DoED EDCAPS Program Director
              </p>
            </div>
            <div>
              <h2>
                Innosoft is very well organized with clearly defined processes
                and tools to efficiently manage Work Order activities that makes
                their response to any issue streamlined and fast with high
                degree of control and consistency.
              </h2>
              <p className="mt-8 text-yellow-400">DHS IT Compliance Director</p>
            </div>
            <div>
              <h2>
                I appreciate the cooperative spirit and the attention to detail
                that enabled us to streamline the entire process in order to
                achieve success and to meet our goals. I, along with the entire
                senior management team, would like to express my deep gratitude
                to each and every one of you.
              </h2>
              <p className="mt-8 text-yellow-400">Medicaid Project Manager</p>
            </div>
          </Slider>
        </div>
        <div className="w-full flex justify-center">
          <Image
            src="/assets/kudos.jpg"
            width={800}
            height={560}
            alt="Kudos"
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
