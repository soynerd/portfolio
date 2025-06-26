import React from "react";
import { NavLink } from "react-router";

// components/Navbar.tsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="dark:bg-gray-900 ">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="flex justify-between items-center pt-4 w-full mx-auto ">
          <div className="text-4xl font-sans font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            <NavLink to="/">Naveen</NavLink>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <NavLink
              to="/projects"
              className="hover:text-blue-500 dark:hover:text-blue-400 "
            >
              Projects
            </NavLink>
            <NavLink
              to="/visitors"
              className={"hover:text-blue-500 dark:hover:text-blue-400"}
            >
              Visitors
            </NavLink>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
