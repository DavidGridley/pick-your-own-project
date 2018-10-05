import React from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeResults from "./RecipeResults";
import Pagination from "./Pagination";
import RecipePageImages from "./RecipePageImages";

class Recipes extends React.Component {
  constructor() {
    super();
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.receiveSearchTerm = this.receiveSearchTerm.bind(this);
    this.receiveSubmit = this.receiveSubmit.bind(this);
    this.receiveHealthFilters = this.receiveHealthFilters.bind(this);
    this.receiveDietFilters = this.receiveDietFilters.bind(this);
    this.receiveRemoveHealthFilter = this.receiveRemoveHealthFilter.bind(this);
    this.receiveRemoveDietFilter = this.receiveRemoveDietFilter.bind(this);
    this.receiveApplyFilters = this.receiveApplyFilters.bind(this);
    this.receiveMoreResults = this.receiveMoreResults.bind(this);
    this.state = {
      searchTerm: "",
      healthFilterArray: [],
      dietFilterArray: [],
      recipeArray: [],
      pageData: {
        firstEntry: 0,
        lastEntry: 10
      },
      currentLastEntry: 10,
      totalResults: "",
      healthFilters: [
        { label: "Gluten free", apiTerm: "gluten-free" },
        { label: "Paleo", apiTerm: "paleo" },
        { label: "Vegetarian", apiTerm: "vegetarian" },
        { label: "Vegan", apiTerm: "vegan" }
      ],
      dietFilters: [
        { label: "Low carb", apiTerm: "low-carb" },
        { label: "High protein", apiTerm: "high-protein" }
      ]
    };
  }

  fetchRecipes(url) {
    fetch(url)
      .then(response => response.json())
      .then(body =>
        this.setState({
          recipeArray: body.count === 0 ? [] : body.hits,
          totalResults: body.count
        })
      );
  }

  receiveSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  receiveSubmit() {
    const healthFilters = this.state.healthFilterArray
      .map(filter => `&health=${filter}`)
      .join("");
    const dietFilters = this.state.dietFilterArray
      .map(filter => `&diet=${filter}`)
      .join("");
    this.fetchRecipes(
      `https://api.edamam.com/search?q=${
        this.state.searchTerm
      }${healthFilters}${dietFilters}&from=${
        this.state.pageData.firstEntry
      }&to=${
        this.state.pageData.lastEntry
      }&app_id=80413428&app_key=00e1dca10b9bc769bff3c70b22b658fa`
    );
  }

  receiveHealthFilters(filter) {
    this.setState({
      healthFilterArray: this.state.healthFilterArray.concat([filter])
    });
  }

  receiveRemoveHealthFilter(filter) {
    const filterToBeRemoved = this.state.healthFilterArray;
    filterToBeRemoved.splice(this.state.healthFilterArray.indexOf(filter), 1);
    this.setState({
      healthFilterArray: filterToBeRemoved
    });
  }

  receiveDietFilters(filter) {
    this.setState({
      dietFilterArray: this.state.dietFilterArray.concat([filter])
    });
  }

  receiveRemoveDietFilter(filter) {
    const filterToBeRemoved = this.state.dietFilterArray;
    filterToBeRemoved.splice(this.state.dietFilterArray.indexOf(filter), 1);
    this.setState({
      dietFilterArray: filterToBeRemoved
    });
  }

  receiveApplyFilters() {
    if (this.state.searchTerm !== "") {
      console.log("bang");
      this.receiveSubmit();
    }
  }

  receiveMoreResults() {
    this.setState(
      {
        currentLastEntry: this.state.currentLastEntry + 10
      },
      () => {
        const healthFilters = this.state.healthFilterArray
          .map(filter => `&health=${filter}`)
          .join("");
        const dietFilters = this.state.dietFilterArray
          .map(filter => `&diet=${filter}`)
          .join("");
        this.fetchRecipes(
          `https://api.edamam.com/search?q=${
            this.state.searchTerm
          }${healthFilters}${dietFilters}&from=${
            this.state.pageData.firstEntry
          }&to=${
            this.state.currentLastEntry
          }&app_id=80413428&app_key=00e1dca10b9bc769bff3c70b22b658fa`
        );
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="recipe__content">
          <RecipeSearch
            receiveSubmit={this.receiveSubmit}
            receiveSearchTerm={this.receiveSearchTerm}
            searchTerm={this.state.searchTerm}
            healthFilters={this.state.healthFilters}
            dietFilters={this.state.dietFilters}
            receiveHealthFilters={this.receiveHealthFilters}
            receiveDietFilters={this.receiveDietFilters}
            receiveRemoveHealthFilter={this.receiveRemoveHealthFilter}
            receiveRemoveDietFilter={this.receiveRemoveDietFilter}
            receiveApplyFilters={this.receiveApplyFilters}
          />
          <RecipePageImages recipeArray={this.state.recipeArray} />
          <RecipeResults recipeArray={this.state.recipeArray} />
        </div>
        <Pagination
          pageData={this.state.pageData}
          currentPage={this.state.currentPage}
          receiveMoreResults={this.receiveMoreResults}
          recipeArray={this.state.recipeArray}
          totalResults={this.state.totalResults}
        />
      </React.Fragment>
    );
  }
}

export default Recipes;
