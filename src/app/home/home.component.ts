import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private metaTagService: Meta) { }

  ngOnInit(): void {
    this.metaTagService.updateTag(
      {
        name: 'description', content: 'Somos una agencia de marketing conformada por asesores profesionales dispuestos a potenciar tu negocio. Realizamos proyectos de branding, páginas web, diseño de logos, marketing digital, entre otros.'
      }
    )
    AOS.init();
  }

}
