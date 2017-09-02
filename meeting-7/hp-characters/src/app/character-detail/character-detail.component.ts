import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { CharacterService } from '../character.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character:  any[];
  constructor(private route: ActivatedRoute, private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.character = data.character);
  }

}
