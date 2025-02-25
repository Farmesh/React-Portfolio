import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const ProjectFilters = ({ filters, activeFilter, setActiveFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [showAll, setShowAll] = useState(true);

  const handleFilterClick = (filter) => {
    if (filter === 'all') {
      setShowAll(true);
      setSelectedFilters(new Set());
      setActiveFilter('all');
      return;
    }

    setShowAll(false);
    setSelectedFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(filter)) {
        newSet.delete(filter);
        if (newSet.size === 0) {
          setShowAll(true);
          setActiveFilter('all');
          return new Set();
        }
      } else {
        newSet.add(filter);
      }
      setActiveFilter(Array.from(newSet).join(','));
      return newSet;
    });
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleFilterClick('all')}
          className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2
            ${showAll 
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20' 
              : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
            }`}
        >
          <FaCode />
          All Projects
        </motion.button>

        {filters.map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterClick(filter)}
            className={`px-6 py-3 rounded-full transition-all duration-300
              ${selectedFilters.has(filter)
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
              }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {!showAll && selectedFilters.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-wrap justify-center items-center gap-2 text-sm"
          >
            <span className="text-neutral-400">Active Filters:</span>
            {Array.from(selectedFilters).map(filter => (
              <motion.span
                key={filter}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="px-3 py-1 bg-neutral-800 rounded-full text-cyan-400"
              >
                {filter}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectFilters; 