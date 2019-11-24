import {Recipe} from './recipe.model';
import { EventEmitter , Output, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]= [
        new Recipe('Pizza Margherita', 'A tasty pizza.', 
        'https://images-gmi-pmc.edge-generalmills.com/c8cbc66e-8f56-4fcd-ae39-582c7d15668f.jpg',
        [
            new Ingredient('Cheese', 1),
            new Ingredient('Tomato', 4)
        ]),
        new Recipe('Lasagne', 'Good looking lasagne.', 
        'https://mobile-cdn.123rf.com/300wm/foodandmore/foodandmore1710/foodandmore171000058/88622811-tranche-de-lasagne-de-b-uf-d%C3%A9licieuse-sur-une-assiette-garnie-de-persil-frais-hach%C3%A9-et-vue-de-pr%C3%A8s-sur-le-.jpg?ver=6',
        [
            new Ingredient('Spaghetti', 2),
            new Ingredient('Falafel', 4)
        ])
      ];

      constructor(private slService: ShoppingListService) {}
      
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}