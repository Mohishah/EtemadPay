'use client';

import React, { useContext } from 'react';
import ThemeContext from '@context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ padding: '10px', margin: '10px', cursor: 'pointer', position: 'fixed', top: '10px', right: '10px', zIndex: 9999 }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeSwitcher;
