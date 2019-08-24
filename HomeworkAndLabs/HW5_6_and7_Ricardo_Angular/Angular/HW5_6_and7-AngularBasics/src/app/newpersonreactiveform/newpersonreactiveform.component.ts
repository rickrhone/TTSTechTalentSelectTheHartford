import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms"; // importing the form control class
// By creating these controls in your component class, you get immediate access to listen for, update, and validate the state of the form input
import { Person } from "../Person";

@Component({
  selector: "app-newpersonreactiveform",
  templateUrl: "./newpersonreactiveform.component.html",
  styleUrls: ["./newpersonreactiveform.component.css"]
})
export class NewpersonreactiveformComponent implements OnInit {
  person5 = new Person("Reactive", "Person", 12);

  personForm2 = new FormGroup({
    FirstName: new FormControl(""), // create a new instance of the form control to save as a name
    LastName: new FormControl(""),
    Age: new FormControl("")
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  constructor() {}

  ngOnInit() {}

  newPerson() {
    this.personForm2.patchValue({
      FirstName: "",
      LastName: "",
      Age: ""
    });
  }

  updatePerson() {
    this.personForm2.patchValue({
      FirstName: "Nancy",
      LastName: "James",
      Age: 49
    });
  }
}
