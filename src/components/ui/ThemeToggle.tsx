import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-900 shadow-lg hover:scale-110 transition-all duration-300 border border-white/20 dark:border-slate-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="animate-spin-slow" />
      ) : (
        <Moon size={20} className="animate-spin-slow" />
      )}
    </button>
  );
};

export default ThemeToggle;
