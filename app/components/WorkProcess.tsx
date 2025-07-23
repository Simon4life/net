'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaBrain, FaPen, FaMousePointer } from "react-icons/fa";

const steps = [
  {
    step: 'Step 01',
    title: 'User Research',
    icon: <FaSearch className="w-6 h-6" />,
  },
  {
    step: 'Step 02',
    title: 'Define Problems',
    icon: <FaBrain className="w-6 h-6" />,
  },
  {
    step: 'Step 03',
    title: 'Design & Prototype',
    icon: <FaPen className="w-6 h-6" />,
  },
  {
    step: 'Step 04',
    title: 'Evaluation & Testing',
    icon: <FaMousePointer className="w-6 h-6" />,
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#e0f0ea] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Creative Process</h2>
        <p className="text-gray-500 mb-14 max-w-2xl mx-auto">
          At Net Trix, our creative process is built around clarity, user empathy, and precise execution. Here’s how we do it:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-black hover:text-white transition-colors duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-400 mb-2">{step.step}</div>
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition duration-300">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
