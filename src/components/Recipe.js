import React from "react";

const API_KEY = "4ac283b2ad4d0a72799ec2980ed2b3b2";
const API_ID = "8ab14eb9";
class Recipe extends React.Component {
  state = {
    currentRecipe: [],
    ingredients: [],
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const calories = this.props.location.state.calories;

    // Fetching the data of a particular recipe
    const req = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const result = await req.json();
    // const tempList = result.hits;
    result.hits.filter((item) =>
      item.recipe.calories === calories && item.recipe.label === title
        ? this.setState({
            currentRecipe: item.recipe,
          })
        : ""
    );
  };

  render() {
    // const recipe = this.state.currentRecipe;
    // const ingre = this.state.ingredients;
    console.log(this.state.currentRecipe);
    return (
      <div className="container">
        {/* <div className="activ-recipe">
          <img
            src={recipe.image}
            alt={recipe.label}
            className="active-recipe-img"
          />
          <h3 className="active-recipe-title">{recipe.label}</h3>
          <h4 className="active-recipe-publisher">
            Publisher: <span>{recipe.source}</span>
          </h4>
          <div className="active-recipe-ingredients"></div>
        </div> */}
      </div>
    );
  }
}

export default Recipe;
