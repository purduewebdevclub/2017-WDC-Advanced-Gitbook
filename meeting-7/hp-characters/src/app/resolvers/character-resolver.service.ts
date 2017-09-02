import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { CharacterService } from '../character.service';
@Injectable()
export class CharacterResolverService implements Resolve<any> {
    constructor(private characterService: CharacterService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
        let id = route.params['id'];
        return this.characterService.getCharacter(id);
    }
}
