import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HW5NewComponentComponent } from "./hw5-new-component/hw5-new-component.component";
import { AppRoutingModule } from "./app-routing.module";
import { HW5NewComponent2Component } from './hw5-new-component2/hw5-new-component2.component';
import { ApplicationDefaultComponentComponent } from './application-default-component/application-default-component.component';

@NgModule({
  declarations: [AppComponent, HW5NewComponentComponent, HW5NewComponent2Component, ApplicationDefaultComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
