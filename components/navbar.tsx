import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  return (
    <nav className="flex justify-between max-container padding-container relative z-30 p-5 shadow-md">
      <Link href="/">
        <Image src="/assets/logo.png" height={40} width={250} alt="Logo" />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-black text-lg font-extralight cursor-pointer transition-all hover:text-[#265B9D] hover:font-bold flex items-center justify-center mt-1"
            style={{}}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="relative hidden lg:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="search"
          placeholder="Search..."
          className="border-2 border-gray-300 pl-10 pr-4 py-2 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <button className="bg-[#265B9D] text-white font-bold rounded-xl px-4 py-2 transition hover:bg-[#0F1F3E] flex items-center">
          CONNECT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
