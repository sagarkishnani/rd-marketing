import { animate, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]
    )
  ],
})
export class NavbarComponent implements OnInit {

  isSidebar: boolean = false;
  faBars = faBars;
  faXmark = faXmark;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToSection(section: string) {
    this.scroller.scrollToAnchor(section);
    this.isSidebar = false;
  }

  showSidebar() {
    this.isSidebar = !this.isSidebar;
  }

}
