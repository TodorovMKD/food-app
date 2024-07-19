import { Component, inject, NgModule } from '@angular/core';
import { ResultCardComponent } from '../result-card/result-card.component';
import { ApiFoodService } from '../../services/api-food.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-ingredients',
  standalone: true,
  imports: [ResultCardComponent, FormsModule],
  templateUrl: './search-ingredients.component.html',
  styleUrl: './search-ingredients.component.css'
})
export class SearchIngredientsComponent {
  private apiService = inject(ApiFoodService)
  recipeDetails: any;
  private _search: string = '';


  public get search(): string {
    return this._search;
  }

  set search(s: string) {
    this._search = s;
    this.recipeDetails = [];
  }

  getRecipeDetails() {
    this.apiService.getFoodURL(this.search).subscribe((data) => {
      this.recipeDetails = data;
      console.log(this.recipeDetails);

    })
  }
}
