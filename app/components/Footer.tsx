'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-16 pb-6">
        {/* Top Section */}
        <div className="md:flex justify-between border-b border-white/30 pb-12">
          {/* Logo */}
          <motion.div className="mb-10 md:mb-0" variants={fadeUp} custom={1}>
            <Image src="/logo.png" alt="net trix logo" width={150} height={80} />
          </motion.div>

          {/* Links Group 1 */}
          <motion.div className="mb-10 md:mb-0" variants={fadeUp} custom={2}>
            <h4 className="text-xl font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/about" className="hover:text-yellow-300">About</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/services" className="hover:text-yellow-300">Services</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="#" className="hover:text-yellow-300">Work</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="#" className="hover:text-yellow-300">careers</Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Links Group 2 */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/services" className="hover:text-yellow-300">Our Services</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/case-studies" className="hover:text-yellow-300">Case Studies</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/about" className="hover:text-yellow-300">About Us</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/get-a-quote" className="hover:text-yellow-300">Get a Quote</Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 text-sm text-center text-white/60"
          variants={fadeUp}
          custom={4}
        >
          &copy; {new Date().getFullYear()} Net trix · All rights reserved
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
