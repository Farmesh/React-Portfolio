import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import Modal from './Modal';

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-4 text-center text-4xl font-black text-white"
      >
        Proof of Work
      </motion.h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-slate-400">
        These projects show the kind of websites and web apps I can create for clients: clean layouts, useful features, and real deployment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <AnimatePresence>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                  >
                    <FaEye /> View Details
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-2 py-1 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live website`}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Modal isOpen={isModalOpen} project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default Project;
