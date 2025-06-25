import React from "react";
import { Outlet } from "react-router";

import { Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <div className="min-h-screen ">
        {/* Your whole app here */}
        <div className="dark:bg-gray-900 transition-colors duration-700 ease-in bg-white">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
