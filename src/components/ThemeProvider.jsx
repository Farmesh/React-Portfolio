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
