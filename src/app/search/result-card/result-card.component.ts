import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {

  constructor(private router: Router) { }

  showContent: boolean = false;
  @Input() idCard: any;
  @Input() imgCard: any;
  @Input() titleCard: any;
  @Input() descriptionCard: any;
  @Input() linkCard: any;

  toggleCardContent() {
    debugger;
    this.showContent = !this.showContent;
    this.goToDetails(this.idCard)
  }

  goToDetails(id: string): void {
    this.router.navigate(['/details', id]);
  }


}
