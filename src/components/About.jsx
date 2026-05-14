import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import { FaBolt, FaCartPlus, FaLaptopCode, FaMobileAlt, FaPalette, FaTools } from 'react-icons/fa';

const features = [
  {
    icon: FaLaptopCode,
    title: "Business Websites",
    description: "Professional sites for shops, institutes, creators, consultants, and service providers."
  },
  {
    icon: FaPalette,
    title: "Landing Pages",
    description: "Clear pages built around your offer, trust points, and contact enquiries."
  },
  {
    icon: FaCartPlus,
    title: "E-commerce",
    description: "Product pages, carts, checkout-ready flows, and admin-friendly structure."
  },
  {
    icon: FaMobileAlt,
    title: "Mobile-first Design",
    description: "Responsive layouts that feel smooth on phones, tablets, and desktops."
  },
  {
    icon: FaBolt,
    title: "Performance",
    description: "Fast-loading pages with clean code, sensible assets, and SEO basics."
  },
  {
    icon: FaTools,
    title: "Support",
    description: "Post-launch updates, fixes, hosting guidance, and feature improvements."
  }
];

const About = () => {
  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-4 text-center text-4xl font-black text-white"
      >
        Website Services for Your Business
      </motion.h2>
      <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-slate-400">
        From a simple one-page website to a complete web app, I help you present your work clearly and make it easy for customers to contact you.
      </p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-slate-300">
            {ABOUT_TEXT}
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-5"
          >
            <p className="text-sm font-medium text-emerald-100">
              Need a site for your business? I can help with design, development, deployment, and future improvements.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-white/10 bg-slate-900/70 p-6 transition-colors duration-300 hover:border-emerald-400/50"
            >
              <feature.icon className="mb-4 text-3xl text-emerald-300" />
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-sm leading-6 text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
