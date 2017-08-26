import { Component, Input, OnInit } from '@angular/core';

import { MainService } from '../main.service';
@Component({
  selector: 'app-villain-home',
  templateUrl: './villain-home.component.html',
  styleUrls: ['./villain-home.component.css']
})
export class VillainHomeComponent implements OnInit {
  homeVillains = ["Boba Fett", "Darth Vader"];
  constructor(private mainService: MainService) { }

  ngOnInit() {
  }
  addVillain(villain) {
    this.mainService.addVillain(villain);
  }

}
