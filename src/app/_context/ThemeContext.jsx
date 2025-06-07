'use client';

import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme, will be updated

  // Effect to run on initial mount to load theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('app-theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark'); // Set to dark if system preference is dark and no local storage override
    } else {
      setTheme('light'); // Default to light otherwise
    }
  }, []);

  // Effect to update body class and local storage when theme changes
  useEffect(() => {
    // Ensure this runs only client-side
    if (typeof window !== 'undefined') {
      document.body.classList.remove('light-mode', 'dark-mode');
      document.body.classList.add(`${theme}-mode`);
      localStorage.setItem('app-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide a default value for theme during server-side rendering or initial client load
  // to prevent hydration mismatch, though the useEffect will soon update it.
  const initialContextValue = {
    theme: typeof window === 'undefined' ? 'light' : theme, // Use 'light' or a sensible default SSR theme
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={initialContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
