import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  // Theme 1: Original Dark Theme
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
  // Theme 2: Modern Theme
  modern: {
    primary: 'violet-500',
    secondary: 'fuchsia-500',
    background: 'zinc-950',
    card: 'zinc-900',
    text: 'violet-100',
    accent: 'violet-500',
    cardBg: 'zinc-900/50',
    border: 'violet-800',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500'
  },
  // Theme 3: Neon Theme
  neon: {
    primary: 'green-400',
    secondary: 'yellow-300',
    background: 'black',
    card: 'zinc-950',
    text: 'green-300',
    accent: 'green-400',
    cardBg: 'zinc-950/50',
    border: 'green-900',
    gradient: 'from-green-400 via-emerald-300 to-yellow-300'
  },
  // Theme 4: Sunset Theme
  sunset: {
    primary: 'orange-500',
    secondary: 'red-500',
    background: 'slate-950',
    card: 'slate-900',
    text: 'orange-100',
    accent: 'orange-500',
    cardBg: 'slate-900/50',
    border: 'orange-900',
    gradient: 'from-orange-500 via-red-500 to-purple-600'
  }
};

// Update theme styles
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
  modern: {
    '--card-shadow': '0 4px 20px -1px rgba(139, 92, 246, 0.2)',
    '--hover-shadow': '0 10px 25px -3px rgba(139, 92, 246, 0.25)',
    '--text-secondary': 'rgb(196, 181, 253)',
    '--border-color': 'rgb(91, 33, 182)',
    '--card-bg': 'rgba(24, 24, 27, 0.8)',
    '--backdrop-blur': 'blur(12px)',
    '--gradient': 'linear-gradient(-45deg, #8b5cf6, #d946ef, #ec4899)',
    '--glow': '0 0 20px rgba(139, 92, 246, 0.3)',
    '--text-glow': '0 0 10px rgba(139, 92, 246, 0.5)'
  },
  neon: {
    '--card-shadow': '0 4px 20px -1px rgba(74, 222, 128, 0.2)',
    '--hover-shadow': '0 10px 25px -3px rgba(74, 222, 128, 0.25)',
    '--text-secondary': 'rgb(134, 239, 172)',
    '--border-color': 'rgb(21, 128, 61)',
    '--card-bg': 'rgba(9, 9, 11, 0.8)',
    '--backdrop-blur': 'blur(12px)',
    '--gradient': 'linear-gradient(45deg, #4ade80, #34d399, #fde047)',
    '--glow': '0 0 30px rgba(74, 222, 128, 0.3)',
    '--text-glow': '0 0 15px rgba(74, 222, 128, 0.5)',
    '--neon-line': '0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 20px #4ade80'
  },
  sunset: {
    '--card-shadow': '0 4px 20px -1px rgba(249, 115, 22, 0.2)',
    '--hover-shadow': '0 10px 25px -3px rgba(249, 115, 22, 0.25)',
    '--text-secondary': 'rgb(253, 186, 116)',
    '--border-color': 'rgb(154, 52, 18)',
    '--card-bg': 'rgba(15, 23, 42, 0.8)',
    '--backdrop-blur': 'blur(12px)',
    '--gradient': 'linear-gradient(to right, #f97316, #ef4444, #7c3aed)',
    '--glow': '0 0 20px rgba(249, 115, 22, 0.3)',
    '--text-glow': '0 0 10px rgba(249, 115, 22, 0.5)'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  React.useEffect(() => {
    const root = document.documentElement;
    const theme = themes[currentTheme];
    
    // Set theme variables
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Update theme class
    document.body.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 