import { Component, OnInit } from "@angular/core";
import { CarServiceService } from "./car-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Prime-Test";
  rangeValues: number[] = [20, 80];
  cities1: string[] = ["New York", "Rome"];
  selectedCity1: string[] = ["New York", "Rome"];

  constructor(private carService: CarServiceService) {}

  ngOnInit() {
    this.carService.getCarsSmall();
    //.then(cars => this.cars = cars);
  }
}
