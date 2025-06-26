import React from "react";
import { PiLinkSimpleDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    date: "June, 2025",
    name: "Portfolio",
    description: "A fast and detailed portfolio site. ",
    useCase: "Cool Visitor page",
    img: "https://i.ibb.co/svBtDJ95/Portfolio.png",
    tech: ["React", "Tailwind", "React Router", "EmailJS"],
    github: "https://github.com/soynerd/portfolio",
    link: "https://soynerd.co.in",
  },
  {
    date: "May, 2025",
    name: "Smart Do",
    description: "AI-driven Todo App",
    useCase: "Helps creating a well structured task list for a Goal",
    img: "https://i.ibb.co/kVJKNWqz/smartdo.png",
    tech: [
      "React Router",
      "NodeJS",
      "Express",
      "PassportJS",
      "OpenAI API",
      "Local Storage",
      "React",
      "Tailwind",
    ],
    github: "https://github.com/soynerd/smartdo",
    link: "https://smartdo.soynerd.co.in",
  },
  {
    date: "Mar, 2025",
    name: "Movie Sync",
    description: "Get movie recommendation",
    useCase: "Helps monitor real-time data for business decisions.",
    img: "https://i.ibb.co/MkKz1MMW/Movie-Sync.png",
    tech: ["Redux", "API services", "React", "Tailwind"],
    github: "https://github.com/soynerd/moviesync",
    link: "https://moviesync.soynerd.co.in",
  },
  {
    date: "Nov, 2024",
    name: "IIIT-B",
    description: "Common ground for college students.",
    useCase: "Helps exchanging data academic related data.",
    img: "https://i.ibb.co/R4Gz1XV0/iiitb.png",
    tech: ["Nodejs", "EJS", "CSS", "JS", "Postgres", "Local Auth", "Webflow"],
    github: "https://github.com/soynerd/iiit-b",
    link: "https://iiit-b.onrender.com",
  },
  {
    date: "Sept, 2024",
    name: "Job Seeker",
    description: "Frontend for Job Site.",
    useCase: "Helps users to get internship and job.",
    img: "https://i.ibb.co/3y9CBPn5/Job-Portal.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/your-repo/project-alpha",
    link: "https://soynerd.github.io/job-portal/",
  },
  {
    date: "Feb, 2024",
    name: "Start Page for Browser",
    description: "Get a tab to easily surf the internet.",
    useCase: "Easily customisable for required shortcut.",
    img: "https://i.ibb.co/N6HJCb7n/Browser-Landing.png",
    tech: ["HTML", "CSS", "JS", "local Storage"],
    github: "https://github.com/soynerd/homePage",
    link: "https://soynerd.github.io/homePage/",
  },
  {
    date: "Jan, 2024",
    name: "Initial Portfolio",
    description: "Portfolio site for me",
    useCase: "Made with basic tech.",
    img: "https://i.ibb.co/WpMcX4CK/Initial-Portfolio.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/soynerd/Me",
    link: "https://soynerd.github.io/Me/",
  },

  // Add more projects here...
];

export default function ProjectTimeline() {
  return (
    <div className="py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto  dark:text-white flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-12 text-center">
        My Projects Timeline
      </h1>

      <div className="relative border-l border-gray-400 dark:border-gray-600 ml-4 sm:ml-10">
        {projects.map((proj, index) => (
          <div key={index} className="mb-16 relative pl-8 sm:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-2 sm:left-[-0.7rem] top-25 sm:top-20 w-4 h-4 sm:w-6 sm:h-6 bg-black dark:bg-black border-4 border-blue-500 rounded-full"></div>
            <div className="absolute -left-7 sm:left-[-2rem]  top-30 text-xs sm:text-md">
              {proj.date}
            </div>

            {/* Card */}
            <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-black dark:bg-none dark:bg-slate-800 text-white rounded-2xl shadow-xl border border-gray-700 max-w-full sm:max-w-2xl">
              <img
                src={proj.img}
                alt={proj.name}
                className="w-full h-48 sm:h-64 object-cover rounded-md mb-4"
              />
              <div className="text-sm text-gray-300 dark:text-gray-400 mb-1">
                {proj.date}
              </div>

              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">{proj.name}</h2>
                  <p className="mb-2 text-gray-200">{proj.description}</p>
                  <p className="text-blue-400 font-medium mb-4">
                    {proj.useCase}
                  </p>
                </div>
                <div className="flex gap-4 mr-5">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-8 h-8 hover:text-blue-400 transition" />
                  </a>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <PiLinkSimpleDuotone className="w-8 h-8 hover:text-blue-400 transition" />
                  </a>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gradient-to-br from-60% to-black dark:bg-none dark:bg-slate-700 rounded-full border border-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Icons */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
