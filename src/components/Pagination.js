import React from "react";
import cx from 'classnames';

class Pagination extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      if (event.target.id === "pages__mobile__button") {
          this.props.receiveMoreResults();
          console.log(this.props.recipeArray);
      }
  }

  render() {
      const mobileClasses = cx("pages__mobile__button", {
          'pages__mobile__button--noResults': this.props.recipeArray.length === 0,
          'pages__mobile__button--results': this.props.recipeArray.length <= 1
      })

    return (
      <div className="pages">
        <div className="pages__mobile">
          <button id="pages__mobile__button" onClick={this.handleClick} className={mobileClasses}>Show 10 more results</button>
        </div>
        <div className="pages__tablet__desktop">
            <button className="pages__previous__page">&larr;</button>
            <p>{this.props.currentPage} out of {this.props.pageData.totalPages}</p>
            <button className="pages__next__page">&rarr;</button>
        </div>
      </div>
    );
  }
}

export default Pagination;
