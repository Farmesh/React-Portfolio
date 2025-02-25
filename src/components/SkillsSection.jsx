import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Frontend": [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 95 }
  ],
  "Backend": [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 75 }
  ],
  "Tools": [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "CI/CD", level: 80 }
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
      <span className="text-sm text-neutral-400">{level}%</span>
    </div>
    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
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
        className="text-4xl font-thin text-center mb-16"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-neutral-900/50 p-6 rounded-xl"
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