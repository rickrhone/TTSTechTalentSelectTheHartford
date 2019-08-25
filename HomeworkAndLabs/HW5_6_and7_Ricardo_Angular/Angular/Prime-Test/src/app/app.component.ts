import { Component } from "@angular/core";
import { MenuItem } from "../app/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Prime-Test";
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: "Stats", icon: "fa fa-fw fa-bar-chart" },
      { label: "Calendar", icon: "fa fa-fw fa-calendar" },
      { label: "Documentation", icon: "fa fa-fw fa-book" },
      { label: "Support", icon: "fa fa-fw fa-support" },
      { label: "Social", icon: "fa fa-fw fa-twitter" }
    ];
  }
}
