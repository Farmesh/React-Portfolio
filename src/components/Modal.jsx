import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink, FaTimes, FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Modal = ({ isOpen, project, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="bg-neutral-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative h-[300px] overflow-hidden rounded-t-xl">
                        <motion.img
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            className="w-full h-full object-cover"
                            src={project.image}
                            alt={project.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white"
                            onClick={onClose}
                        >
                            <FaTimes className="text-xl" />
                        </motion.button>
                    </div>

                    <div className="p-6 space-y-6">
                        <div className="flex items-start justify-between">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                {project.title}
                            </h3>
                            <div className="flex gap-3">
                                {project.demoLink && (
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-purple-500 rounded-full text-white hover:bg-purple-600 transition-colors"
                                    >
                                        <FaExternalLinkAlt />
                                    </motion.a>
                                )}
                                {project.link && (
                                    <motion.a
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition-colors"
                                    >
                                        <FaGithub />
                                    </motion.a>
                                )}
                            </div>
                        </div>

                        <p className="text-neutral-300 leading-relaxed">{project.description}</p>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-cyan-400">Key Features</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    "User Authentication",
                                    "Responsive Design",
                                    "Real-time Updates",
                                    "API Integration",
                                    "Data Visualization",
                                    "Performance Optimization"
                                ].map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-neutral-400"
                                    >
                                        <FaCode className="text-cyan-500" />
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-cyan-400">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="px-4 py-2 bg-neutral-800 rounded-full text-sm font-medium text-cyan-400"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-cyan-400">Screenshots</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-lg"
                                    src={project.image}
                                    alt="Screenshot 1"
                                />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    className="rounded-lg"
                                    src={project.image}
                                    alt="Screenshot 2"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium"
                            >
                                <FaGithub className="text-xl" />
                                View Source
                            </motion.a>
                            
                            {project.demoLink && (
                                <motion.a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-6 py-3 bg-neutral-800 rounded-full text-white font-medium hover:bg-neutral-700"
                                >
                                    <FaExternalLinkAlt className="text-lg" />
                                    Live Demo
                                </motion.a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Modal;
