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
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1, paddingLeft: 0 + 'rem' })),
      transition(':enter', [
        style({ opacity: 1, paddingLeft: 0 + 'rem' }),
        animate(200),
      ]),
      transition(
        ':leave',
        animate(600, style({ opacity: 0, width: 0 + 'rem', }))
      ),
    ]),
  ],
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
      details: ['SEO', 'Google Ads']
    },
    {
      index: 3,
      id: '03',
      name: 'Diseño web',
      description: 'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project.',
      pdfURL: '',
      details: ['Landing Pages', 'Ecommerce', 'Blogs']
    },
    {
      index: 4,
      id: '04',
      name: 'Branding',
      description: 'We create world-class websites using modern design practices. Mobile-first websites and web experiences are essential to the success of your web project.',
      pdfURL: '',
      details: ['Logos', 'Rebranding']
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
