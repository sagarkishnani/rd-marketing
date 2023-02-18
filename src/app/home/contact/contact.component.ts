import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: any;
  
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [Validators.required]),
      Help: new FormControl('', [Validators.required]),
    })
  }

}
