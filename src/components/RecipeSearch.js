//https://api.edamam.com/search?q=tofu&app_id=80413428&app_key=00e1dca10b9bc769bff3c70b22b658fa
import React from "react";
import RecipeSearchFilters from "./RecipeSearchFilters";
import cx from "classnames";

class RecipeSearch extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      clicked: false
    }
  }

  handleChange(event) {
    this.props.receiveSearchTerm(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveSubmit();
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const classes = cx("search__filters", {
      "search__filters--visible": this.state.clicked,
      "search__filters--notVisible": !this.state.clicked
    } )

    return (
      <div className="recipe__search">
        <form className="recipe__search__form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search for your meal"
            value={this.props.searchTerm}
            className="recipe__search__input"
          />
          <button className="recipe__search__button" type="submit">
            Search
          </button>
        </form>
        <button onClick={this.handleClick} className="search__filters__show">
          Filters
        </button>
        <RecipeSearchFilters
          healthFilters={this.props.healthFilters}
          dietFilters={this.props.dietFilters}
          receiveHealthFilters={this.props.receiveHealthFilters}
          receiveDietFilters={this.props.receiveDietFilters}
          receiveRemoveHealthFilter={this.props.receiveRemoveHealthFilter}
          receiveRemoveDietFilter={this.props.receiveRemoveDietFilter}
          classes={classes}
          receiveApplyFilters={this.props.receiveApplyFilters}
        />
      </div>
    );
  }
}

export default RecipeSearch;
