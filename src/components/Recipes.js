import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ recipes }) => {
  return recipes.map((recipe, index) => (
    <div className="card" key={index}>
      <img src={recipe.recipe.image} loading="lazy" alt={recipe.recipe.label} />
      <h5>
        {recipe.recipe.label.length < 20
          ? `${recipe.recipe.label}`
          : `${recipe.recipe.label.substring(0, 20)} ...`}{" "}
      </h5>
      <p>
        PUBLISHER :{" "}
        {recipe.recipe.source.length < 20
          ? `${recipe.recipe.source}`
          : `${recipe.recipe.source.substring(0, 15)} ...`}
      </p>
      <div className="btn-section">
        {/* <Link to="/recipe"> */}
        <Link
          to={{
            pathname: `/recipe/${recipe.recipe.calories}`,
            state: { recipe: recipe.recipe },
          }}
        >
          <button className="ingre-btn btn">
            <span>Ingredients</span>
          </button>
        </Link>

        <a href={recipe.recipe.url}>
          <button className="full-btn btn">
            <span>view Recipe</span>
          </button>
        </a>
      </div>
    </div>
  ));
};

export default Recipe;
