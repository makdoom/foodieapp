import React from "react";
import "./App.css";
import "./responsive.css";
import Home from "./components/Home";

// API key and ID
// const API_KEY = "4ac283b2ad4d0a72799ec2980ed2b3b2";
// const API_ID = "8ab14eb9";
// const url = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
