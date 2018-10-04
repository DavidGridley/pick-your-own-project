import React from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeResults from "./RecipeResults";
import Pagination from "./Pagination";

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
    this.receivePageNumber = this.receivePageNumber.bind(this);
    this.state = {
      searchTerm: "",
      healthFilterArray: [],
      dietFilterArray: [],
      recipeArray: [],
      pageData: {
        firstEntry: 0,
        lastEntry: 10
      },
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
        this.setState(
          {
            recipeArray: body.count === 0 ? [] : body.hits
          },
          () => console.log(body)
        )
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
      }${healthFilters}${dietFilters}&app_id=80413428&app_key=00e1dca10b9bc769bff3c70b22b658fa`
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

  receivePageNumber(number) {
    this.setState({
      currentPage: number
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
          receiveRemoveHealthFilter={this.receiveRemoveHealthFilter}
          receiveRemoveDietFilter={this.receiveRemoveDietFilter}
          receiveApplyFilters={this.receiveApplyFilters}
        />
        <RecipeResults recipeArray={this.state.recipeArray} />
        <Pagination
          pageData={this.state.pageData}
          currentPage={this.state.currentPage}
          receivePageNumber={this.receivePageNumber}
        />
      </React.Fragment>
    );
  }
}

export default Recipes;
