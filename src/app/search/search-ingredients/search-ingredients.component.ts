import { Component } from '@angular/core';
import { ResultCardComponent } from '../result-card/result-card.component';

@Component({
  selector: 'app-search-ingredients',
  standalone: true,
  imports: [ResultCardComponent],
  templateUrl: './search-ingredients.component.html',
  styleUrl: './search-ingredients.component.css'
})
export class SearchIngredientsComponent {
  showRecipes: boolean = false;

  toggleCards() {
    this.showRecipes = !this.showRecipes;
  }
}
