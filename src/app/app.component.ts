import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private viewportScroller: ViewportScroller) {

  }
  title = 'alqibla-pro';

  NAV_OPTIONS = [
    {
      name: 'Home',
      id: 0,
      anchor: 'home'
    },
    {
      name: 'About',
      id: 1,
      anchor: 'about'
    },
    {
      name: 'Contact',
      id: 2,
      anchor: 'contact'
    }
  ];

  selected:number = -1;

  selectOption(id: number) {
    this.selected = id;
    this.viewportScroller.scrollToAnchor(this.NAV_OPTIONS[id].anchor)
  }

  scrolled(event: any){
    console.log(event)
  }
}
