import { Component, OnInit } from "@angular/core";
//import { FormGroup, FormControl } from "@angular/forms"; // importing the form control class
import { Animal } from "../Animal";
import { FormBuilder } from "@angular/forms";
//import { FormArray } from "@angular/forms";

@Component({
  selector: "app-animal-class-component",
  templateUrl: "./animal-class-component.component.html",
  styleUrls: ["./animal-class-component.component.css"]
})
export class AnimalClassComponentComponent implements OnInit {
  animalForm = this.fb.group({
    Name: ["Rex"],
    Sex: ["Male"],
    Color: ["Black"],
    Age: [5]
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  assignValues(): void {
    this.animalForm = this.fb.group({
      Name: ["Moca"],
      Sex: ["Female"],
      Color: ["Brown"],
      Age: [3]
    });
  }

  newAnimal() {
    this.animalForm = this.fb.group({
      Name: [""],
      Sex: [""],
      Color: [""],
      Age: []
    });
  }
}
