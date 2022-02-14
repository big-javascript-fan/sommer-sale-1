import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router";

import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
