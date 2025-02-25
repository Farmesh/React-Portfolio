import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  dark: {
    primary: 'cyan-400',
    secondary: 'purple-500',
    background: 'neutral-950',
    card: 'neutral-900',
    text: 'neutral-300',
    accent: 'cyan-400',
    cardBg: 'neutral-900/50',
    border: 'neutral-800',
    gradient: 'from-cyan-400 to-purple-500'
  },
  light: {
    primary: 'cyan-600',
    secondary: 'purple-600',
    background: 'gray-50',
    card: 'white',
    text: 'gray-800',
    accent: 'cyan-600',
    cardBg: 'white',
    border: 'gray-200',
    textSecondary: 'gray-600',
    gradient: 'from-cyan-500 to-blue-500'
  },
  cyberpunk: {
    primary: 'yellow-400',
    secondary: 'pink-500',
    background: 'purple-950',
    card: 'purple-900',
    text: 'yellow-100',
    accent: 'pink-500',
    cardBg: 'purple-900/50',
    border: 'pink-900',
    gradient: 'from-yellow-400 via-pink-500 to-purple-500',
    textSecondary: 'pink-300'
  },
  minimal: {
    primary: 'neutral-800',
    secondary: 'neutral-600',
    background: 'neutral-100',
    card: 'white',
    text: 'neutral-800',
    accent: 'neutral-900',
    cardBg: 'white',
    border: 'neutral-200',
    gradient: 'from-neutral-800 to-neutral-600',
    textSecondary: 'neutral-500'
  }
};

// Add these CSS variables to your index.css
const themeStyles = {
  dark: {
    '--card-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    '--hover-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
    '--text-secondary': 'rgb(156, 163, 175)',
    '--border-color': 'rgb(31, 41, 55)',
    '--card-bg': 'rgba(17, 24, 39, 0.8)',
    '--backdrop-blur': 'blur(8px)',
    '--gradient': 'linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))'
  },
  light: {
    '--card-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    '--hover-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    '--text-secondary': 'rgb(75, 85, 99)',
    '--border-color': 'rgb(229, 231, 235)',
    '--card-bg': 'rgba(255, 255, 255, 0.8)',
    '--backdrop-blur': 'blur(8px)',
    '--gradient': 'linear-gradient(to right, #0891b2, #3b82f6)'
  },
  cyberpunk: {
    '--card-shadow': '0 4px 6px -1px rgba(236, 72, 153, 0.3)',
    '--hover-shadow': '0 10px 15px -3px rgba(236, 72, 153, 0.3)',
    '--text-secondary': 'rgb(249, 168, 212)',
    '--border-color': 'rgb(157, 23, 77)',
    '--card-bg': 'rgba(88, 28, 135, 0.8)',
    '--backdrop-blur': 'blur(8px)',
    '--gradient': 'linear-gradient(to right, #facc15, #ec4899, #6b21a8)'
  },
  minimal: {
    '--card-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    '--hover-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
    '--text-secondary': 'rgb(107, 114, 128)',
    '--border-color': 'rgb(229, 231, 235)',
    '--card-bg': 'rgba(255, 255, 255, 0.9)',
    '--backdrop-blur': 'blur(8px)',
    '--gradient': 'linear-gradient(to right, #1f2937, #4b5563)'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  // Apply theme CSS variables
  React.useEffect(() => {
    const root = document.documentElement;
    const themeVars = currentTheme === 'light' ? themeStyles.light : themeStyles.dark;
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <div className={`theme-${currentTheme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 