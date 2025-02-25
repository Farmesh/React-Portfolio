import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaCode,
    title: "Clean Code",
    description: "Writing maintainable and scalable code following best practices"
  },
  {
    icon: FaLaptopCode,
    title: "Full Stack",
    description: "End-to-end development from frontend to backend"
  },
  {
    icon: FaServer,
    title: "Optimization",
    description: "Performance optimization and best practices implementation"
  },
  {
    icon: FaMobileAlt,
    title: "Responsive",
    description: "Mobile-first approach for all applications"
  }
];

const About = () => {
  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-thin text-center mb-16 bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-neutral-400">
            {ABOUT_TEXT}
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-neutral-800"
          >
            <p className="text-sm italic text-neutral-300">
              "Passionate about creating elegant solutions to complex problems"
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-cyan-500/50 transition-colors duration-300"
            >
              <feature.icon className="text-3xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
