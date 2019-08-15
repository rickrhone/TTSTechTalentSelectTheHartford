import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HW5NewComponentComponent } from './hw5-new-component/hw5-new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HW5NewComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
