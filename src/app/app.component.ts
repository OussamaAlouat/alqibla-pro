import { NavComponent } from './components/nav/nav.component';
import { isInViewport } from './../utils/view.utils';
import { NAV_OPTIONS } from './constants/constants';
import { Component, QueryList, Renderer2, ViewChildren, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public NAV_OPTIONS = NAV_OPTIONS;
  @ViewChildren('project, mission,vision, valores, asociacinismo, facciones, futuwa, actividades, local, economy') elms!: QueryList<any>;  
  public selected: number = -1;
  title = 'alqibla-pro';

  exampletext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc sapien, tristique et hendrerit dictum, faucibus sed nibh. Ut eleifend eu libero et venenatis. Phasellus tempus ligula non nisi finibus venenatis. Vestibulum leo nibh, lobortis vitae blandit et, venenatis id lorem. Maecenas libero elit, suscipit quis mi vitae, accumsan consectetur tellus. Suspendisse nec libero nulla. Sed ornare mauris id mi aliquet suscipit.
  Ut elementum lacus et tincidunt ultrices. Nulla nec metus non massa tincidunt egestas. Suspendisse tempus odio non gravida ullamcorper. Cras enim sem, tempus a mollis id, laoreet tincidunt enim. Proin id nisi sit amet velit accumsan euismod. Vestibulum ut leo ullamcorper arcu fermentum fermentum. Fusce id purus at velit tempor venenatis. Aenean erat sapien, aliquet facilisis tempor sit amet, ultricies id leo. Phasellus accumsan efficitur aliquam. Phasellus ornare maximus urna vel commodo. Aenean tempor urna eu justo porta, eget tempus ante ultrices. Praesent hendrerit mi eu ante molestie sollicitudin. Vestibulum lobortis ultrices ultrices. Duis viverra nec orci quis scelerisque. Donec sed tortor quis erat pulvinar consequat.
  Sed pulvinar nisl est, ut iaculis magna egestas nec. Maecenas eu tellus vitae purus dapibus faucibus. Morbi eget aliquam ex. Vestibulum porta nisl venenatis porta auctor. Nam vel ante nulla. Integer in congue lectus. Ut sagittis volutpat tortor at consectetur. Morbi accumsan sem vel molestie eleifend. Praesent molestie libero accumsan, sodales quam mattis, commodo nisi.
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam posuere metus eget finibus tempus. Mauris lacinia risus eget dui vulputate, vitae vehicula leo vestibulum. Nulla at luctus metus. Donec fringilla vestibulum tincidunt. Suspendisse viverra magna vitae euismod pellentesque. In at augue eget lectus auctor consequat at quis velit. Sed placerat nunc nec magna volutpat iaculis. Donec tincidunt leo eu pellentesque luctus. Mauris ante est, molestie mattis interdum sed, ullamcorper vel libero. Nullam at tempor lectus. Curabitur posuere, dolor non varius auctor, odio justo semper turpis, non dignissim nulla augue nec nisi. Praesent commodo consectetur faucibus. In vel arcu at nulla semper vulputate rutrum nec leo. Pellentesque tincidunt fringilla mauris, ac tristique nunc luctus nec.
  Suspendisse feugiat lobortis nulla, ut pharetra odio laoreet a. Nam in nulla leo. Vivamus id massa id neque sodales pellentesque. Suspendisse sed dolor maximus, dignissim lorem vel, aliquet nulla. Nulla consectetur purus condimentum, pharetra erat at, pulvinar libero. Mauris congue urna id euismod tristique. Sed posuere lectus at metus facilisis, tempor suscipit libero dictum. Integer nec dolor nisl. Curabitur sollicitudin augue eu augue tincidunt accumsan. Nulla iaculis sodales dictum.`

  constructor(private renderer: Renderer2, private viewportScroller: ViewportScroller) {
    this.renderer.listen('window', 'resize', this.detectElms.bind(this));
    this.renderer.listen('window', 'scroll', this.detectElms.bind(this));
  }

  ngAfterViewInit () {
    setTimeout(this.detectElms.bind(this))
  }

  selectOption(anchor: any) {
    this.viewportScroller.scrollToAnchor(anchor);
  }

  detectElms() {
    this.elms.forEach((elm, index) => {
      if (isInViewport(elm.nativeElement)) {
        const finded = this.NAV_OPTIONS.find((el) => el.anchor  === elm.nativeElement.id);
        if(finded) {
          this.selected = finded.id;
        }
      }
    });
  }
}