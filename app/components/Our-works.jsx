'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const caseStudies = [
  {
    id: 0,
    title: 'E-Commerce Platform Overhaul',
    description:
      'Redesigned and rebuilt a scalable Shopify storefront with modern UX and lightning-fast performance for a growing fashion brand.',
    image: '/fashion-ecommerce.webp',
  },
  {
    id: 1,
    title: 'Corporate Website & Branding Refresh',
    description:
      'Delivered a complete rebrand and responsive website for a SaaS company to align with its expanding product vision.',
    image: '/ui-overhaul.webp',
  },
  {
    id: 2,
    title: 'SEO + Conversion Optimization',
    description:
      'Implemented a data-driven SEO and conversion strategy that boosted organic traffic and lead generation by 240% within 6 months.',
    image: '/seo.webp',
  },
]

function CaseStudyBlock({ item, index, setActiveImage, activeImage }) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false })

  useEffect(() => {
    if (inView) setActiveImage(index)
  }, [inView, index, setActiveImage])

  return (
    <motion.div
      ref={ref}
      className={`pl-6 border-l-4 transition-all duration-300 ${
        activeImage === index ? 'border-black' : 'border-gray-300'
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600 text-base max-w-md mb-4">{item.description}</p>
      <a
        href="#"
        className="text-sm font-medium text-black underline inline-flex items-center gap-1"
      >
        Learn more <span>↗</span>
      </a>
    </motion.div>
  )
}

export default function CaseStudyScroller() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section>
      <div className="text-center mb-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Case Studies
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2 max-w-xl mx-auto text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          See how The Gʊd AI'diə Company delivers high-impact digital solutions—across web development,
          branding, performance marketing, and more.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto py-16 px-4 gap-8">
        {/* Left Section */}
        <div className="flex-1 space-y-24">
          {caseStudies.map((item, i) => (
            <CaseStudyBlock
              key={item.id}
              item={item}
              index={i}
              activeImage={activeImage}
              setActiveImage={setActiveImage}
            />
          ))}
        </div>

        {/* Right Section (Image changes with active index) */}
        <div className="hidden md:block w-1/2">
          <div className="sticky top-32 h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={caseStudies[activeImage].image}
                src={caseStudies[activeImage].image}
                alt={caseStudies[activeImage].title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
