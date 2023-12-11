import { CommonModule } from '@angular/common';
import { NAV_OPTIONS } from './../../constants/constants';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { isMobile } from './../../../utils/view.utils';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  public showMenu: boolean = false;
  public NAV_OPTIONS = NAV_OPTIONS;
  public mobile: any;

  @Output() scrollToSection = new EventEmitter<{ id: number, anchor: string }>();
  @Input() currentPosition:number = -1;

  constructor() {
  }
  ngOnInit(): void {
    this.mobile = isMobile();
    if(this.mobile) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }

  openMenu() {
    this.showMenu = true;
  }

  selectOption(id: number) {
    this.currentPosition = id;
    const anchor = id === -1 ? 'logo' : this.NAV_OPTIONS[id].anchor

    
    if(this.mobile) {
      this.showMenu = false;
    }

    this.scrollToSection.emit({ id, anchor });
  }
}
