import { isInViewport } from './../utils/view.utils';
import { NAV_OPTIONS } from './constants/constants';
import { Component, QueryList, Renderer2, ViewChildren } from '@angular/core';
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
  @ViewChildren('home, about') elms!: QueryList<any>;
  detectedElms = [];
  public NAV_OPTIONS = NAV_OPTIONS;
  public selected: number = -1;
  title = 'alqibla-pro';

  constructor(private renderer: Renderer2, private viewportScroller: ViewportScroller) {
    this.renderer.listen('window', 'resize', this.detectElms.bind(this));
    this.renderer.listen('window', 'scroll', this.detectElms.bind(this));
  }

  ngAfterViewInit () {
    setTimeout(this.detectElms.bind(this))
  }

  selectOption(id: number) {
    this.selected = id;
    this.viewportScroller.scrollToAnchor(this.NAV_OPTIONS[id].anchor)
  }

  detectElms() {
    const detectedElms: any = []
    this.elms.forEach((elm, index) => {
      if (isInViewport(elm.nativeElement)) {
        detectedElms.push(elm.nativeElement.id)
      }
    });

    this.detectedElms = detectedElms
  }
}