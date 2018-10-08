import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

function Pagination({
  pageData,
  receiveMoreResults,
  recipeArray,
  totalResults
}) {
  function handleClick(event) {
    if (event.target.id === "pages__mobile__button") {
      receiveMoreResults();
    }
  }

  const mobileClasses = cx("pages__mobile__button", {
    "pages__mobile__button--noResults": recipeArray.length === 0,
    "pages__mobile__button--results": recipeArray.length <= 1
  });

  return (
    <div className="pages">
      <div className="pages__mobile">
        <button
          id="pages__mobile__button"
          onClick={handleClick}
          className={mobileClasses}
        >
          Show 10 more results
        </button>
      </div>
      <div className="pages__tablet__desktop">
        <button className="pages__previous__page">&larr;</button>
        <p> out of </p>
        <button className="pages__next__page">&rarr;</button>
      </div>
    </div>
  );
}

Pagination.PropTypes = {
  pageData: PropTypes.object,
  receiveMoreResults: PropTypes.func,
  recipeArray: PropTypes.array,
  totalResults: PropTypes.number
}

export default Pagination;
