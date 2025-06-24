import React from "react";
import { PiLinkSimpleDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

// Glowing Card Component
const GlowingBorderCard = ({ children }) => {
  return (
    <div className="border-trace-card w-full max-w-sm rounded-2xl hover:scale-105 transition-transform duration-300 ">
      <div className="w-full h-full p-6 bg-white dark:bg-slate-950 rounded-xl border-zinc-700">
        {children}
      </div>
    </div>
  );
};

// Main Component
export default function App() {
  return (
    <>
      <style>{`
        @property --border-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        .border-trace-card {
          --border-size: 2px;
          --border-angle: 0deg;
          --glow-color: #0ff;
          --glow-spread: 25%;

          border: var(--border-size) solid transparent;

          background-image: 
            linear-gradient(to right, #ffffff, #ffffff), 
            conic-gradient(
              from var(--border-angle), 
              transparent 0%, 
              var(--glow-color) var(--glow-spread), 
              transparent calc(var(--glow-spread) * 1.5)
            );

          background-size: 100% 100%;
          background-position: center center;
          background-origin: content-box, border-box;
          background-clip: content-box, border-box;

          animation: border-trace 6s linear infinite;
        }

        @keyframes border-trace {
          to {
            --border-angle: 360deg;
          }
        }
      `}</style>

      <div className="min-h-screen w-full bg-white dark:bg-slate-950 flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
            Recent Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Few things I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <GlowingBorderCard>
            <img
              src="./img/smartdo.png"
              alt="Smart DO"
              className="rounded-lg w-full object-cover"
            />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-4 flex justify-between px-1">
              Smart DO
              <div className="flex gap-2 text-2xl text-slate-800 dark:text-white">
                <a href="https://github.com/soynerd/smartdo" target="_blank"><FaGithub /></a>
                <a href="https://smartdo.soynerd.com" target="_blank"><PiLinkSimpleDuotone /></a>
              </div>
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 px-1">
              Smart digital automation for your daily tasks.
            </p>

            <div className="flex flex-wrap gap-2 mt-3 px-1">
              {["React", "TailwindCSS", "Redux", "Node JS", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-2 py-1 rounded-full border border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlowingBorderCard>

          {/* Project 2 */}
          <GlowingBorderCard>
            <img
              src="./img/iiitb.png"
              alt="College Site"
              className="rounded-lg w-full object-cover"
            />

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-4 flex justify-between px-1">
              College Site
              <div className="flex gap-2 text-2xl text-slate-800 dark:text-white">
                <a href="https://github.com/soynerd/iiit-b" target="_blank"><FaGithub /></a>
                <a href="https://iiit-b.onrender.com" target="_blank"><PiLinkSimpleDuotone /></a>
              </div>
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 px-1">
              Responsive website for IIIT Bhopal.
            </p>

            <div className="flex flex-wrap gap-2 mt-3 px-1">
              {["Node JS", "Express", "EJS", "CSS", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-2 py-1 rounded-full border border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlowingBorderCard>
        </div>
      </div>
    </>
  );
}
