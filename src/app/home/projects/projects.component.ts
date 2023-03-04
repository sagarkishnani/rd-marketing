import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

interface ProjectNumber {
  id: string;
  name: string;
  count: number;
}

interface Project {
  id: number;
  number: string;
  name: string;
  detail: string;
  img: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {

  url: string = '../../../assets/img/projects/'

  swiperConfig: any = {
    slidesPerView: '2',
    breakpoints: {
      0: {
        slidesPerView: '1',
      },
      640: {
        slidesPerView: '2',
      }
    }
  }

  projectNumbers: ProjectNumber[] = [
    {
      id: '1',
      name: 'Años ofreciendo servicios de marketing de alto nivel',
      count: 4,
    },
    {
      id: '2',
      name: 'Proyectos web, branding y de posicionamiento exitosos',
      count: 60,
    },
    {
      id: '3',
      name: 'Clientes satisfechos',
      count: 90,
    },
  ]

  projects: Project[] = [
    {
      id: 1,
      number: '01',
      name: 'Clínica Arthromeds',
      detail: 'Diseño y desarrollo web / UX / SEO',
      img: 'clinic-mockup.webp'
    },
    {
      id: 2,
      number: '02',
      name: 'Conmos Audio',
      detail: 'Diseño y desarrollo web / Branding / SEO / Social media',
      img: 'conmos-proyecto.webp'
    },
    {
      id: 3,
      number: '03',
      name: 'Conmos Audio',
      detail: 'Diseño y desarrollo web / Branding / SEO / Social media',
      img: 'conmos-proyecto.webp'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
