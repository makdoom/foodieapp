import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div className="card">
      <img src={recipe.recipe.image} loading="lazy" alt={recipe.recipe.label} />
      <h5>
        {recipe.recipe.label.length < 20
          ? `${recipe.recipe.label}`
          : `${recipe.recipe.label.substring(0, 20)} ...`}{" "}
      </h5>
      <p>PUBLISHER : {recipe.recipe.source}</p>
      <div className="btn-section">
        <Link
          to={{
            pathname: `/recipe/${recipe.recipe.calories}`,
            state: {
              recipe: recipe.recipe.label,
              calories: recipe.recipe.calories,
            },
          }}
        >
          <button className="ingre-btn btn">
            <span>Ingredients</span>
          </button>
        </Link>

        <button className="full-btn btn">view Recipe</button>
      </div>
    </div>
  );
};

export default Recipe;
