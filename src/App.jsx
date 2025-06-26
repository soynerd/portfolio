import React from "react";
import { Outlet } from "react-router";

import { Header, Footer } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <div className="min-h-screen ">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
