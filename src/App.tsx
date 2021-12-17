import React from "react";
import Project from "./pages/project";
import { Link, Route } from "wouter";
import Mint from "./pages/mint";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Route path="/project/:id" component={Project} />
      <Route path="/mint" component={Mint} />
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
