import { Component, inject } from '@angular/core';
import { RecipeDetailsCardComponent } from './recipe-details-card/recipe-details-card.component';
import { ApiFoodService } from '../services/api-food.service';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [RecipeDetailsCardComponent],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {
  recipeDetails: any;
  private apiService = inject(ApiFoodService)

  getRecipeDetails() {
    this.apiService.getRandomFood().subscribe((data) => {
      this.recipeDetails = data;
      console.log(this.recipeDetails);

    })
  }
}
