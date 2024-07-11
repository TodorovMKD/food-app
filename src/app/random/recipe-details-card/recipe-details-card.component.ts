import { Component, inject, Input } from '@angular/core';
import { ApiFoodService } from '../../services/api-food.service';

@Component({
  selector: 'app-recipe-details-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details-card.component.html',
  styleUrl: './recipe-details-card.component.css'
})

export class RecipeDetailsCardComponent {
  @Input() imgCard!: string;
  @Input() titleCard!: string;
  @Input() descriptionCard!: string;
  @Input() linkCard!: string;
}
