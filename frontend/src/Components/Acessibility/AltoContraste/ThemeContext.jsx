// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => setHighContrast(!highContrast);

  return (
    <ThemeContext.Provider value={{ highContrast, toggleContrast }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
