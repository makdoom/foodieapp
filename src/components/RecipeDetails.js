import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const RecipeDetails = (props) => {
  const recipe = props.location.state.recipe;
  console.log(recipe.ingredients);
  return (
    <div className="container">
      <div className="active-recipe">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="active-recipe-img"
        />
        <h2 className="active-recipe-title">{recipe.label}</h2>
        <p className="ingredients-heading">ingredients</p>
        <div className="active-recipe-ingredients">
          {recipe.ingredients.map((item, index) => (
            <li className="ingredient-list" key={index}>
              {item.text}
              <p>
                <span>Weight : </span> {Math.round(item.weight)}
              </p>
            </li>
          ))}
        </div>

        <div className="active-recipe-footer">
          <Link to="/">
            <button className="back">
              <span>
                <FontAwesomeIcon icon={faArrowLeft} /> Go Back
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
