import React from "react";

export default function CurrentOpenings() {
  return (
    <div className="box-border">
      <section
        className="bg-[#1A457C] text-white mt-0 flex flex-col items-center p-24 mb-24 bg-no-repeat gap-5"
        style={{
          backgroundImage: "url('/assets/opening.png')",
          backgroundPosition: "95% 50%",
        }}
      >
        <h2 className="text-4xl font-bold m-auto">CURRENT OPENINGS</h2>
        <p className="text-2xl font-extralight">
          Innovate, implement, improve and Inspire technology solutions with
          Innosoft.
        </p>
      </section>
      <section className="w-3/4 mx-auto flex flex-row gap-10 mb-24">
        <div className="w-1/4">
          <div className="relative">
            <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="" selected>
                Select Location
              </option>
              <option value="arizona">Arizona</option>
              <option value="dc">Washington DC</option>
              <option value="maryland">Maryland</option>
              <option value="remote">Remote</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>
        <div className="w-1/4">
          <div className="relative">
            <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="" selected>
                Select Category
              </option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>
        <div className="w-1/4">
          <div className="relative">
            <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
              <option value="" selected>
                Select Job Type
              </option>
              <option value="fulltime">Full Time</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>
          </div>
        </div>
        <button className="bg-[#265B9D] text-white py-2 px-5 rounded-lg w-1/6">
          Reset
        </button>
        <button className="bg-[#265B9D] text-white py-2 px-5 rounded-lg w-1/6">
          Filter
        </button>
      </section>
      {/* Jobs API */}
    </div>
  );
}
