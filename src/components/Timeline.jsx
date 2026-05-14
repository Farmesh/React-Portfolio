import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaCode, FaRocket, FaSearch, FaSyncAlt } from 'react-icons/fa';

const achievements = [
  {
    year: "Step 01",
    title: "Understand your business",
    description: "We define your goal, audience, pages, content, and must-have features.",
    icon: FaSearch,
    color: "text-emerald-300"
  },
  {
    year: "Step 02",
    title: "Plan the website",
    description: "I create a clean structure for your sections, calls to action, and user journey.",
    icon: FaClipboardCheck,
    color: "text-cyan-300"
  },
  {
    year: "Step 03",
    title: "Design and develop",
    description: "Your website is built with responsive UI, modern code, and real content.",
    icon: FaCode,
    color: "text-blue-300"
  },
  {
    year: "Step 04",
    title: "Test and launch",
    description: "I check mobile layouts, links, forms, performance basics, and deployment.",
    icon: FaRocket,
    color: "text-amber-300"
  },
  {
    year: "Step 05",
    title: "Improve after launch",
    description: "You can request updates, new sections, fixes, or features as your business grows.",
    icon: FaSyncAlt,
    color: "text-fuchsia-300"
  },
];

const TimelineItem = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 max-md:flex-row`}
  >
    <div className={`w-1/2 max-md:w-full ${index % 2 === 0 ? 'text-right max-md:text-left' : 'text-left'}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-xl border border-white/10 bg-slate-900/70 p-6"
      >
        <span className="text-sm font-bold text-emerald-300">{item.year}</span>
        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
        <p className="text-slate-400">{item.description}</p>
      </motion.div>
    </div>
    <div className="relative flex w-16 items-center justify-center max-md:hidden">
      <div className="absolute h-full w-1 bg-slate-800"></div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        className={`z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 ${item.color}`}
      >
        <item.icon className="text-xl" />
      </motion.div>
    </div>
    <div className="w-1/2 max-md:hidden"></div>
  </motion.div>
);

const Timeline = () => {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-4 text-center text-4xl font-black text-white"
      >
        Simple Project Process
      </motion.h2>
      <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-slate-400">
        A clear workflow keeps your website moving from idea to launch without confusion.
      </p>
      <div className="space-y-12">
        {achievements.map((achievement, index) => (
          <TimelineItem key={index} item={achievement} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline; 
