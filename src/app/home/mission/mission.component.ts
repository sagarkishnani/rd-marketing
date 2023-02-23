import { Component, OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  faBullseye = faBullseye;
  faLightbulb = faLightbulb;

  constructor() { }

  ngOnInit(): void {
  }

}
