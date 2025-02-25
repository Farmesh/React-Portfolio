import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, themes } from './ThemeProvider';
import { FaMoon, FaSun, FaRobot, FaRegCircle } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme } = useTheme();

  const themeStyles = {
    dark: {
      icon: <FaMoon />,
      gradient: 'from-cyan-400 to-purple-500'
    },
    light: {
      icon: <FaSun />,
      gradient: 'from-cyan-500 to-blue-500'
    },
    cyberpunk: {
      icon: <FaRobot />,
      gradient: 'from-yellow-400 via-pink-500 to-purple-500'
    },
    minimal: {
      icon: <FaRegCircle />,
      gradient: 'from-neutral-800 to-neutral-600'
    }
  };

  return (
    <motion.div 
      className={`fixed bottom-4 right-4 z-50 backdrop-blur-sm p-2 rounded-full flex gap-2 shadow-lg
        ${currentTheme === 'light' 
          ? 'bg-white/90' 
          : currentTheme === 'cyberpunk'
          ? 'bg-purple-900/90'
          : currentTheme === 'minimal'
          ? 'bg-neutral-100/90'
          : 'bg-neutral-900/90'
        }`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {Object.keys(themes).map((theme) => (
        <motion.button
          key={theme}
          onClick={() => setCurrentTheme(theme)}
          className={`p-3 rounded-full transition-all duration-300 ${
            currentTheme === theme 
              ? `bg-gradient-to-r ${themeStyles[theme].gradient} text-white shadow-lg` 
              : `bg-neutral-800 text-neutral-400 hover:bg-neutral-700
                 ${currentTheme === 'cyberpunk' ? 'bg-purple-800 hover:bg-purple-700' : ''}
                 ${currentTheme === 'minimal' ? 'bg-neutral-200 hover:bg-neutral-300' : ''}`
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={`Switch to ${theme} theme`}
        >
          {themeStyles[theme].icon}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ThemeSwitcher; 