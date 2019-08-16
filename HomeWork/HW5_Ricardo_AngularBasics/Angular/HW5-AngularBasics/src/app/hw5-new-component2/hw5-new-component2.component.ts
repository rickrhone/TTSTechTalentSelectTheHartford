import { Component, OnInit } from "@angular/core";
//import the persin service
import { PersonService } from "../person.service";
import { Person } from "../Person";

@Component({
  selector: "app-hw5-new-component2",
  templateUrl: "./hw5-new-component2.component.html",
  styleUrls: ["./hw5-new-component2.component.css"]
})
export class HW5NewComponent2Component implements OnInit {
  person1: Person;
  person2: Person;

  constructor(private personservice: PersonService) {}

  ngOnInit() {
    this.person1 = this.personservice.getPerson1();
    this.person2 = this.personservice.getPerson2();
  }
}
