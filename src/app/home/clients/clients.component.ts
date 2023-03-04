import { Component, OnInit } from '@angular/core';

interface Client {
  id: number,
  name: string,
  image: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  url: string = '../../../assets/img/clients/'
  clients: Client[] = [
    {
      id: 1,
      name: 'Yamaha',
      image: 'yamaha.png'
    },
    {
      id: 2,
      name: 'Yamaha',
      image: 'yamaha.png'
    },
    {
      id: 3,
      name: 'Yamaha',
      image: 'yamaha.png'
    },
    {
      id: 4,
      name: 'Yamaha',
      image: 'yamaha.png'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
