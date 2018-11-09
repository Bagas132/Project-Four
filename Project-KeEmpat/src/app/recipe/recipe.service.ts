import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>(); 

  private recipes:Recipe[]=[
    new Recipe('Burger',
    'A hammburger with a rim of lettuce sitting on a black plate againts a black background',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe ('spesial fried rice',
    'Fried rice is a dish of cooked rice that has been stir-fried in a wok a frying pan and is usually',
    '../src/app/img/2.jpg',
    [
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1) 
    ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

constructor(private slsService: ShoppingListService) { }

}
