import React from "react";
import RecipeResultItem from "./RecipeResultItem";

class RecipeResults extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="recipe__results">
        {this.props.recipeArray.map(recipe => (
          <RecipeResultItem key={recipe.recipe.label + recipe.recipe.source} recipe={recipe.recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeResults;
