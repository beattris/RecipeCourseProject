
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a test recipe',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
    ),
    new Recipe(
      'A second test recipe',
      'this is a second test recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUueiyPEC9mhgwLaIcGRIgzh9dFMXunv3Dg&usqp=CAU'
    ),
  ];
    
    getRecipes() {
        return this.recipes.slice();
  }
}
