import React from "react";
import { Header, ProjectTimeline, Footer } from "../components";
function Projects() {
  return (
    <div className="bg-gradient-to-b from-50% to-black dark:bg-none dark:bg-slate-900">
      <ProjectTimeline />
      <Footer bg={"text-white"} />
    </div>
  );
}

export default Projects;
