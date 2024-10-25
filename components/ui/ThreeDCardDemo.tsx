"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-row px-10 gap-6">
      <CardContainer className="inter-var flex-1">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[480px] rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full">
            <Image
              src="/assets/capitol-1.jpg"
              height="1000"
              width="1000"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ={20} className="mt-5">
            <h2 className="mb-5 font-bold text-2xl">
              FEDERAL CUSTOMERS
            </h2>
            <ul className="list-inside flex flex-col gap-1">
              <li className="font-thin gap-3">
                <DoneAllIcon /> Centers for Medicare and Medicaid Services
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> Department of Commerce
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> Department of Education
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> Department of Health and Human Services
              </li>
            </ul>
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[480px] rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full">
            <Image
              src="/assets/Maps-p7.jpg"
              height="1000"
              width="1000"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ={20} className="mt-5">
            <h2 className="mb-5 font-bold text-2xl">
              STATE AGENCIES
            </h2>
            <ul className="list-inside flex flex-col gap-1">
              <li className="font-thin gap-3">
                <DoneAllIcon /> Maryland – Health Benefit Exchange
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> Maryland – Department of Human Services
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> Maryland - Department of Health
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> Colorado - Agile Technology Services Vendor Pool
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> Massachusetts – Health Insurance
              </li>
            </ul>
          </CardItem>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[480px] rounded-xl p-6 border">
          <CardItem translateZ="100" className="w-full">
            <Image
              src="/assets/public-p7.jpeg"
              height="1000"
              width="1000"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem translateZ={20} className="mt-5">
            <h2 className="mb-5 font-bold text-2xl">
              OTHER CUSTOMERS
            </h2>
            <ul className="list-inside flex flex-col gap-1">
              <li className="font-thin gap-3">
                <DoneAllIcon /> AISIN Holdings
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> AXIA Consulting
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> Blu Omega
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> CareFirst BlueCross BlueShield
              </li>
              <li className="font-thin gap-3">
                <DoneAllIcon /> CGI Federal
              </li>
            </ul>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
