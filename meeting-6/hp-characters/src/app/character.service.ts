import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {

  constructor(private http: Http) { }
  getCharacters() {
    return this.http.get('http://hp-api.herokuapp.com/api/characters').map(response => response.json());
  }
}
