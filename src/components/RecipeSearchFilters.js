import React from "react";

class RecipeSearchFilters extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
      if (event.target.className === "search__filters__health__checkbox" && event.target.checked === true) {
          this.props.receiveHealthFilters(event.target.id);
      } else if (event.target.className === "search__filters__diet__checkbox" && event.target.checked === true) {
        this.props.receiveDietFilters(event.target.id);
      }
  }


  render() {
    return (
      <div className="search__filters">
        <button className="search__filters__show">Filters</button>
        <div>
          {this.props.healthFilters.map(item => (
            <React.Fragment key={item.label}>
              <label>{item.label}</label> <input id={item.apiTerm} onClick={this.handleClick} className="search__filters__health__checkbox" type="checkbox" />
            </React.Fragment>
          ))}
          {this.props.dietFilters.map(item => (
            <React.Fragment key={item.label}>
              <label>{item.label}</label> <input id={item.apiTerm} onClick={this.handleClick} className="search__filters__diet__checkbox" type="checkbox" />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default RecipeSearchFilters;
