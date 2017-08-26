import { Injectable } from '@angular/core';

@Injectable()
export class MainService {
  private villains = [
    "Darth Vader",
    "Darth Plagueis"
  ];
  constructor() { }
  getVillains() {
    return Object.assign({}, this.villains);
  }
  addVillain(villain) {
    this.villains.push(villain);
  }
  removeVillain(villain) {
    let index = this.villains.indexOf(villain);
    if(index > -1) {
      this.villains.splice(index, 1);
    }
  }
}
