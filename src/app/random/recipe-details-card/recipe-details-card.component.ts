import { Component, inject } from '@angular/core';
import { ApiFoodService } from '../../services/api-food.service';

@Component({
  selector: 'app-recipe-details-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details-card.component.html',
  styleUrl: './recipe-details-card.component.css'
})

export class RecipeDetailsCardComponent {
  private apiFoodService = inject(ApiFoodService);
  randomRecipe: any = this.getRandomRecipe();

  getRandomRecipe() {
    this.apiFoodService.getRandomFood().subscribe((data: any) => {
      this.randomRecipe = data.meals[0].strMeal;
      console.log(this.randomRecipe);
    })
  }
}
