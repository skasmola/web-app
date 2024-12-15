import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Services() {
  return (
    <div className="box-border">
      <section
        className="bg-[#1A457C] text-white mt-0 flex flex-row items-center p-24 mb-24 bg-no-repeat"
        style={{
          backgroundImage: "url('assets/services-icon.png')",
          backgroundPosition: "95% 50%",
          backgroundSize: "225px",
        }}
      >
        <h2 className="text-4xl font-bold m-auto">SERVICES</h2>
      </section>
      <section className="w-3/4 flex items-center mx-auto pb-12">
        <p className="text-justify text-xl font-extralight leading-relaxed">
          Innosoft provides software development and digital services that
          embrace innovation and enable organizations to operate, innovate and
          scale business, by leveraging cutting-edge technologies, top talent
          and cross-industry expertise. We lead the digital transformation of
          our clients through custom software development services and agile
          methodologies. Our services have been addressing the needs of
          industries such as healthcare, financial services, insurance, telecom,
          retail, transportation, manufacturing, and all levels of the
          government for more than 20 years. Our key business objectives are:
        </p>
      </section>
      <section
        className="h-36 bg-[#1A457C] bg-no-repeat mb-24"
        style={{
          backgroundImage: "url('assets/testing.png')",
          backgroundPosition: "center center",
        }}
      ></section>
      <section className="flex items-center flex-col w-3/4 mx-auto gap-10 mb-24">
        <h2 className="text-4xl font-bold ">
          MODERNIZE —Build software that transforms business
        </h2>
        <p className="text-xl font-extralight leading-relaxed">
          The journey to business transformation requires an understanding of
          what digital transformation and legacy IT modernization means to the
          organization.
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          We work with our Customers to develop a comprehensive evaluation of
          software development strategy and software architecture to help build
          the solution together. We help create, modernize, and reinvent
          Customer line of business applications to not only meet the business
          objectives but surpass them. Whether building customer-facing web and
          mobile applications, migrating critical business systems to the cloud,
          optimizing user experience to improve adoption and minimize churn,
          Innosoft’s software development services help to bring vision and
          ideas to market quickly and efficiently.
        </p>
      </section>
      <section
        className="h-36 bg-[#1A457C] bg-no-repeat mb-24"
        style={{
          backgroundImage: "url('assets/web-dev-1.png')",
          backgroundPosition: "center center",
        }}
      ></section>
      <section className="flex items-center flex-col w-3/4 mx-auto gap-10 mb-24">
        <h2 className="text-4xl font-bold leading-relaxed">
          EXPAND —Scale software development on demand to increase business
          agility
        </h2>
        <p className="text-xl font-extralight leading-relaxed">
          The start of a development project is associated with a number of
          unknowns such as scope, roles and technology expertise required to
          complete it. With Innosoft’s dedicated software development team that
          is proficient in making assumptions on the competence and skills
          needed, Customers gain access to a resource pool that helps to reduce
          uncertainty by enabling to scale the project on-demand and have
          granular visibility into timelines and cost management.
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          We work with our Customers to develop a comprehensive evaluation of
          software development strategy and software architecture to help build
          the solution together. We help create, modernize, and reinvent
          Customer line of business applications to not only meet the business
          objectives but surpass them. Whether building customer-facing web and
          mobile applications, migrating critical business systems to the cloud,
          optimizing user experience to improve adoption and minimize churn,
          Innosoft’s software development services help to bring vision and
          ideas to market quickly and efficiently.
        </p>
      </section>
      <section
        className="h-36 bg-[#1A457C] bg-no-repeat mb-24"
        style={{
          backgroundImage: "url('assets/AdobeStock_405065784.png')",
          backgroundPosition: "center center",
          backgroundSize: "contain",
        }}
      ></section>
      <section className="flex items-center flex-col w-3/4 mx-auto gap-10 mb-24">
        <h2 className="text-4xl font-bold leading-relaxed">
          SUSTAIN —Consultation and support for your core business IT services
        </h2>
        <p className="text-xl font-extralight leading-relaxed">
          Our team of technologists is available to consult and support our
          Customer Organizations in keeping up with modern technology by
          applying sustainable value through continuous upgrade and improvement
          of systems and applications.
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          From adopting automation technologies and creating self-managed IT
          environments to implementing autoscaling solutions that can lower
          costs and guarantee uptime, we have the experience and expertise to
          handle the IT services needs with understanding and professionalism.
          Powered by the principles of Agile, DevOps and Continuous integration
          and delivery, our team’s approach to design, deployment and monitoring
          the entire IT ecosystem helps reduce operational costs, enhance
          security and standards-compliance, and enables to reallocate valuable
          resources to strategic business initiatives.
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          Our customized, SLA-based and quality metrics driven services provide
          transparency and in-depth insight into how we work. We maintain
          constant communication and seek feedback and approval on every step of
          the way.
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          We work in partnership with our Customers to deliver creative,
          innovative, and flexible solutions that are robust, secure, efficient,
          dependable, and to specification. Please refer to our Service Areas
          for our unique approaches to implementing them.
        </p>
      </section>
      <div className="flex items-center flex-col">
        <AnimatedSubscribeButton
          buttonColor="#265B9D"
          buttonHoverColor="#0F1F3E"
          buttonTextColor="#ffffff"
          text={
            <span className="group inline-flex items-center text-md">
              CONNECT{" "}
              <ChevronRightIcon
                fontSize="medium"
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          }
        />
      </div>
    </div>
  );
}
