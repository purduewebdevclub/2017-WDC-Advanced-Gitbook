import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.css']
})
export class VillainListComponent implements OnInit {
  @Input() villains: string[];
  constructor() { }

  ngOnInit() {
  }

}
