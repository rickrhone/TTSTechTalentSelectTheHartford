import { Component, OnInit } from "@angular/core";
import { Person } from "../Person";

@Component({
  selector: "app-new-person-component",
  templateUrl: "./new-person-component.component.html",
  styleUrls: ["./new-person-component.component.css"]
})
export class NewPersonComponentComponent implements OnInit {
  person4 = new Person("TemplateForm", "Person", 43);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.person4);
  }

  constructor() {}

  ngOnInit() {}

  // method to console log the value on form submit
  newPerson() {
    this.person4 = new Person("", "", 4);
    //   console.log(this.personForm.controls["FirstName"].value);
  }
}
