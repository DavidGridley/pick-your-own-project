import React from "react";

class RecipeSearchFilters extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
      if (event.target.className === "search__filters__health__checkbox" && event.target.checked === true) {
          this.props.receiveHealthFilters(event.target.id);
      } else if (event.target.className === "search__filters__health__checkbox" && event.target.checked === false) {
        this.props.receiveRemoveHealthFilter(event.target.id);
      } else if (event.target.className === "search__filters__diet__checkbox" && event.target.checked === true) {
        this.props.receiveDietFilters(event.target.id);
      } else if (event.target.className === "search__filters__diet__checkbox" && event.target.checked === false) {
        this.props.receiveRemoveDietFilter(event.target.id);
      } else if (event.target.className === "search__filters__apply") {
        this.props.receiveApplyFilters();
        console.log("bang");
      }
  }


  render() {
    return (
      <div className={this.props.classes}>
        <div className="recipe__search__filters">
          {this.props.healthFilters.map(item => (
            <div className="recipe__individual__filter" key={item.label}>
              <label>{item.label}</label> <input id={item.apiTerm} onClick={this.handleClick} className="search__filters__health__checkbox" type="checkbox" />
            </div>
          ))}
          {this.props.dietFilters.map(item => (
            <div className="recipe__individual__filter" key={item.label}>
              <label>{item.label}</label> <input id={item.apiTerm} onClick={this.handleClick} className="search__filters__diet__checkbox" type="checkbox" />
            </div>
          ))}
          <button onClick={this.handleClick} className="search__filters__apply">Apply Filters</button>
        </div>
      </div>
    );
  }
}

export default RecipeSearchFilters;
