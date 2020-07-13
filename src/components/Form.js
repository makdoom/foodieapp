import React from "react";

const Form = ({ getRecipe }) => {
  return (
    <>
      <form>
        <input type="text" />
        <button onClick={getRecipe}>Search</button>
      </form>
    </>
  );
};

export default Form;
