import React from "react";
import "./App.css";
import "./responsive.css";
import "./components/Recipe.css";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import "./components/RecipeDetail.css";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/recipe/:calories" component={RecipeDetails} />
    </div>
  );
}

export default App;
