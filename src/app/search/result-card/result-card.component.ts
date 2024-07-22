import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {
  showContent: boolean = false;
  @Input() idCard: any;
  @Input() imgCard: any;
  @Input() titleCard: any;
  @Input() descriptionCard: any;
  @Input() linkCard: any;

  toggleCardContent() {
    this.showContent = !this.showContent;
  }


}
