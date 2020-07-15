import React from "react";
import "./App.css";
import "./responsive.css";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/recipe/:label" component={Recipe} />
    </div>
  );
}

export default App;
