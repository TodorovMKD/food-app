import { Component, inject, NgModule } from '@angular/core';
import { ResultCardComponent } from '../result-card/result-card.component';
import { ApiFoodService } from '../../services/api-food.service';

@Component({
  selector: 'app-search-ingredients',
  standalone: true,
  imports: [ResultCardComponent,],
  templateUrl: './search-ingredients.component.html',
  styleUrl: './search-ingredients.component.css'
})
export class SearchIngredientsComponent {
  private apiService = inject(ApiFoodService)
  recipeDetails: any;
  search: string = "Fish";

  getRecipeDetails() {
    this.apiService.getFoodURL(this.search).subscribe((data) => {
      this.recipeDetails = data;
      console.log(this.recipeDetails);

    })
  }
}
