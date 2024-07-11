import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {
  @Input() imgCard: any;
  @Input() titleCard: any;
  @Input() descriptionCard: any;
  @Input() linkCard: any;
}
