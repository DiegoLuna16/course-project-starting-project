import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { animate } from '@angular/animations';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient(name: string, amount: number) {
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
