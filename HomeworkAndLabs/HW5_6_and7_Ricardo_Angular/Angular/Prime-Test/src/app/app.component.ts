import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../app/api";
import { Car } from "./Car";
import { CarService } from "./carservice";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Prime-Test";
  items: MenuItem[];
  cars: Car[];
  cols: any[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.items = [
      { label: "Stats", icon: "fa fa-fw fa-bar-chart" },
      { label: "Calendar", icon: "fa fa-fw fa-calendar" },
      { label: "Documentation", icon: "fa fa-fw fa-book" },
      { label: "Support", icon: "fa fa-fw fa-support" },
      { label: "Social", icon: "fa fa-fw fa-twitter" }
    ];
    this.carService.getCarsSmall().then(cars => (this.cars = cars));

    this.cols = [
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" }
    ];
  }
}
