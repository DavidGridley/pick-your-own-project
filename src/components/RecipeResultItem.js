import React from 'react';

class RecipeResultItem extends React.Component{
    constructor() {
        super();
    }

    render(){

        return(
            <div className="recipe__result__item">
                <h2 className="recipe__result__item__title">{this.props.recipe.label}</h2>
                <ul className="recipe__result__item__labels">
                    {this.props.recipe.healthLabels.map(label => <li key={label + this.props.recipe.label}>{label}</li>)}
                </ul>
                <img className="recipe__result__item__image" src={this.props.recipe.image}/>
                <a href={this.props.recipe.url}>Full recipe available at: {this.props.recipe.source}</a>
            </div>
        )
    }
}


export default RecipeResultItem;


/* calories: 4061.8974052925732
cautions: (2) ["Eggs", "Milk"]
dietLabels: []
digest: (24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
healthLabels: (3) ["Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"]
image: "https://www.edamam.com/web-img/32d/32da8c201c42d8aae7a7f51449c83e2a.jpg"
ingredientLines: (19) ["2 tsp Vegetable Oil (picadillo)", "1/2 x white onion (large), chopped (1 1/2 cups) (picadillo)", "1 lb Ground Chuck (80 percent lean) (picadillo)", "1 tbsp minced garlic cloves(1 to 2 cloves) (picadillo)", "2 x tomatoes (medium), diced (2 3/4 cups) (picadillo)", "1 1/2 tsp Paprika (picadillo)", "1 tsp ancho chile powder (picadillo)", "1 tsp Dried Oregano (picadillo)", "1 tsp coarse salt (picadillo)", "1 tsp freshly ground pepper (picadillo)", "3/4 tsp Ground Cumin (picadillo)", "1 1/2 cup water (picadillo)", "3 tsp White Vinegar (picadillo)", "vegetable oil for frying (tacos)", "20 x Corn Tortillas (tacos)", "Iceberg Lettuce Shredded,for serving (tacos)", "white onion shredded,for serving (tacos)", "shredded cheddar cheese (tacos)", "salsa Picante, for serving (tacos)"]
ingredients: (16) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
label: "Crisp Tacos Picadillo"
shareAs: "http://www.edamam.com/recipe/crisp-tacos-picadillo-6c6b5baf220ceb5b25b7c9695f91046e/tacos"
source: "Lottie + Doof"
totalDaily: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, CHOCDF: {…}, FIBTG: {…}, …}
totalNutrients: {ENERC_KCAL: {…}, FAT: {…}, FASAT: {…}, FATRN: {…}, FAMS: {…}, …}
totalTime: 0
totalWeight: 2227.0531005009148
uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_6c6b5baf220ceb5b25b7c9695f91046e"
url: "http://www.lottieanddoof.com/2009/07/picadillo/"
yield: 14
*/