import React from "react"
import Image from "next/image"
import Link from "next/link"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

export default function Footer() {
  return (
   <footer className="mt-auto">
    <div className="flex justify-between items-center p-4 md:p-10 lg:p-20 flex-col gap-8 lg:flex-row flex-wrap">
      <img src="assets/cmmidev.png" alt="CMMI image" />
      <img src="assets/iso-2013.png" alt="ISO-13 image" />
      <img src="assets/iso-2015.png" alt="ISO-15 image" />
      <img src="assets/iso-2018.png" alt="ISO-18 image" />
      <img src="assets/cmmisvc.png" alt="SVC image" />
    </div>
    <div className="pt-24 pb-16 text-white" style={{ background: 'linear-gradient(90deg, #011732 , #4286DA)' }}>
      <div className="mx-auto pl-4 pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 flex items-center justify-between">
            <Image src="/assets/logo.png" alt="Home" width={325} height={100} className="ml-10"/>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-4xl text-center text-balance">Inspiring Innovation in Digital Transformation</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-16">
          <div className="col-span-1 flex-row flex gap-24"></div>
          <div className="col-span-1 flex-row flex gap-24 justify-center">
            <Link href="#" className="flex items-center flex-col gap-2">
              <WorkOutlineIcon fontSize="large"/>
              <h3 className="text-xl font-normal">Careers</h3>
            </Link>
            <Link href="#" className="flex items-center flex-col gap-2">
              <LocationOnIcon fontSize="large"/>
              <h3 className="text-xl font-normal">Locations</h3>
            </Link>
            <Link href="#" className="flex items-center flex-col gap-2">
              <HubOutlinedIcon fontSize="large" />
              <h3 className="text-xl font-normal">Connect</h3>
            </Link>
            <Link href="#" className="flex items-center flex-col gap-2">
              <WorkspacePremiumOutlinedIcon fontSize="large" />
              <h3 className="text-xl font-normal">Certifications</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center flex-row bg-black items-center gap-20">
      <Link href="#" className="text-white py-4 font-thin">Privacy Policy</Link>
      <Link href="#" className="text-white py-4 font-thin">Sustainability Policy</Link>
      <Link href="#" className="text-white py-4 font-thin">Terms of Service</Link>
      <Link href="#" className="text-white py-4 font-thin">Modern Slavery Statement</Link>
      <Link href="#" className="text-white py-4 font-thin">Bussiness Ethics and Compliance Policy</Link>
    </div>
   </footer>
  )
}
