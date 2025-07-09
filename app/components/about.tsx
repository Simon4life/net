'use client';

import Link from 'next/link';
import React from 'react';
import CountUp from 'react-countup';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  },
});

const About = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp(0)}>
          <div className="flex items-center mb-4">
            <span className="w-3 h-3 inline-block bg-purple-400 rounded-full mr-2"></span>
            <p>Our Values</p>
          </div>
          <h2 className="text-xl text-left font-semibold p-0 md:text-3xl lg:text-4xl mb-8 leading-relaxed">
            We are a results-driven digital agency helping businesses grow, stand out, and connect with their audience in a fast-evolving digital world. From branding and design to web development, marketing, and strategy—we bring ideas to life with purpose and precision.
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="flex gap-6 flex-col md:flex-row items-center">
          {/* Text Column */}
          <motion.div className="w-full" variants={fadeInUp(0.2)}>
            <div className="mb-5">
              <h3 className="text-xl font-bold mb-3">Based in New Jersey</h3>
              <p className="max-w-[700px] text-gray-500">
                Based in New Jersey, The Gʊd AI'diə Company is an innovation and growth strategy enabler dedicated to helping leading establishments thrive in the digital world. We specialize in innovative strategies, digital positioning and transformation, and holistic growth design.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-bold mb-3">Our goal is clear</h3>
              <p className="max-w-[700px] text-gray-500">
                At The Gʊd AI'diə Company, we simplify complexity and spark bold growth through strategic, innovative solutions.
              </p>
            </div>

            {/* Link */}
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-8">
              <Link
                href="/about"
                className="border-b w-28 flex items-center text-black py-2 px-0 transition"
              >
                Learn More <span className="ml-1"><MdArrowOutward /></span>
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="flex mt-8">
              <div className="pr-6">
                <h1 className="text-5xl font-bold mb-4">
                  <CountUp end={8} duration={4} />+
                </h1>
                <p>Global Team members</p>
              </div>
              <div className="border-l px-8">
                <h1 className="text-5xl font-bold mb-4">10k+</h1>
                <p>Clients Served</p>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="w-full max-w-3xl mx-auto"
            variants={fadeInUp(0.4)}
          >
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-md"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/Gud5.jpg"
                alt="group of worker"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
