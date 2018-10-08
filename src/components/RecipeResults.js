import React from "react";
import RecipeResultItem from "./RecipeResultItem";

function RecipeResults({recipeArray}) {
  return (
    <div className="recipe__results">
      {recipeArray.map(recipe => (
        <RecipeResultItem key={recipe.recipe.label + recipe.recipe.source} recipe={recipe.recipe} />
      ))}
    </div>
  );
}

export default RecipeResults;
