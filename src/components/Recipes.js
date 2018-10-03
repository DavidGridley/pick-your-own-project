import React from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeResults from "./RecipeResults";

class Recipes extends React.Component {
  constructor() {
    super();
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.receiveSearchTerm = this.receiveSearchTerm.bind(this);
    this.receiveSubmit = this.receiveSubmit.bind(this);
    this.state = {
      searchTerm: "",
      recipeArray: []
    };
  }

  fetchRecipes(url) {
    fetch(url)
      .then(response => response.json())
      .then(
        body => this.setState({ recipeArray: body.count === 0 ? [] : body.hits }, () => console.log(this.state.recipeArray))
      );
  }

  receiveSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  receiveSubmit() {
    console.log(this.state.searchTerm);
    this.fetchRecipes(
      `https://api.edamam.com/search?q=${
        this.state.searchTerm
      }&app_id=80413428&app_key=00e1dca10b9bc769bff3c70b22b658fa`
    );
  }

  render() {
    return (
      <React.Fragment>
        <RecipeSearch
          receiveSubmit={this.receiveSubmit}
          receiveSearchTerm={this.receiveSearchTerm}
          searchTerm={this.state.searchTerm}
        />
        <RecipeResults recipeArray={this.state.recipeArray} />
      </React.Fragment>
    );
  }
}

export default Recipes;
