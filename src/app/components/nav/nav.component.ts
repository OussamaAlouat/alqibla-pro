import { CommonModule } from '@angular/common';
import { NAV_OPTIONS } from './../../constants/constants';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { isMobile } from './../../../utils/view.utils';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  public showMenu: boolean = false;
  public selectedSection:number = -1;
  public NAV_OPTIONS = NAV_OPTIONS;
  public mobile: any;

  @Output() scrollToSection = new EventEmitter<String>();
  @Input() currentPosition = new Subject<number>();

  constructor() {
  }
  ngOnInit(): void {
    this.currentPosition.subscribe((val) => this.selectedSection = val);

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
    this.selectedSection = id;
    const anchor = id === -1 ? 'logo' : this.NAV_OPTIONS[id].anchor

    
    if(this.mobile) {
      this.showMenu = false;
    }

    this.scrollToSection.emit(anchor);
  }
}
