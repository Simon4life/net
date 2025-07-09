'use client'

import React from "react";
import { MdArrowUpward } from "react-icons/md";
import Hero from "../components/Hero";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  {
    title: "Cyber Security",
    description:
      "Shield your organization from evolving threats with our 24/7 security infrastructure and proactive threat monitoring.",
    color: "bg-purple-100",
    icon: "🛡️",
  },
  {
    title: "Cloud & Web Hosting",
    description:
      "Reliable, high-performance hosting solutions tailored for scale, speed, and security across cloud and web platforms.",
    color: "bg-neutral-50",
    icon: "☁️",
  },
  {
    title: "Web & App Development",
    description:
      "Modern, responsive websites and mobile apps built using the latest frameworks to deliver seamless user experiences.",
    color: "bg-blue-100",
    icon: "💻",
  },
  {
    title: "Digital Marketing",
    description:
      "Custom strategies in SEO, PPC, and content marketing to elevate your brand visibility and drive results.",
    color: "bg-yellow-100",
    icon: "📈",
  },
  {
    title: "Data Protection & Backup",
    description:
      "Protect sensitive business data with advanced encryption, regular backups, and robust recovery strategies.",
    color: "bg-green-100",
    icon: "🔐",
  },
  {
    title: "IT Consulting & Support",
    description:
      "Expert IT support and consulting services to streamline operations and align your tech stack with your business goals.",
    color: "bg-rose-100",
    icon: "🧠",
  },
];

export default function MarketingServicesGrid() {
  return (
    <>
      <Hero
        header="Net-Trix Digital Services"
        subheader="We empower businesses with tailored digital solutions—from hosting and security to full-scale web development and marketing strategies."
      />

      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
          What We Offer
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description, color, icon }, i) => (
            <motion.div
              key={title}
              className={`p-6 rounded-md border shadow-sm ${color}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h2 className="text-xl font-semibold mt-16 text-gray-900 mb-2">
                {title}
              </h2>
              <p className="text-gray-700 mb-4 text-sm text-justify leading-relaxed">
                {description}
              </p>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-gray-900">
                Learn more <MdArrowUpward className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Net-Trix?</h2>
        <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
          Net-Trix is your partner in the digital world. Whether you're launching a startup, scaling a business, or transforming legacy systems—we bring the creativity, expertise, and dedication needed to make it work. With our client-first mindset and tech-driven solutions, we turn complex challenges into elegant outcomes.
        </p>
      </section>
    </>
  );
}
