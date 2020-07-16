import React, { useState, useEffect } from "react";
import Axios from "axios";
import Recipes from "./Recipes";

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
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData(query);
  };

  useEffect(() => {
    const data = localStorage.getItem("Recipe");
    if (data) {
      setRecipes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Recipe", JSON.stringify(recipes));
  });

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
        <Recipes recipes={recipes} />
      </div>
    </>
  );
};

export default Home;
