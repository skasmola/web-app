import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div className="box-border">
      <section
        className="bg-[#1A457C] text-white mt-0 flex flex-col items-center p-24 mb-24 bg-no-repeat gap-5"
        style={{
          backgroundImage: "url('assets/contact.png')",
          backgroundPosition: "95% 50%",
        }}
      >
        <h2 className="text-4xl font-bold m-auto">CONTACT US</h2>
        <p className="text-2xl font-extralight">
          Transform the way you do Business with our Innovative Solutions.
        </p>
      </section>
      <section className="w-3/4 mx-auto gap-10 flex flex-col mb-24">
        <h2 className="text-5xl font-semibold">How can we help you?</h2>
        <p className="text-2xl font-extralight">
          We welcome the opportunity to discuss our solutions with you. Please
          feel free to <b className="font-bold text-[#1A457C]">contact us.</b>
        </p>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-md rounded-lg w-1/2 p-2.5"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-md rounded-lg w-1/2 p-2.5"
              required
              placeholder="john.doe@email.com"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">Subject</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-md rounded-lg w-1/2 p-2.5"
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-xl font-semibold">
              Your message (optional)
            </label>
            <textarea
              id="message"
              rows={4}
              className="p-2.5 w-1/2 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex flex-col mt-5">
            <input
              type="submit"
              value="Submit"
              className="bg-[#1A457C] w-1/6 p-2.5 rounded-xl text-white border border-transparent hover:border-[#1A457C] hover:bg-white hover:text-[#1A457C] transition-all duration-300"
            />
          </div>
        </form>
      </section>
      <h2 className="text-5xl font-semibold w-3/4 mx-auto mb-10">Locations</h2>
      <section className="w-3/5 mx-auto flex flex-col gap-10 border p-10 rounded-xl border-gray-200 mb-24">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-[#265B9D] text-2xl font-semibold">
              Corporate Office
            </h2>
            <div className="flex flex-row items-center gap-2">
              <PlaceIcon fontSize="large" />
              <a className="mt-5 font-extralight text-xl">
                Innosoft Corporation, <br /> PO BOX 4937, <br /> Scottsdale{" "}
                <br /> AZ 85018 <br />
              </a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon fontSize="large" className="mt-5" />
              <a className="mt-5 font-extralight text-xl">(573) 230-1625</a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaxIcon fontSize="large" className="mt-5" />
              <a className="mt-5 font-extralight text-xl">(240) 348-2407</a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <EmailIcon className="mt-5" />
              <a
                href="mailto:Contact@innosoft.com"
                className="mt-5 font-extralight text-xl"
              >
                Contact@innosoft.com
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[#265B9D] text-2xl font-semibold">
              Maryland Office
            </h2>
            <div className="flex flex-row items-center gap-2">
              <PlaceIcon fontSize="large" />
              <a className="mt-5 font-extralight text-xl">
                Innosoft Corporation, <br /> 7127 Ambassador Road, <br /> Suite
                100 Windsor Mill, <br /> MD 21244 <br />
              </a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon fontSize="large" className="mt-5" />
              <a className="mt-5 font-extralight text-xl">(443) 967-5081</a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaxIcon fontSize="large" className="mt-5" />
              <a className="mt-5 font-extralight text-xl">(240) 348-2407</a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <EmailIcon className="mt-5" />
              <a
                href="mailto:Contact@innosoft.com"
                className="mt-5 font-extralight text-xl"
              >
                Contact@innosoft.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-5xl font-semibold w-3/4 mx-auto mb-10">Call Us</h2>
      <section className="w-3/4 mx-auto flex flex-col gap-10 border p-10 rounded-xl border-gray-200 mb-24">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-[#265B9D] text-2xl font-semibold">
              HR & Job Opportunities
            </h2>
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon fontSize="large" className="mt-5" />
              <a className="mt-5 font-extralight text-xl">(623)-282-1830</a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <EmailIcon className="mt-5" />
              <a
                href="mailto:hr@innosoft.com"
                className="mt-5 font-extralight text-xl"
              >
                hr@innosoft.com
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[#265B9D] text-2xl font-semibold">
              Maryland Office
            </h2>
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon fontSize="large" className="mt-5" />
              <a className="mt-5 font-extralight text-xl">(573)-230-1625</a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <EmailIcon className="mt-5" />
              <a
                href="mailto:bd@innosoft.com"
                className="mt-5 font-extralight text-xl"
              >
                bd@innosoft.com
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[#265B9D] text-2xl font-semibold">
              General Inquiries and Main Office Address
            </h2>
            <div className="flex flex-row items-center gap-2">
              <PlaceIcon fontSize="large" />
              <a className="mt-5 font-extralight text-xl">
                Innosoft Corporation, <br /> 7127 Ambassador Road, Suite 100
                Windsor Mill, <br /> MD 21244 <br />
              </a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon fontSize="large" className="mt-5" />
              <a className="mt-5 font-extralight text-xl">(443) 967-5081</a>
            </div>
            <div className="flex flex-row items-center gap-2">
              <EmailIcon className="mt-5" />
              <a
                href="mailto:Staff@innosoft.com"
                className="mt-5 font-extralight text-xl"
              >
                Staff@innosoft.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
