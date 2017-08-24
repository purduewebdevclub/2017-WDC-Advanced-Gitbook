import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-villain-home',
  templateUrl: './villain-home.component.html',
  styleUrls: ['./villain-home.component.css']
})
export class VillainHomeComponent implements OnInit {
  villainName: string;
  @Input() villains: string[];
  constructor() { }

  ngOnInit() {
  }
  addVillain() {
    this.villains.push(this.villainName);
    console.log(this.villains);
  }

}
