import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaLink, FaEye, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Modal from './Modal';
import ProjectFilters from './ProjectFilters';
import { useTheme } from './ThemeProvider';

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { currentTheme } = useTheme();

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filters = ['React', 'Node.js', 'MongoDB', 'All'];

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === 'all' || project.technologies.includes(activeFilter)
  );

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center text-6xl font-thin tracking-tight bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
      >
        Featured Projects
      </motion.h2>

      <ProjectFilters 
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 perspective-1000 mt-12">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotateX: -30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: 30 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                rotateX: { type: "spring", stiffness: 100 }
              }}
              className="group preserve-3d"
            >
              <motion.div
                whileHover={{ 
                  rotateY: 5,
                  rotateX: -5,
                  translateZ: 20,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`relative rounded-xl overflow-hidden backdrop-blur-card
                  ${currentTheme === 'light' 
                    ? 'bg-white/90 shadow-lg' 
                    : 'bg-neutral-900/50'
                  } border border-[var(--border-color)]`}
              >
                <div className="p-6">
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 relative group">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-cyan-500 p-3 rounded-full"
                        onClick={() => openModal(project)}
                      >
                        <FaEye className="text-white text-xl" />
                      </motion.button>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 
                        className="text-xl font-medium hover:text-cyan-400 transition-colors"
                        onClick={() => openModal(project)}
                      >
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-neutral-400 hover:text-purple-500 transition-colors z-10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub className="text-lg" />
                          </motion.a>
                        )}
                        {project.demoLink && (
                          <motion.a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-neutral-400 hover:text-cyan-500 transition-colors z-10"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt className="text-lg" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <p className="text-neutral-400 text-sm line-clamp-2 mt-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs font-medium bg-neutral-800 text-cyan-400 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  whileHover={{ 
                    borderColor: "rgba(34, 211, 238, 0.5)",
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Modal isOpen={isModalOpen} project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default Project;
