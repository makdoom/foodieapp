import React from "react";

const RecipeDetails = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((item) => (
        <p>{item.text}</p>
      ))}
    </div>
  );
};

export default RecipeDetails;
