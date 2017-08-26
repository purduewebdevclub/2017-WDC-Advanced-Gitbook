import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VillainHomeComponent } from './villain-home/villain-home.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { AddVillainComponent } from './add-villain/add-villain.component';
import { MainService } from './main.service';

@NgModule({
  declarations: [
    AppComponent,
    VillainHomeComponent,
    VillainListComponent,
    AddVillainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
