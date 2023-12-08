import { Component, Input, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService){}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
