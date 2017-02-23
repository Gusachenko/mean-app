import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component.js';

@NgModule({
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
