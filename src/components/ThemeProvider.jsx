import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    switch (theme) {
      case 'light':
        document.body.classList.add('light');
        document.body.classList.remove('dark', 'violet');
        break;

      case 'dark':
        document.body.classList.add('dark');
        document.body.classList.remove('light', 'violet');
        break;

      case 'violet':
        document.body.classList.add('violet');
        document.body.classList.remove('light', 'dark');
        break;

      default:
        document.body.classList.add('dark');
        document.body.classList.remove('light', 'violet');
    }
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
