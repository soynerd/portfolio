import React from 'react'

// components/Navbar.tsx
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // Optional: for icons


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center py-4 w-full mx-auto pt-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="text-4xl font-sans font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        Naveen
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
        <a href="#visitors" className="hover:text-blue-500 dark:hover:text-blue-400">Visitors</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}

