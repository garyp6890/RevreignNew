import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isCavemanMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-24 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 group
        ${isCavemanMode ? 'bg-[#E8871E] text-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
      aria-label="Toggle Caveman Mode"
    >
      {isCavemanMode ? <Sun size={24} /> : <Moon size={24} />}
      <span className="absolute -left-28 top-1/2 -translate-y-1/2 bg-black/75 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Caveman Mode {isCavemanMode ? 'On' : 'Off'}
      </span>
    </button>
  );
}

export default ThemeToggle;