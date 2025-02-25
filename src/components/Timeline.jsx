import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    description: "Led development of enterprise-scale React applications",
    icon: FaTrophy,
    color: "text-yellow-500"
  },
  {
    year: "2023",
    title: "AWS Certified Developer",
    description: "Achieved AWS Developer Associate Certification",
    icon: FaCertificate,
    color: "text-blue-500"
  },
  // Add more achievements
];

const TimelineItem = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}
  >
    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-neutral-900/50 p-6 rounded-xl"
      >
        <span className="text-sm text-cyan-400">{item.year}</span>
        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
        <p className="text-neutral-400">{item.description}</p>
      </motion.div>
    </div>
    <div className="relative flex items-center justify-center w-16">
      <div className="w-1 h-full bg-neutral-800 absolute"></div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        className={`w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center z-10 ${item.color}`}
      >
        <item.icon className="text-xl" />
      </motion.div>
    </div>
    <div className="w-1/2"></div>
  </motion.div>
);

const Timeline = () => {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-thin text-center mb-16"
      >
        Achievements
      </motion.h2>
      <div className="space-y-12">
        {achievements.map((achievement, index) => (
          <TimelineItem key={index} item={achievement} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline; 