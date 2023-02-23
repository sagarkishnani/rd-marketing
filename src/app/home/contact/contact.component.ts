import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Service {
  id: number;
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: any;
  services: Service[] = [
    {
      id: 1,
      name: 'Marketing digital',
      isActive: false
    },
    {
      id: 2,
      name: 'Posicionamiento SEO',
      isActive: false
    },
    {
      id: 3,
      name: 'Diseño web',
      isActive: false
    },
    {
      id: 4,
      name: 'Branding',
      isActive: false
    },
    {
      id: 5,
      name: 'Diseño de logos',
      isActive: false
    },
  ]

  selectedServices: Service[] = [];

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
    })
  }

  addService(service: Service) {
    service.isActive = !service.isActive;

    if (service.isActive) {
      this.selectedServices.push(service);
    }

    if (!service.isActive) {
      this.selectedServices = this.selectedServices.filter(x => x.id !== service.id);
    }

  }

}
