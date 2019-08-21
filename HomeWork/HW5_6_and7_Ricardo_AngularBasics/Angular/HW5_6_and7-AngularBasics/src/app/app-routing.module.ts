import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HW5NewComponentComponent } from "./hw5-new-component/hw5-new-component.component";
import { HW5NewComponent2Component } from "./hw5-new-component2/hw5-new-component2.component";
import { ApplicationDefaultComponentComponent } from "./application-default-component/application-default-component.component";
import { NewPersonComponentComponent } from "./new-person-component/new-person-component.component";
import { NewpersonreactiveformComponent } from "./newpersonreactiveform/newpersonreactiveform.component";

const routes: Routes = [
  { path: "", component: ApplicationDefaultComponentComponent },
  { path: "hw5Comp", component: HW5NewComponentComponent },
  { path: "hw5Comp2", component: HW5NewComponent2Component },
  { path: "newPerson", component: NewPersonComponentComponent },
  { path: "newPersonR", component: NewpersonreactiveformComponent }
];

@NgModule({
  // declarations: [],
  // imports: [CommonModule]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
