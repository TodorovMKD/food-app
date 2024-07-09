import { Component } from '@angular/core';
import { RecipeDetailsCardComponent } from './recipe-details-card/recipe-details-card.component';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [RecipeDetailsCardComponent],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {
  showRecipeDetails: boolean = false;
  count: number = 0;

  getRecipeDetails() {
    this.count++;
    if (this.count > 0) {
      this.showRecipeDetails = true;
      console.log(this.count);
    }
  }
}
