import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  characters: Observable<any>;
  title = 'Harry Potter Characters';
  houses: string[];
  constructor(private characterService: CharacterService) {
    this.characters = this.characterService.getCharacters();
  }
}
