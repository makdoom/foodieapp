import React from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const getRecipe = (e) => {
    e.preventDefault();
    console.log("Hey it Works");
  };

  return (
    <div className="App">
      <h2>
        F<span>oo</span>die
      </h2>
      <div className="form">
        <Form getRecipe={getRecipe} />
      </div>
    </div>
  );
}

export default App;
