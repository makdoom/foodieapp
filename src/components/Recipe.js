import React from "react";
import "../responsive.css";

const Recipe = ({ recipe }) => {
  return (
    <div className="card">
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h5>
        {recipe.recipe.label.length < 20
          ? `${recipe.recipe.label}`
          : `${recipe.recipe.label.substring(0, 20)} ...`}{" "}
      </h5>
      <p>PUBLISHER : {recipe.recipe.source}</p>
      <div className="btn-section">
        <button className="ingre-btn btn">
          <span>Ingredients</span>
        </button>
        <button className="full-btn btn">Full Recipe</button>
      </div>
    </div>
  );
};

export default Recipe;
