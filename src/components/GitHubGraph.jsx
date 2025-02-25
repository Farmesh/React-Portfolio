import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';

const GitHubGraph = () => {
  const [stats, setStats] = useState({
    contributions: 847,
    repositories: 25,
    stars: 156,
    forks: 48
  });

  // Generate sample contribution data
  const generateContributions = () => {
    const weeks = 52;
    const daysPerWeek = 7;
    return Array.from({ length: weeks }, (_, weekIndex) => 
      Array.from({ length: daysPerWeek }, (_, dayIndex) => ({
        count: Math.floor(Math.random() * 8),
        date: new Date(2024, 0, 1 + (weekIndex * 7 + dayIndex))
      }))
    );
  };

  const getContributionColor = (count) => {
    if (count === 0) return 'bg-neutral-800';
    if (count < 3) return 'bg-cyan-900/80';
    if (count < 5) return 'bg-cyan-700';
    return 'bg-cyan-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-20"
    >
      <h2 className="text-4xl font-thin text-center mb-16 bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
        GitHub Activity
      </h2>

      <div className="bg-neutral-900/50 rounded-xl p-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: FaCode, label: 'Contributions', value: stats.contributions },
            { icon: FaGithub, label: 'Repositories', value: stats.repositories },
            { icon: FaStar, label: 'Stars', value: stats.stars },
            { icon: FaCodeBranch, label: 'Forks', value: stats.forks }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <stat.icon className="text-2xl text-cyan-400 mb-2" />
              <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-neutral-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <div className="bg-neutral-900 rounded-lg p-4">
          <div className="flex justify-between text-xs text-neutral-500 mb-4 px-2">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
              <span key={month}>{month}</span>
            ))}
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex gap-[3px]">
                {generateContributions().map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.map((day, dayIndex) => (
                      <motion.div
                        key={`${weekIndex}-${dayIndex}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ 
                          scale: 1.5, 
                          zIndex: 10,
                          transition: { duration: 0.1 }
                        }}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(day.count)} hover:ring-2 hover:ring-white/20`}
                        title={`${day.count} contributions on ${day.date.toLocaleDateString()}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-neutral-500">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getContributionColor(level * 2)}`}
              />
            ))}
            <span>More</span>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <motion.a
            href="https://github.com/Farmesh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white hover:from-cyan-600 hover:to-purple-600 transition-all"
          >
            <FaGithub className="text-xl" />
            View GitHub Profile
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubGraph; 