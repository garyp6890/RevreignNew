import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ThemeContextType {
  isCavemanMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCavemanMode, setIsCavemanMode] = useState(() => {
    // Try to get saved preference from localStorage
    try {
      const saved = localStorage.getItem('revreign-caveman-mode');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const toggleTheme = useCallback(() => {
    setIsCavemanMode(prev => {
      const newValue = !prev;
      try {
        localStorage.setItem('revreign-caveman-mode', JSON.stringify(newValue));
      } catch {
        // Silently fail if localStorage is not available
      }
      return newValue;
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isCavemanMode ? 'caveman' : 'modern');
  }, [isCavemanMode]);

  const value = React.useMemo(() => ({
    isCavemanMode,
    toggleTheme
  }), [isCavemanMode, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
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