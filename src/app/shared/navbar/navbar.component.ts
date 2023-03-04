import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSidebar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showSidebar() {
    this.isSidebar = !this.isSidebar;
  }

}
