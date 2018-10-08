import React from "react";
import PropTypes from "prop-types";

function RecipeSearchFilters({
  healthFilters,
  dietFilters,
  receiveHealthFilters,
  receiveDietFilters,
  receiveRemoveDietFilter,
  receiveRemoveHealthFilter,
  classes,
  receiveApplyFilters
}) {

  function handleClick(event) {
    if (
      event.target.className === "search__filters__health__checkbox" &&
      event.target.checked === true
    ) {
     receiveHealthFilters(event.target.id);
    } else if (
      event.target.className === "search__filters__health__checkbox" &&
      event.target.checked === false
    ) {
      receiveRemoveHealthFilter(event.target.id);
    } else if (
      event.target.className === "search__filters__diet__checkbox" &&
      event.target.checked === true
    ) {
      receiveDietFilters(event.target.id);
    } else if (
      event.target.className === "search__filters__diet__checkbox" &&
      event.target.checked === false
    ) {
      receiveRemoveDietFilter(event.target.id);
    } else if (event.target.className === "search__filters__apply") {
      receiveApplyFilters();
    }
  }

  return (
    <div className={classes}>
      <div className="recipe__search__filters">
        {healthFilters.map(item => (
          <div className="recipe__individual__filter" key={item.label}>
            <label>{item.label}</label>{" "}
            <input
              id={item.apiTerm}
              onClick={handleClick}
              className="search__filters__health__checkbox"
              type="checkbox"
            />
          </div>
        ))}
        {dietFilters.map(item => (
          <div className="recipe__individual__filter" key={item.label}>
            <label>{item.label}</label>{" "}
            <input
              id={item.apiTerm}
              onClick={handleClick}
              className="search__filters__diet__checkbox"
              type="checkbox"
            />
          </div>
        ))}
        <button onClick={handleClick} className="search__filters__apply">
          Apply Filters
        </button>
      </div>
    </div>
  );

}

RecipeSearchFilters.PropTypes = {
  healthFilters: PropTypes.array,
  dietFilters: PropTypes.array,
  receiveDietFilters: PropTypes.func,
  receiveHealthFilters: PropTypes.func,
  receiveRemoveDietFilters: PropTypes.func,
  receiveRemoveHealthFilters: PropTypes.func,
  receiveApplyFilters: PropTypes.func,
  classes: PropTypes.string
}

export default RecipeSearchFilters;
