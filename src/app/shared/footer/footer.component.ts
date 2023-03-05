import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToSection(section: string) {
    this.scroller.scrollToAnchor(section);
  }

}
