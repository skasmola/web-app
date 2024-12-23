import React from "react";
import { ArrowRight } from "@mui/icons-material";

export default function Internship() {
  return (
    <div className="box-border">
      <section className="p-24 bg-[#1A457C] gap-5 flex flex-col mb-24">
        <h2 className="text-white text-center text-4xl font-bold">
          HBCU Internship Program
        </h2>
        <p className="text-white text-xl font-extralight text-center">
          Innovate, implement, improve and Inspire technology solutions with
          Innosoft.
        </p>
      </section>
      <section className="w-3/4 mx-auto flex flex-col gap-10 mb-24">
        <p className="text-xl font-extralight leading-relaxed">
          Innosoft is seeking sharp, personable, highly organized STEM interns
          who are looking for the opportunity to grow their technical and
          professional skills while building towards a career in technology. We
          offer meaningful, impactful assignments that include team building and
          career development opportunities.{" "}
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          Interns focus on multiple areas of Innosoft’s business, based on
          availability of positions, the interviewer’s assessment, and the
          applicant’s preference. Internship assignments, typically 10 to 12
          weeks in length, are dynamic and challenging based on the business
          needs and the type of work required.{" "}
        </p>
        <p className="text-xl font-extralight leading-relaxed">
          Interns have significant exposure to key IT and software business
          leaders to accelerate learning and development. Part-time internships
          are available; however, preference may be given to full-time
          candidates.{" "}
        </p>
        <div className="mt-5 bg-[#1A457C] p-10 rounded-xl">
          <p className="text-white font-bold text-center text-xl">
            Applicants for intern positions must be undergraduates or graduate
            students who are enrolled (or have been enrolled within the past 12
            months) at an HBCU.{" "}
          </p>
        </div>
      </section>
      <section className="w-3/4 mx-auto flex flex-row gap-10 mb-24">
        <div className="w-1/2">
          <img src="/assets/Response.png" alt="Responsibilities" />
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <h2 className="font-bold text-4xl">RESPONSIBILITIES</h2>
          <ul className="font-extralight text-xl leading-relaxed text-justify">
            <li>
              <ArrowRight fontSize="large" />
              Participate in a 10-12-week internship program
            </li>
            <div className="flex flex-row">
              <ArrowRight fontSize="large" />
              <li>
                Apply college learning and implement innovative solutions to
                real-world challenges
              </li>
            </div>
            <li>
              <ArrowRight fontSize="large" />
              Participate in team meetings and group project reviews
            </li>
            <li>
              <ArrowRight fontSize="large" />
              Think flexibly and employ innovative solutions
            </li>
            <li>
              <ArrowRight fontSize="large" />
              Take initiative to solve problems creatively
            </li>
            <div className="flex flex-row">
              <ArrowRight fontSize="large" />
              <li>
                Work on a variety of tasks, shift easily from one task to
                another, and complete in a timely manner
              </li>
            </div>
            <li>
              <ArrowRight fontSize="large" />
              Organize and prioritize work
            </li>
            <div className="flex flex-row">
              <ArrowRight fontSize="large" />
              <li>
                Demonstrate a passion for learning and openness to feedback and
                direction
              </li>
            </div>
            <div className="flex flex-row">
              <ArrowRight fontSize="large" />
              <li>
                Contribute to work on real projects with experienced employees
                and have a direct impact on the company
              </li>
            </div>
          </ul>
        </div>
      </section>
      <section className="w-3/4 mx-auto flex gap-5">
        <div className="flex flex-col gap-5 w-1/2">
          <h2 className="font-bold text-4xl">DESIRED SKILLS</h2>
          <ul className="font-extralight text-xl leading-relaxed text-justify">
            <div className="flex flex-row">
              <ArrowRight fontSize="large" />
              <li>
                <b className="font-semibold">
                  Information Technology, Cloud Engineer.
                </b>{" "}
                We seek a Cloud Engineer that has understanding in Amazon Web
                Services, Web Development, Software Engineering, Continuous
                Integration / Continuous Deployment, and Infrastructure as Code.
              </li>
            </div>
            <div className="flex flex-row">
              <ArrowRight fontSize="large" />
              <li>
                <b className="font-semibold">Proposal Development.</b> We seek a
                Technical Writer and Business Development Professional, to
                assist with the various tasks that support successful business
                growth.
              </li>
            </div>
            <div className="flex flex-row">
              <ArrowRight fontSize="large" />
              <li>
                <b className="font-semibold">Information Technology, Tester.</b>{" "}
                We seek an information technology professional with experience
                in developing and executing test scripts.
              </li>
            </div>
          </ul>
        </div>
        <div className="w-1/2">
          <img src="/assets/Desired.png" alt="Desired Skills" />
        </div>
      </section>
    </div>
  );
}
