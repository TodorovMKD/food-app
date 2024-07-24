import { Component, inject, Input } from '@angular/core';
import { ApiFoodService } from '../services/api-food.service';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {

  private apiService = inject(ApiFoodService);
  saveData?: any;
  @Input() idMeal: any;

  ngOnInit(): void {
    this.apiService.getFoodByID(this.idMeal).subscribe((data) => {
      this.saveData = data;
      console.log(this.saveData);
    })
  }
}
