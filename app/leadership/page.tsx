import React from "react";

export default function Leadership() {
  return (
    <div className="box-border">
      <section
        className="bg-[#1A457C] text-white mt-0 flex flex-col items-center p-24 gap-5 mb-24 bg-no-repeat"
        style={{
          backgroundImage: "url('assets/leader.png')",
          backgroundPosition: "95% 5%",
          backgroundSize: "contain",
        }}
      >
        <h2 className="text-4xl font-bold">LEADERSHIP</h2>
        <p className="text-2xl font-extralight">
          Meet our Bold, passionate and focused leaders whose innovate ideas and
          continuous inspiration bring digital Success to life.
        </p>
      </section>
      <section className="flex flex-col gap-10">
        <h2 className="text-center font-bold text-4xl">EXECUTIVE LEADERSHIP</h2>
        <div className="flex flex-row mt-10 justify-between w-3/4 mx-auto gap-10">
          <div className="flex flex-col items-center gap-2 w-1/2">
            <img
              src="assets/Srini-Leadership-Pic-e1537405796801-1.jpeg"
              alt="Srinivas CEO"
              className="w-40 h-40 object-cover rounded-full"
              style={{ maxWidth: "none" }}
            />
            <h2 className="font-bold text-2xl text-[#0073CF] text-center">
              SRINIVAS CHALLAPALLI
            </h2>
            <h5 className="text-xl text-[#0073CF]">CEO</h5>
          </div>
          <div>
            <p className="text-justify text-xl font-extralight">
              Mr. Challapalli is the founder and CEO of Innosoft. He is
              responsible for the vision and long-term strategy of the company,
              which he has grown from an initial one-person contracting shop to
              a mature and thriving small business delivering to both government
              and commercial clients. He founded Innosoft to provide innovative
              solutions without compromising on quality and reliability, and
              under his leadership it has become an established and reliable
              enterprise engaged in the design, development, and implementation
              of digital solutions and technology services. Mr. Challapalli has
              a bachelor’s degree in Mechanical Engineering and a master’s
              degree in Technology.
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-10 justify-between w-3/4 mx-auto gap-10">
          <div className="flex flex-col items-center gap-2 w-1/2">
            <img
              src="assets/Fred-Leadership-3-28-2022.jpg"
              alt="Fred"
              className="w-40 h-40 object-cover rounded-full"
              style={{ maxWidth: "none" }}
            />
            <h2 className="font-bold text-2xl text-[#0073CF] text-center">
              FRED MILLER
            </h2>
            <h5 className="text-xl text-[#0073CF] text-center">
              Executive Vice President​
            </h5>
          </div>
          <div>
            <p className="text-justify text-xl font-extralight">
              Mr. Miller is Executive Vice President for Program Delivery,
              leading the delivery of digital solutions and services to meet
              customer needs. Mr. Miller has overall 24 years of experience in
              federal contracting, especially the past 10 years as a Program
              Manager and Solutions Architect with responsibility for the
              performance of projects at multiple government agencies, most
              notably Maryland Staffing Contracts (MD MDTHINK, MDH MMT, MD MHBE,
              MD DOIT Agile team resources) and Centers for Medicare and
              Medicaid Services (CMS).{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-10 justify-between w-3/4 mx-auto gap-10">
          <div className="flex flex-col items-center gap-2 w-1/2">
            <img
              src="assets/J-Lombardozzi-e1607047520584.jpeg"
              alt="Joseph"
              className="w-40 h-40 object-cover rounded-full"
              style={{ maxWidth: "none" }}
            />
            <h2 className="font-bold text-2xl text-[#0073CF] text-center">
              JOSEPH LOMBARDOZZI
            </h2>
            <h5 className="text-xl text-[#0073CF] text-center">
              Executive Vice President
            </h5>
          </div>
          <div>
            <p className="text-justify text-xl font-extralight">
              Mr. Lombardozzi is Executive Vice President for Business
              Development and Strategic Growth. Mr. Lombardozzi has over 30
              years of Health IT solutions and analytics expertise, and he has
              spent more than 20 years assisting federal healthcare agencies
              with solving complex business problems. He brings experience in
              managing and overseeing the delivery of more than 25 Health
              Information Technology and Analytic solutions and studies to
              healthcare customers. Prior to joining Innosoft, Mr. Lombardozzi
              has worked with CGI Federal, Truven Health Analytics, IBM Watson
              Health and Qlarant in various capacities. His rich experience in
              Business Development and Health IT helps Innosoft drive
              innovation, business growth, and partnerships.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
