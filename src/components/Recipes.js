import React from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeResults from "./RecipeResults";

class Recipes extends React.Component {
  constructor() {
    super();
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.receiveSearchTerm = this.receiveSearchTerm.bind(this);
    this.receiveSubmit = this.receiveSubmit.bind(this);
    this.receiveHealthFilters = this.receiveHealthFilters.bind(this);
    this.receiveDietFilters = this.receiveDietFilters.bind(this);
    this.state = {
      searchTerm: "",
      healthFilterArray: [],
      dietFilterArray: [],
      recipeArray: [],
      healthFilters: [
        { label: "Dairy free", apiTerm: "dairy-free" },
        { label: "Egg free", apiTerm: "egg-free" },
        { label: "Gluten free", apiTerm: "gluten-free" },
        { label: "Low sugar", apiTerm: "low-sugar" },
        { label: "Paleo", apiTerm: "paleo" },
        { label: "Vegetarian", apiTerm: "vegetarian" },
        { label: "Vegan", apiTerm: "vegan" }
      ],
      dietFilters: [
        { label: "Low carb", apiTerm: "low-carb" },
        { label: "High protein", apiTerm: "high-protein" },
        { label: "Low fat", apiTerm: "low-fat" }
      ]
    };
  }

  fetchRecipes(url) {
    fetch(url)
      .then(response => response.json())
      .then(body =>
        this.setState({ recipeArray: body.count === 0 ? [] : body.hits }, () =>
          console.log(this.state.recipeArray)
        )
      );
  }

  receiveSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  receiveSubmit() {
    const healthFilters = this.state.healthFilterArray.map(filter => `health=${filter}`).join('&');
    const dietFilters = this.state.dietFilterArray.map(filter => `diet=${filter}`).join('&');
    this.fetchRecipes(
      `https://api.edamam.com/search?q=${this.state.searchTerm}${healthFilters}${dietFilters}&app_id=80413428&app_key=00e1dca10b9bc769bff3c70b22b658fa`
    );
  }

  receiveHealthFilters(filter){
      this.setState({
        healthFilterArray: this.state.healthFilterArray.concat([filter])
      })
  }

  receiveDietFilters(filter){
    this.setState({
        dietFilterArray: this.state.dietFilterArray.concat([filter])
      })
  }

  render() {
    return (
      <React.Fragment>
        <RecipeSearch
          receiveSubmit={this.receiveSubmit}
          receiveSearchTerm={this.receiveSearchTerm}
          searchTerm={this.state.searchTerm}
          healthFilters={this.state.healthFilters}
          dietFilters={this.state.dietFilters}
          receiveHealthFilters={this.receiveHealthFilters}
          receiveDietFilters={this.receiveDietFilters}
        />
        <RecipeResults recipeArray={this.state.recipeArray} />
      </React.Fragment>
    );
  }
}

export default Recipes;
