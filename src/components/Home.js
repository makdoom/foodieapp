import React, { useState } from "react";
import "./Recipe.css";
import Axios from "axios";
import Recipe from "./Recipe";

// API key and ID
const API_KEY = "4ac283b2ad4d0a72799ec2980ed2b3b2";
const API_ID = "8ab14eb9";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // Fetching data from API
  const getData = async (search) => {
    if (query !== "") {
      const response = await Axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      setRecipes(response.data.hits);
      setQuery("");
    } else {
      console.log("Please enter recipe name ");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData(query);
  };

  const show = () => console.log(recipes);
  return (
    <>
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 onClick={show}>
            F<span>oo</span>die
          </h1>
          <input
            type="text"
            placeholder="Search Recipe"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </form>
      </div>

      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe recipe={recipe} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
