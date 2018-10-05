import React from "react";
import cx from "classnames";

class RecipePageImages extends React.Component {
  constructor() {
    super();
  }

  render() {

    const classes = cx("recipe__page__images", {
      "recipe__page__images--showing": this.props.recipeArray.length === 0,
      "recipe__page__images--notShowing": this.props.recipeArray.length > 0
    })

    return (
      <div className={classes}>
        <h2 className="recipe__page__images__title">Recent posts:</h2>
        <div className="recipe__page__image__container">
          <img
            className="recipe__page__images__image"
            src="/images/alyson-mcphee-499812-unsplash.jpg"
          />
          <h4 className="recipe__page__images__caption">
            <span className="recipe__page__images__span">
              Chopping herbs: When, why, how?
            </span>
          </h4>
        </div>
        <div className="recipe__page__image__container">
          <img
            className="recipe__page__images__image"
            src="/images/rawpixel-752511-unsplash.jpg"
          />
          <h4 className="recipe__page__images__caption">
            <span className="recipe__page__images__span">
              A journey of frustration, tears <br/> and betrayal with eggs
            </span>
          </h4>
        </div>
        <div className="recipe__page__image__container">
          <img
            className="recipe__page__images__image"
            src="/images/gianna-trewavas-641234-unsplash.jpg"
          />
          <h4 className="recipe__page__images__caption">
            <span className="recipe__page__images__span">
              How to achieve your #breakfastgoals <br/> (and photograph them for maximum likes)
            </span>
          </h4>
        </div>
        <div className="recipe__page__image__container">
          <img
            className="recipe__page__images__image"
            src="/images/sander-dalhuisen-715511-unsplash.jpg"
          />
          <h4 className="recipe__page__images__caption">
            <span className="recipe__page__images__span">
              How to present a meal like <br/> Gordon Ramsey is yelling at you
            </span>
          </h4>
        </div>
      </div>
    );
  }
}

export default RecipePageImages;
