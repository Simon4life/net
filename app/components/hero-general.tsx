import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface HeroInterface {
  header: string;
  subheader: string;
  links?: boolean;
}

const GeneralHero = ({ header, subheader, links }: HeroInterface) => {
  return (
    <section className="relative min-h-screen bg-[url('/hero-img.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-6 py-20 overflow-hidden">
      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/80"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      ></motion.div>

      {/* Text Content */}
      <motion.div
        className="z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {header}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl md:max-w-3xl mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {subheader}
        </motion.p>

        {links && (
          <motion.div
            className="flex flex-col md:flex-row gap-8 justify-center items-center font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="px-5 py-6 rounded flex items-center justify-center text-black bg-purple-300 hover:bg-yellow-100 transition"
              >
                Get Started <span className="ml-4"><MdArrowOutward /></span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/campaign"
                className="border-b inline-block border-white text-white py-2 hover:text-yellow-600 transition"
              >
                Join the Campaign
              </Link>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default GeneralHero