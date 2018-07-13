import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { FruitsComponent } from './fruits/fruits.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
