import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-villain',
  templateUrl: './add-villain.component.html',
  styleUrls: ['./add-villain.component.css']
})
export class AddVillainComponent implements OnInit {
  villainName: string;
  @Output() add: EventEmitter<String> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addVillain() {
    this.add.emit(this.villainName);
  }

}
