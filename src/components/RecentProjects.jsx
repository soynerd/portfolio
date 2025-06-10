import React from "react";
import { PiLinkSimpleDuotone  } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const GlowingBorderCard = ({ children }) => {
  return (
    <div className="border-trace-card w-full max-w-sm rounded-2xl bg-slate-900 hover:scale-103 transition-normal duration-300 ease-in-out">
      <div className="w-full h-full p-6 bg-slate-950 rounded-2xl">{children}</div>
    </div>
  );
};

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
          --border-size: 1px;
          --border-angle: 0deg;
          --glow-color: #ffffff;
          --glow-spread: 25%;

          border: var(--border-size) solid transparent;
          
          background-image: 
            linear-gradient(to right, #020617, #020617), 
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

      <div className="min-h-5/12 w-full bg-slate-950 flex flex-col items-center justify-center p-4 font-sans py-35">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Recent Projects
          </h1>
          <p className="text-lg text-gray-400">
            Check out some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlowingBorderCard className="w-full max-w-md mx-auto ">
            <div className="">
              <img
                src="./img/smartdo.png"
                alt="Smart DO"
                className="rounded-lg w-full object-cover"
              />

          

              <h2 className="text-xl font-semibold text-white mt-4 flex flex-row justify-between px-3">
                Smart DO
                <div className="flex flex-row gap-2 text-2xl">
                  <a href="https://github.com/soynerd/smartdo" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
                  <a href="https://smartdo.soynerd.com" target="_blank" rel="noopener noreferrer"><PiLinkSimpleDuotone /></a>
                </div>
              </h2>
              <p className="text-gray-400 text-sm mt-1 px-3">Simple digital automation for your daily tasks/plans.</p>

              <div className="flex flex-wrap gap-2 mt-3 px-5">
                {["React", "TailwindCSS", "Redux", "Node JS", "Postgresql"].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-2 py-1 rounded-full border border-gray-400 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlowingBorderCard>
          <GlowingBorderCard className="w-full max-w-md mx-auto">
            <div className="">
              <img
                src="./img/iiitb.png"
                alt="Smart DO"
                className="rounded-lg w-full object-cover"
              />

              <h2 className="text-xl font-semibold text-white mt-4 flex flex-row justify-between px-3">
                College Site
                <div className="flex flex-row gap-2 text-2xl">
                  <a href="https://github.com/soynerd/iiit-b" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://iiit-b.onrender.com" target="_blank" rel="noopener noreferrer"><PiLinkSimpleDuotone /></a>
                </div>
              </h2>
              <p className="text-gray-400 text-sm mt-1 px-3">A responsive website for IIIT Bhopal.</p>

              <div className="flex flex-wrap gap-2 mt-3 px-5">
                {["Node Js", "Express", "EJS", "CSS", "Postgresql"].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-2 py-1 rounded-full border border-gray-400 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlowingBorderCard>
        </div>
      </div>
    </>
  );
}

