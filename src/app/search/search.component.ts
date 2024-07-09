import { Component } from '@angular/core';
import { SearchIngredientsComponent } from './search-ingredients/search-ingredients.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchIngredientsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
