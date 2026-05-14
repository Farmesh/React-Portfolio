import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Client Experience": [
    { name: "Responsive UI", level: 95 },
    { name: "Landing Pages", level: 90 },
    { name: "Conversion Layouts", level: 85 },
    { name: "Animations", level: 80 }
  ],
  "Web Development": [
    { name: "React", level: 85 },
    { name: ".NET APIs", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Databases", level: 75 }
  ],
  "Launch Support": [
    { name: "SEO Basics", level: 80 },
    { name: "Hosting", level: 85 },
    { name: "Testing", level: 80 },
    { name: "Maintenance", level: 85 }
  ]
};

const SkillBar = ({ name, level }) => (
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-slate-400">{level}%</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
      />
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 text-center text-4xl font-black text-white"
      >
        How I Help Clients Win
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-white/10 bg-slate-900/70 p-6"
          >
            <h3 className="text-xl font-medium mb-6 text-center">{category}</h3>
            {categorySkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection; 
