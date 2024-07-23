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
  @Input() idMeal: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getFoodByID(this.idMeal).subscribe((data) => {
      this.idMeal = data;
      console.log(this.idMeal);
    })




  }
}
