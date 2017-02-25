import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <button md-raised-button>Raised button</button>
  <a md-mini-fab routerLink="."><md-icon>check</md-icon></a>
  <md-icon>pets</md-icon>`,
})
export class AppComponent  { 
  name: string = 'Angular App!'; 
}
