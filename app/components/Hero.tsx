'use client';

import { useEffect, useState } from 'react';
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    header: 'Empowering Your Digital Future',
    subheader: 'At Net-Trix, we merge strategy, design, and technology to help businesses thrive.',
    bgImage: "/hero-img.jpg",
  },
  {
    header: 'Web Hosting. Cybersecurity. AI.',
    subheader: 'One agency. All the digital tools you need to scale with confidence.',
    bgImage: "/data-protection.jpg",
  },
  {
    header: 'Join The Gʊd AI’diea Campaign',
    subheader: 'Innovating with purpose—discover our mission to reshape digital engagement.',
    bgImage: "/hero-img.jpg",
  },
];

const varia = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  }),
};


export default function HeroSlider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const nextIndex = (prevIndex + newDirection + slides.length) % slides.length;
      return [nextIndex, newDirection];
    });
  };

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  const { header, subheader, bgImage } = slides[index];

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={varia}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center px-6 text-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <motion.div className="z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{header}</h1>
            <p className="text-lg md:text-xl mb-8">{subheader}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-semibold">
              <Link
                href="/services"
                className="px-6 py-4 bg-purple-300 text-black rounded hover:bg-yellow-200 transition flex items-center"
              >
                Get Started <MdArrowOutward className="ml-2" />
              </Link>
              <Link
                href="/campaign"
                className="border-b border-white hover:text-yellow-300"
              >
                Join the Campaign
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black"
      >
        <MdChevronLeft size={30} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black"
      >
        <MdChevronRight size={30} />
      </button>
    </section>
  );
}
