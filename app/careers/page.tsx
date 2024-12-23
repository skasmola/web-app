import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Careers() {
  return (
    <div className="box-border">
      <section className="p-52 flex flex-col items-center relative mb-8 gap-10">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="assets/adobestock_80559018.mov" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-5"></div>
        <h2 className="text-5xl font-bold m-auto z-10 text-white">
          WORK SMART. DO GOOD.
        </h2>
        <p className="text-4xl font-extralight text-white z-10">
          Build your future while shaping the technology of tomorrow
        </p>
      </section>
      <section className="flex flex-col items-center gap-4 w-3/4 mx-auto mb-24">
        <h2 className="text-4xl font-bold">Innovation is our passion</h2>
        <p className="text-center text-xl font-extralight leading-relaxed">
          At Innosoft, we are passionate about fostering innovation. We build.
          We design. We code. We consult. We invent. We collaborate. We think
          along with clients. Not just to do something better, but to attempt
          things we’ve never thought possible.{" "}
        </p>
        <p className="text-center text-xl font-extralight leading-relaxed">
          {" "}
          We put people first, with a critical focus on co-creation,
          co-execution, and co-operation. We work smart to lead in this new era
          of technology and work with our mission-focused customers to solve
          some of the world’s most challenging problems.{" "}
        </p>
        <a href="/current-openings" className="mt-5">
          <button className="bg-gray-500 px-5 py-2 rounded-lg text-white hover:bg-gray-700">
            Search Current Openings
          </button>
        </a>
      </section>
      <section className="bg-[#1A457C] p-5 flex flex-col items-center gap-7 mb-24">
        <h2 className="text-white font-bold text-2xl">Benefits at Innosoft</h2>
        <p className="font-extralight text-white text-lg">
          As part of the Innosoft family, employees enjoy substantial benefits
          and a workplace that fosters creativity, leadership, and continual
          growth.
        </p>
        <div className="flex flex-row w-3/4 mx-auto justify-between p-5">
          <ul className="text-white gap-1 flex flex-col font-extralight">
            <li>
              <ArrowRightIcon />
              Medical Insurance
            </li>
            <li>
              <ArrowRightIcon />
              Dental Insurance
            </li>
            <li>
              <ArrowRightIcon />
              Vision Insurance
            </li>
          </ul>
          <ul className="text-white gap-1 flex flex-col font-extralight">
            <li>
              <ArrowRightIcon />
              Paid Time Off
            </li>
            <li>
              <ArrowRightIcon />
              Federal Holidays
            </li>
            <li>
              <ArrowRightIcon />
              401K Qualified Retirement Plan
            </li>
          </ul>
          <ul className="text-white gap-1 flex flex-col font-extralight">
            <li>
              <ArrowRightIcon />
              Short Term Disability Income Insurance (STD)
            </li>
            <li>
              <ArrowRightIcon />
              Long Term Disability Income Insurance (LTD)
            </li>
            <li>
              <ArrowRightIcon />
              Employee Life and Accidental Death & Dismemberment Insurance
              (AD&D)
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-start w-3/4 mx-auto gap-10">
        <h2 className="text-4xl font-bold">
          Innosoft’s Equal Employment Opportunity Commitment
        </h2>
        <p className="text-justify font-extralight text-xl leading-relaxed">
          Innosoft is an Equal Opportunity/Affirmative Action employer. We
          consider diversity and inclusiveness to be core to our culture, and
          central to our commitment to fostering an empowering and supportive
          workplace. All qualified applicants will receive consideration for
          employment without regard to race, color, religion, sex, national
          origin, sexual orientation, gender identity, disability, protected
          veteran status, or any other protected class. We value respect and
          dignity for all people, encourage diversity and diverse opinions,
          promote equal opportunity for all, and work to foster an inclusive and
          ethical culture. We foster diverse thinking by creating an environment
          where everyone feels relevant and part of a shared mission to express
          their unique viewpoints. Innosoft is multigenerational workforce that
          recognizes and accommodates multiple generations and promotes
          diversity and inclusion.
        </p>
      </section>
    </div>
  );
}
