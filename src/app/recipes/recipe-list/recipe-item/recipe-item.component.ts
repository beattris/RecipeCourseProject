import { Component, Input, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../../recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  // THIS CODE "@Input() index: number;" ENABLES US TO PASS THE INDEX FROM OUTSIDE
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();
}
