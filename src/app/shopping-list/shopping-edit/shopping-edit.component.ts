import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @Output() saveIngredient = new EventEmitter<Ingredient>();

  onAddIngredient(name:string, amount: number){
    this.saveIngredient.emit(new Ingredient(name,amount))
  }
  
}