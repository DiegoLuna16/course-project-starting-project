import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector : 'app-recipe-list',
    templateUrl : './recipe-list.component.html',
    styleUrl: './recipe-list.component.css'
})
export class RecipeList {

    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is only a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1cQIAxOP7fophNDmue0R6xG0xrWl9A9BMw&s'),
        new Recipe('A test recipe 2', 'This is only a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1cQIAxOP7fophNDmue0R6xG0xrWl9A9BMw&s'),
    ];

    constructor(){}

    onRecipeSelected(recipe: Recipe){
        this.recipeWasSelected.emit(recipe);
    }

}