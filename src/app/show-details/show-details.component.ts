import { Component, inject, Input } from '@angular/core';
import { ApiFoodService } from '../services/api-food.service';
import { Meal } from '../interfaces/interface-food';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {

  private apiService = inject(ApiFoodService);
  saveData?: Meal;
  @Input() idMeal: any;

  ngOnInit(): void {
    this.apiService.getFoodByID(this.idMeal).subscribe((data: any) => {
      this.saveData = data.meals[0];
      console.log(this.saveData);
    })
  }
}
