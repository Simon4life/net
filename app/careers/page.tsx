import React from 'react'
import Hero from '../components/Hero'
import Card from "../components/Card";
import Image from 'next/image';
import { FaLaptopCode } from "react-icons/fa";
import { PiPaintBrushBroad } from "react-icons/pi";
import { MdOutlineSupportAgent, MdOutlineSecurity } from "react-icons/md";
import { SiGoogletagmanager } from "react-icons/si";
import StepCard from "../components/WorkProcess";

const jobOpenings = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Developer",
    description: "Build intuitive, fast, and scalable web interfaces using React, Tailwind, and Next.js.",
    bgColor: "bg-blue-50"
  },
  {
    icon: <PiPaintBrushBroad />,
    title: "UI/UX Designer",
    description: "Design human-centered experiences that align with brand and user goals across all devices.",
    bgColor: "bg-purple-50"
  },
  {
    icon: <MdOutlineSupportAgent />,
    title: "Technical Support Specialist",
    description: "Provide reliable tech support to our clients and ensure seamless system experiences.",
    bgColor: "bg-gray-50"
  },
  {
    icon: <SiGoogletagmanager />,
    title: "Digital Marketing Strategist",
    description: "Craft and execute data-driven campaigns that help brands grow and connect with the right audience.",
    bgColor: "bg-yellow-50"
  },
  {
    icon: <MdOutlineSecurity />,
    title: "Cybersecurity Analyst",
    description: "Protect client infrastructures with proactive threat analysis and best-in-class security practices.",
    bgColor: "bg-red-50"
  },
  {
    icon: <FaLaptopCode />,
    title: "Backend Developer",
    description: "Build reliable, high-performance APIs and system integrations that support scalable platforms.",
    bgColor: "bg-green-50"
  }
];

const CareersPage = () => {
  return (
    <main>
      <Hero 
        header="Careers at Net Trix" 
        subheader="Join our mission to build digital experiences that move brands forward." 
        links
      />

      <section className="py-16 px-6 max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="flex flex-col md:flex-row mb-12 gap-8 items-center">
          <div className="w-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Why Work With Net Trix?</h1>
            <p className='text-gray-900 leading-relaxed text-justify'>
              We’re more than a digital agency—we’re a creative tech team solving problems that matter. Whether you're writing code, designing pixels, or supporting our clients, your role at Net Trix makes a real impact. Here, your ideas fuel innovation.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/teamwork.jpg"
              alt="Team working together"
              width={550}
              height={550}
              className="shadow-md"
            />
          </div>
        </div>

        {/* Job Cards */}
        <div className="py-10">
          <h1 className='text-center my-8 text-4xl font-bold'>Open Roles</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              jobOpenings.map((job, index) => (
                <Card 
                  key={index} 
                  title={job.title} 
                  description={job.description} 
                  icon={job.icon} 
                  bgColor={job.bgColor} 
                />
              ))
            }
          </div>
        </div>
      </section>

      {/* How Working with Net Trix Works */}
      <section className="px-6 py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-left">How Working at Net Trix Works</h2>
            <p className="text-gray-700 text-justify leading-relaxed">
              At Net Trix, collaboration, creativity, and autonomy drive our day-to-day. We work in small, focused teams that move fast and ship often. We value continuous learning, transparent communication, and making space for your best work. Whether you're remote or in-house, we support flexibility, personal growth, and meaningful impact.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/how-we-work.jpg"
              alt="How we work"
              width={550}
              height={550}
              className="shadow-md"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default CareersPage