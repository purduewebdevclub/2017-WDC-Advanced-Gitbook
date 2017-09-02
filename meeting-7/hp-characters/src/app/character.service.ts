import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class CharacterService {

  constructor(private http: Http) { }
  getCharacters() {
    return this.http.get('http://hp-api.herokuapp.com/api/characters').map(response => response.json());
  }
  getCharacter(id: string) {
    let name = id.replace(/_/g, ' ');
    return this.getCharacters().map(characters => characters.find(character => character.name === name));
  }
}
