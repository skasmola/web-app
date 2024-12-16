import React from "react";

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
        <p className="text-2xl font-extralight">Innovate, implement, improve and Inspire technology solutions with Innosoft.</p>
      </section>
      <section className="flex flex-col items-center gap-5 w-3/4 mx-auto mb-24">
        <p className="text-xl font-extralight leading-relaxed">At Innosoft Corporation, we understand the value of team effort. We approach each and every project with the understanding that success can be achieved only through close collaboration with our customers, business partners, and staff. At Innosoft, we value our many alliances, and we work hard promote the spirit of teaming in all that we do. </p>
        <p className="text-xl font-extralight leading-relaxed">Innosoft’s customer base represents a wide range of industries. Over the years we have worked closely with our clients in government agencies, commercial businesses, and Fortune 500 companies – enabling them to achieve their business and technological goals. Clients we support include: </p>
      </section>
    </div>
  )
}
