import React from 'react';
import { motion } from 'framer-motion';

const CaseStudy = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-neutral-900/50 rounded-xl p-8 space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <div className="flex gap-4 text-sm text-neutral-400">
          <span>Duration: {project.duration}</span>
          <span>Role: {project.role}</span>
          <span>Team Size: {project.teamSize}</span>
        </div>
      </div>

      <div className="space-y-4">
        <section>
          <h4 className="text-xl font-semibold text-cyan-400">Challenge</h4>
          <p className="text-neutral-300">{project.challenge}</p>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-cyan-400">Solution</h4>
          <p className="text-neutral-300">{project.solution}</p>
        </section>

        <section>
          <h4 className="text-xl font-semibold text-cyan-400">Results</h4>
          <ul className="list-disc list-inside space-y-2">
            {project.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <img src={project.beforeImage} alt="Before" className="rounded-lg" />
        <img src={project.afterImage} alt="After" className="rounded-lg" />
      </div>
    </motion.div>
  );
};

export default CaseStudy; 