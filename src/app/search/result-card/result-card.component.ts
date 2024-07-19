import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {
  showContent: boolean = false;
  @Input() imgCard: any;
  @Input() titleCard: any;
  @Input() descriptionCard: any;
  @Input() linkCard: any;

  toggleCardContent() {
    this.showContent = !this.showContent;
  }
}
