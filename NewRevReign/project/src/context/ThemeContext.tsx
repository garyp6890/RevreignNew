import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isCavemanMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCavemanMode, setIsCavemanMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isCavemanMode ? 'caveman' : 'modern');
  }, [isCavemanMode]);

  const toggleTheme = () => {
    setIsCavemanMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isCavemanMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};