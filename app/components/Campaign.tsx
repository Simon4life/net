'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "The Gʊd AI'diə team transformed our entire online experience.",
    feedback:
      'We approached them for a simple website refresh—what we got was a full digital overhaul that increased engagement and sales within weeks.',
    name: 'Alex B.',
    role: 'CEO, Modern Mart',
    image: '/Gud3.jpg',
  },
  {
    quote: 'Exceptional team with real digital insight.',
    feedback:
      'They built our web app from scratch and handled every detail—from design to SEO—and delivered on time.',
    name: 'Chinwe A.',
    role: 'Founder, LearningBay',
    image: '/Gud4.jpg',
  },
  {
    quote: 'Working with them was the best decision for our brand.',
    feedback:
      'Our social engagement doubled, and the new branding helped us stand out in a competitive market.',
    name: 'James K.',
    role: 'Creative Director, Bold Studio',
    image: '/Gud5.jpg',
  },
]

const Campaign = () => {
  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonial = testimonials[current]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        className="text-center mb-12 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">The Nettrix Impact</h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          We're on a mission to build brilliant digital experiences that empower brands,
          simplify technology, and elevate user trust—one pixel at a time.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Growth Metric */}
        <motion.div
          className="grid gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            className="md:col-span-2 bg-blue-100 p-6 rounded-xl flex flex-col justify-between"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold">50+</div>
            <p className="text-sm text-gray-700 mt-2">Clients We've Helped Grow Digitally</p>
            <span className="self-end mt-4 text-xs bg-white text-blue-600 px-3 py-1 rounded-full font-semibold">Impact</span>
          </motion.div>

          <motion.div
            className="col-span-1 bg-white p-6 rounded-xl flex flex-col justify-between border border-gray-100"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold">05+</div>
            <p className="text-sm text-gray-700 mt-2">Web & Digital Projects Successfully Shipped</p>
            <span className="self-end mt-4 text-xs bg-gray-100 px-3 py-1 rounded-full font-semibold">Reach</span>
          </motion.div>

          <motion.div
            className="col-span-1 bg-white p-6 rounded-xl flex flex-col justify-between border border-gray-100"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-4xl font-bold">4.9</div>
            <p className="text-sm text-gray-700 mt-2">Average Client Satisfaction Score (out of 5)</p>
            <span className="self-end mt-4 text-xs bg-gray-100 px-3 py-1 rounded-full font-semibold">Feedback</span>
          </motion.div>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          className="bg-purple-200 p-6 rounded-xl flex flex-col justify-between transition duration-500 ease-in-out w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <p className="text-xl font-semibold mb-2">“{testimonial.quote}”</p>
                <p className="text-gray-700 text-sm">{testimonial.feedback}</p>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="bg-white px-3 py-1 rounded-full hover:bg-gray-100"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="bg-white px-3 py-1 ml-4 rounded-full hover:bg-gray-100"
            >
              →
            </motion.button>
          </div>

          <span className="self-end mt-4 text-xs bg-white text-purple-600 px-3 py-1 rounded-full font-semibold">
            Testimonial
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Campaign
