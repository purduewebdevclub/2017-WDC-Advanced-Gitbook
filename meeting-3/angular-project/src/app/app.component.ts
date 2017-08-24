import { Component } from '@angular/core';

@Component({
    template: `<h1> {{userName}} </h1>`, //template to show when using component
    selector: `app-component` //how to use this component in html: <app-component></app-component>
})
export class AppComponent {
    userName = "Bob";
    constructor() {
        setTimeout(() => this.userName = "Not Bob!", 3000);
    }
}