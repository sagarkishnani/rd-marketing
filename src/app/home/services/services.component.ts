import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

interface Service {
  index: number;
  id: string;
  name: string;
  description: string;
  pdfURL: string;
  details: string[]
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [
    {
      index: 1,
      id: '01',
      name: 'Marketing digital',
      description: 'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project.',
      pdfURL: '',
      details: ['Estrategias de marketing', 'Campañas', 'Posts e historias']
    },
    {
      index: 2,
      id: '02',
      name: 'Posicionamiento SEO',
      description: 'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project.',
      pdfURL: '',
      details: ['SEO', 'Campañas', 'Posts e historias']
    },
    {
      index: 3,
      id: '03',
      name: 'Diseño web',
      description: 'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project.',
      pdfURL: '',
      details: ['Estrategias de marketing', 'Campañas', 'Posts e historias']
    },
    {
      index: 4,
      id: '04',
      name: 'Branding',
      description: 'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project.',
      pdfURL: '',
      details: ['Estrategias de marketing', 'Campañas', 'Posts e historias']
    },
  ]

  activeService: Service = {
    index: 1,
    id: '01',
    name: 'Marketing digital',
    description: 'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project.',
    pdfURL: '',
    details: ['Estrategias de marketing', 'Campañas', 'Posts e historias']
  };

  activeServiceIndex: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  setActive(service: Service) {
    this.activeServiceIndex = service.index;
    this.activeService = service;
  }

}
