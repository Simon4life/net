'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const services = [
  {
    id: '001',
    title: 'Cyber Security',
    description:
      'Shield your organization from ever-evolving cyber threats using our latest, cutting-edge security solutions—built to protect your data and infrastructure with 24/7 reliability and peace of mind.',
    tags: ['Network Security', 'Threat Monitoring', 'Compliance', '24/7 Protection'],
    image: '/network-security.png',
  },
  {
    id: '002',
    title: 'Cloud & Web Hosting',
    description:
      "Achieve faster, more secure cloud deployment and web hosting services designed to meet your business's growing needs while ensuring maximum uptime and performance.",
    tags: ['Cloud Deployment', 'Web Hosting', 'Scalability', 'Uptime'],
    image: '/web-hosting.png',
  },
  {
    id: '003',
    title: 'Digital Agency',
    description:
      'From web development to digital marketing, our expert team crafts tailored solutions that boost your brand presence and drive customer engagement in the ever-evolving digital landscape.',
    tags: ['Web Dev', 'UI/UX', 'SEO', 'Marketing'],
    image: '/digital-agency.jpeg',
  },
  {
    id: '004',
    title: 'Data Protection',
    description:
      'Ensure the integrity and confidentiality of your sensitive data with our comprehensive data protection services, built to safeguard against breaches, losses, and unauthorized access.',
    tags: ['Data Security', 'Backups', 'Encryption', 'Access Control'],
    image: '/data-protection.jpg',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section className="bg-white max-w-6xl mx-auto py-20 px-6">
      {/* Section Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
          Empowering Your Business Through Smart Technology
        </h2>

        <div className="max-w-md">
          <p className="text-lg mb-4 text-gray-700">
            From infrastructure to innovation, we deliver high-impact digital services that protect, grow, and transform your business.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="inline-flex items-center px-5 py-3 text-lg bg-purple-300 rounded shadow"
            >
              View all services <span className="ml-3"><MdArrowOutward size={20} /></span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Service Cards */}
      <div className="flex flex-col gap-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="flex flex-col md:flex-row items-start gap-10 border-t pt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/3"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg shadow"
              />
            </motion.div>

            {/* Text Content */}
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {service.id}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm border border-gray-300 px-3 py-1 rounded-full text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="text-sm font-medium text-purple-700 underline inline-flex items-center gap-1"
              >
                Learn more <span>↗</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
