import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import servicesData from "../../public/service_description/services.json";

interface ServiceData {
  id: string;
  title: string;
  intro_title: string;
  intro_text: string[];
  paragraphs: string[];
  content_title: string;
  images?: string[];
  image_source: string[];
}

export default function ServicesPage() {
  const { id } = useParams();

  const service = servicesData.services.find((s: ServiceData) => s.id === id);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8 col-span-full">
        <h2 className="text-2xl font-bold text-coneng">Service not found</h2>
        <Link to="/services" className="text-blue-600 hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <header className="w-full col-span-full pt-16 pb-12 md:pb-20 xl:pb-28 flex justify-end px-4 md:px-11">
        <h1 className="font-light uppercase text-4xl text-coneng md:text-7xl  tracking-wide ">
          {service.title}
        </h1>
      </header>
      <main className="w-full col-span-full grid grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-x-8 gap-y-16 px-4 md:px-11 pb-24 text-neutral-800">
        <section
          aria-labelledby="design-intro-title"
          className="col-span-2 md:col-span-3 xl:col-span-5 flex flex-col gap-y-6"
        >
          <h2
            id="design-intro-title"
            className="text-xl md:text-2xl xl:text-3xl uppercase font-light text-neutral-950 tracking-tight leading-tight"
          >
            {service.intro_title}{" "}
          </h2>
          <p className="font-light text-sm w-full md:text-base leading-relaxed text-neutral-600 ">
            {service.intro_text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}{" "}
          </p>
        </section>

        <section
          aria-labelledby="design-stages-title"
          className="col-span-2 md:col-span-3 xl:col-span-5 xl:col-start-7 flex flex-col gap-y-6"
        >
          <h2
            id="design-stages-title"
            className="text-xl md:text-2xl xl:text-3xl font-light text-neutral-950 tracking-tight leading-tight"
          >
            Designing and Detailed design includes several stages:
          </h2>
          <ul className="list-disc list-outside pl-5 font-light text-neutral-700 space-y-3 text-sm md:text-base">
            <li>Project preparation based on the basic engineering plan</li>
            <li>It's review and approval by the state expert review panel</li>
            <li>Detailed design of the structural and MEP systems</li>
            <li>Commissioning and handover.</li>
          </ul>
        </section>

        {/* --- LOWER CONTENT: IMAGE & DETAILED SPECS --- */}
        <section className="col-span-full grid grid-cols-subgrid gap-y-8 items-start pt-8 border-t border-neutral-100">
          {/* Main Visual Asset Field */}
          <div className="hidden md:grid col-span-2 md:col-span-4 xl:col-span-7 bg-neutral-100 aspect-video overflow-hidden">
            <img
              srcSet={service.images.join(", ")}
              sizes="(max-width: 480px) 450px, (max-width: 800px) 770px, 1200px"
              src={service.images[0]?.split(" ")[0] || service.images[0]}
              alt="Architectural detailing blueprints and engineering calculations schematic layout"
              className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
          {/* Detailed Narrative Sidebar Block */}
          <div className="col-span-2 md:col-span-2 xl:col-span-4 xl:pl-4 flex flex-col gap-y-6 text-left">
            <h2 className="text-lg md:text-xl font-normal text-neutral-950 tracking-tight">
              {service.content_title}
            </h2>
            <div className="space-y-4 font-light text-neutral-700  md:text-base leading-relaxed">
              {service.paragraphs.map((item) => {
                return <p key={item}> {item}</p>;
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
