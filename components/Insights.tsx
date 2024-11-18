"use client"

import React from "react";
import Slider from "react-slick";

export default function Insights() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
  }

  return (
    <section className="mt-20 flex flex-col items-center gap-10">
      <div>
        <h2 className="text-4xl font-bold">Insights</h2>
      </div>
      <div className="text-2xl font-extralight">
        Thought-provoking insights, case studies, and articles from our experts 
      </div>
      <div className="w-3/4 mb-10">
        <Slider {...settings}>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="/assets/Increasing.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">INCREASING ENGAGEMENT THROUGH ACCESSIBLE AND PLAIN LANGUAGE CONTENT</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_289122550-scaled.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">SSO WITH VPN</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_300359171-scaled.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold">FHIR® at Innosoft Labs</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_314513219-scaled.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">AGILE WEB DEVELOPEMENT SOLUTIONS</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_353280930-scaled.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">DATA ENRICHMENT AND ANALYTICS</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_374721430-scaled.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">MODERNIZE ANALYTICS USING DATA PIPELINE ENGINEERING</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_209021879-scaled-1.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">AWS CLOUD MIGRATION OF DATA ASSETS</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="/assets/Increasing.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">IDENTITY AND ACCESS MANAGEMENT FOR BETTER SECURITY</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_289122550-scaled.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">CONTENT MANAGEMENT SYSTEM FOR WEB DEVELOPEMENT</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_300359171-scaled.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">RISK MANAGEMENT WITH THE TEAM</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/security_background.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">NETWORK SECURITY SOLUTIONS FOR BETTER FUTURES</p>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-1">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="assets/AdobeStock_169012583-scaled.jpeg"
                  alt="#"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <p className="text-white text-2xl font-bold text-center">QA MODERINIZATION AND OPTIMIZATION</p>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}
