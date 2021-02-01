var  favouriteRecipe = {
    recipeTitle : "veganChiaPudding",
    servings: 4,
    ingredients: [
        "3 tbs chia seeds", 
        "500ml almond milk",  
        "1 tsp vanilla powder", 
        "1/2 tsp cinnamon powder"
    ],
    directions: [
        "Measure out ingredients", 
        "add all to a large bowl", 
        "Whisk, then refigerate"
    ],
}
    var ingredients = favouriteRecipe.ingredients;
        for (var index=0; index < ingredients.length; index++){
            console.log(ingredients[index]);
        }
    var directions = favouriteRecipe.directions;
        for (var index=0; index < directions.length; index++) {
            console.log (directions[index]);

    letscook: function (food){
        console.log("I'm hungry, lets cook " + recipeTitle );
    }
     favouriteRecipe.recipeTitle ("veganChiaPudding");
    