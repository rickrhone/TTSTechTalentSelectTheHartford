import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; //This gives the application access to all of the template-driven forms features, including ngModel.
import { ReactiveFormsModule } from "@angular/forms"; // enables the use of reactive forms

import { AppComponent } from "./app.component";
import { HW5NewComponentComponent } from "./hw5-new-component/hw5-new-component.component";
import { AppRoutingModule } from "./app-routing.module";
import { HW5NewComponent2Component } from "./hw5-new-component2/hw5-new-component2.component";
import { ApplicationDefaultComponentComponent } from "./application-default-component/application-default-component.component";
import { NewPersonComponentComponent } from "./new-person-component/new-person-component.component";
import { NewpersonreactiveformComponent } from "./newpersonreactiveform/newpersonreactiveform.component";
import { AnimalClassComponentComponent } from './animal-class-component/animal-class-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HW5NewComponentComponent,
    HW5NewComponent2Component,
    ApplicationDefaultComponentComponent,
    NewPersonComponentComponent,
    NewpersonreactiveformComponent,
    AnimalClassComponentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
