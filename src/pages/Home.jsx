import React from "react";
import {
  Header,
  Hero,
  TechStack,
  RecentProjects,
  Contact,
} from "../components";

function Home() {
  return (
    <div>
      <Hero />
      <TechStack />
      <RecentProjects />

      <Contact />

      <div className="max-w-4xl mx-auto text-center text-sm text-zinc-900 dark:text-zinc-100 py-2 ">
        <p>
          © Naveen. All rights reserved.{" "}
          <span>Last Updated: June 24, 2025</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
