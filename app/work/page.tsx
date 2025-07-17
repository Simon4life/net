'use client'

import React from "react";
import { MdArrowUpward } from "react-icons/md";
import GeneralHero from "../components/hero-general";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const projects = [
  {
    title: "Revamp for LuxeFashion",
    description: "Rebuilt a fast, responsive Shopify store with modern UX.",
    image: "/fashion-ecommerce.webp",
    tags: ["e-commerce", "web development"],
  },
  {
    title: "Rebrand for FlowStack SaaS",
    description: "Delivered a full rebrand and responsive website.",
    image: "/web-hosting.png",
    tags: ["branding", "ui/ux", "web development"],
  },
  {
    title: "Campaign Site for GreenEarth NGO",
    description: "Built a donation platform for eco-campaign outreach.",
    image: "/network-security.png",
    tags: ["web development", "Nonprofit", "Campaign"],
  },
  {
    title: "Logo + Identity for FinLaunch",
    description: "Crafted a bold logo and visual identity for a fintech startup.",
    image: "/digital-agency.jpeg",
    tags: ["branding"],
  },
  {
    title: "Cyber Security Dashboard",
    description: "Designed and developed a dashboard for network monitoring.",
    image: "/web-hosting.png",
    tags: ["web development", "cybersecurity", "ui/ux"],
  },
];


export default function MarketingServicesGrid() {
  
  const tabs = ["All", "branding", "web development", "ui/ux", "cybersecurity"];
  const [activeTab, setActiveTab] = useState("All");
  console.log(activeTab);
  return (
    <>
      <GeneralHero
        header="Net-Trix Digital Services"
        subheader="We empower businesses with tailored digital solutions—from hosting and security to full-scale web development and marketing strategies."
        links={false}/>

      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
    
        <h2 className="text-3xl text-center md:text-4xl font-bold mb-4">Why Choose Net-Trix?</h2>
        <p className="text-gray-700 text-center mb-8 text-base leading-relaxed max-w-3xl mx-auto">
          Net-Trix is your partner in the digital world. Whether you're launching a startup, scaling a business, or transforming legacy systems—we bring the creativity, expertise, and dedication needed to make it work. With our client-first mindset and tech-driven solutions, we turn complex challenges into elegant outcomes.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6 border-b pb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`text-sm sm:text-base font-semibold pb-2 ${
                activeTab === tab
                  ? "border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            projects
              .filter((project) => {
                if (activeTab === "All") {
                  return true;
                } else if (project.tags.includes(activeTab.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
          }
        </div>
      </section>
    </>
  );
}
