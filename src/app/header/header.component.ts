import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
