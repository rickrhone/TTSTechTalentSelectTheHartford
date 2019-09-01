import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { SliderModule } from "primeng/slider";
import { ListboxModule } from "primeng/listbox";
import { StepsModule } from "primeng/steps";
import { MenuItem } from "primeng/api";
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    SliderModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ListboxModule,
    StepsModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
  // exports: [
  //   RouterModule
  // ]
})
export class AppModule {}
