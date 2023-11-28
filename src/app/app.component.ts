import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alqibla-pro';

  NAV_OPTIONS = [
    {
      name: 'Home',
      id: 1
    },
    {
      name: 'About',
      id: 2
    },
    {
      name: 'Contact',
      id: 3
    }
  ];

  selected:number = 1;

  selectOption(id: number) {
    this.selected = id;
  }
}
