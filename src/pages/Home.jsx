import React from "react";
import {
  Header,
  Hero,
  TechStack,
  RecentProjects,
  Contact,
  Footer,
} from "../components";

function Home() {
  return (
    <div className="dark:bg-gray-900 transition-colors duration-700 ease-in bg-white">
      <Hero />
      <TechStack />
      <RecentProjects />
      <Contact />
      <Footer bg={"text-zinc-900 dark:text-zinc-100"} />
    </div>
  );
}

export default Home;
