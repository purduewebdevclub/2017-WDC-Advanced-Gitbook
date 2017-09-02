import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterService } from './character.service';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterResolverService } from './resolvers/character-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: CharactersComponent },
      { path: 'character/:id', component: CharacterDetailComponent, resolve: { character: CharacterResolverService } }
    ])
  ],
  providers: [CharacterService, CharacterResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
