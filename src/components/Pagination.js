import React from "react";

class Pagination extends React.Component {
  constructor() {
    super();
  }

  

  render() {
    return (
      <div className="pages">
        <div className="pages__mobile">
          <button className="pages__mobile__button">Show 10 more results</button>
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
