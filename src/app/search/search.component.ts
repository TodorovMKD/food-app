import { Component } from '@angular/core';
import { SearchIngredientsComponent } from './search-ingredients/search-ingredients.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchIngredientsComponent, ShowDetailsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
