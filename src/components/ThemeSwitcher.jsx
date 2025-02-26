import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, themes } from './ThemeProvider';
import { FaMoon, FaSun, FaLeaf, FaFire } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { currentTheme, setCurrentTheme } = useTheme();

  const themeIcons = {
    dark: { icon: FaMoon, label: "Dark" },
    modern: { icon: FaSun, label: "Modern" },
    neon: { icon: FaLeaf, label: "Neon" },
    sunset: { icon: FaFire, label: "Sunset" }
  };

  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50 backdrop-blur-sm p-2 rounded-full flex gap-2 shadow-lg bg-neutral-900/90"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {Object.entries(themeIcons).map(([theme, { icon: Icon, label }]) => (
        <motion.button
          key={theme}
          onClick={() => setCurrentTheme(theme)}
          className={`p-3 rounded-full transition-all duration-300 ${
            currentTheme === theme 
              ? `bg-gradient-to-r ${themes[theme].gradient} text-white shadow-lg` 
              : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={`Switch to ${label} theme`}
        >
          <Icon />
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ThemeSwitcher; 