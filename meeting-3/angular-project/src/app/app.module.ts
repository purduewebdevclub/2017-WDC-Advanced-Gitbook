/* Import Statements */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Import Main Component */
import { AppComponent } from './app.component'; //Not written yet

@NgModule({ //Tell Angular to create a module
    imports: [
        BrowserModule, // Module for creating angular web apps
        FormsModule // Module to manipulate template
    ],
    declarations: [ // Components created by us
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }