import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Observable<any>;
  title = 'Harry Potter Characters';
  houses: string[];
  constructor(private characterService: CharacterService, private router: Router) {
    this.characters = this.characterService.getCharacters();
  }

  ngOnInit() {
  }
  selectCharacter(character) {
    this.router.navigate(['/character', character.name.replace(/\s/g, '_')])
  }

}
