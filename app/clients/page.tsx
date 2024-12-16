import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function clients() {
  return (
    <div className="box-border">
      <section
        className="bg-[#1A457C] text-white mt-0 flex flex-col items-center p-24 mb-24 bg-no-repeat gap-5"
        style={{
          backgroundImage: "url('assets/clients.png')",
          backgroundPosition: "95% 50%",
        }}
      >
        <h2 className="text-4xl font-bold m-auto">CLIENTS</h2>
        <p className="text-2xl font-extralight">
          Innovate, implement, improve and Inspire technology solutions with
          Innosoft.
        </p>
      </section>
      <section className="flex flex-col items-center gap-5 w-3/4 mx-auto mb-24">
        <p className="text-xl font-extralight leading-relaxed">
          At Innosoft Corporation, we understand the value of team effort. We
          approach each and every project with the understanding that success
          can be achieved only through close collaboration with our customers,
          business partners, and staff. At Innosoft, we value our many
          alliances, and we work hard promote the spirit of teaming in all that
          we do.{" "}
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          Innosoft’s customer base represents a wide range of industries. Over
          the years we have worked closely with our clients in government
          agencies, commercial businesses, and Fortune 500 companies – enabling
          them to achieve their business and technological goals. Clients we
          support include:{" "}
        </p>
      </section>
      <section className="flex w-3/4 mx-auto flex-row gap-5">
        <div className="flex flex-col gap-5">
          <img
            src="assets/capitol-1.jpg"
            alt="Capitol"
            className="rounded-md"
          />
          <h2 className="text-2xl font-bold text-center">FEDERAL CUSTOMERS</h2>
          <ul>
            <li className="text-lg font-extralight flex">
              <KeyboardArrowRightIcon fontSize="large" /> Centers for Medicare
              and Medicaid Services
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Department of Commerce
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Department of Education
            </li>
            <li className="text-lg font-extralight flex">
              <KeyboardArrowRightIcon fontSize="large" />
              Department of Health and Human Services
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              National Endowment for the Arts
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <img
            src="assets/public-p7.jpeg"
            alt="Public"
            className="rounded-md"
          />
          <h2 className="text-2xl font-bold text-center">OTHER CUSTOMERS</h2>
          <ul>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" /> AISIN Holdings
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              AXIA Consulting
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Blu Omega
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              CareFirst BlueCross BlueShield
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              CGI Federal
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Cleveland Cliffs
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Computer Sciences Corporation
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Deloitte Consulting LLP
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              IBM Global Services
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Lockheed Martin
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Northrop Grumman
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Penske
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              OptumServe
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Siebel Systems
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Tata Consultancy Services
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Teradata
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              United Services Automobile Association
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Verizon
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <img src="assets/Maps-p7.jpg" alt="Capitol" className="rounded-md" />
          <h2 className="text-2xl font-bold text-center">STATE AGENCIES</h2>
          <ul>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Maryland – Health Benefit Exchange
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Maryland – Department of Human Services
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Maryland - Department of Health
            </li>
            <li className="text-lg font-extralight flex">
              <KeyboardArrowRightIcon fontSize="large" />
              Colorado - Agile Technology Services Vendor Pool
            </li>
            <li className="text-lg font-extralight flex items-center">
              <KeyboardArrowRightIcon fontSize="large" />
              Massachusetts – Health Insurance Exchange
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
