import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Frontend": [
    { name: "React", level: 80 },
    { name: "Angular", level: 55 },
    { name: "JavaScript", level: 60 },
    { name: "Tailwind CSS", level: 90 }
  ],
  "Backend": [
    { name: "Node.js", level: 80 },
    { name: "Dot Net", level: 85 },
    { name: "MongoDB", level: 70 },
    { name: "MSSQL", level: 60 }
  ],
  "Tools": [
    { name: "Git", level: 80 },
    { name: "Github", level: 85 },
    { name: "Postman", level: 70 },
    { name: "Swagger", level: 70 }
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