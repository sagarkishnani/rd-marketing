import { Component, OnInit } from '@angular/core';

interface Project {
  id: string;
  name: string;
  count: number;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
