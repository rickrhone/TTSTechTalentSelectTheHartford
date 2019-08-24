import { Component } from "@angular/core";

// In the new component import the animation functions you will need (trigger, state, style, animate, transition).
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],

  // Add the animations property in the @Component declaration, create an animation to transition
  // between to diﬀerent states on a small area of the screen, such as a small div. Control the state via a simple button.
  animations: [
    trigger("brightDim", [
      state(
        "bright",
        style({
          height: "150px",
          opacity: 1,
          backgroundColor: "yellow"
        })
      ),
      state(
        "dim",
        style({
          height: "100px",
          opacity: 0.4,
          backgroundColor: "gray"
        })
      ),
      state(
        "ultrabright",
        style({
          height: "150px",
          opacity: 1,
          backgroundColor: "red"
        })
      ),
      state(
        "darkmode",
        style({
          height: "100px",
          opacity: 1,
          backgroundColor: "black",
          color: "white"
        })
      ),
      state(
        "default",
        style({
          height: "50px",
          opacity: 1,
          backgroundColor: "white"
        })
      ),
      transition("default -> dim", [animate("0.5s")]),
      transition("default -> dark", [animate("0.5s")]),
      transition("default -> bright", [animate("0.5s")]),
      transition("default -> ultrabright", [animate("0.5s")]),
      transition("bright -> dim", [animate("0.5s")]),
      transition("bright -> ultrabright", [animate("0.5s")]),
      transition("bright -> darkmode", [animate("0.5s")]),
      transition("dim -> bright", [animate("0.5s")]),
      transition("dim -> darkmode", [animate("0.5s")]),
      transition("dim -> ultrabright", [animate("0.5s")]),
      transition("ultrabright -> darkmode", [animate("0.5s")]),
      transition("ultrabright -> dim", [animate("0.5s")]),
      transition("ultrabright -> bright", [animate("0.5s")]),
      transition("darkmode -> ultrabright", [animate("0.5s")]),
      transition("darkmode -> dim", [animate("0.5s")]),
      transition("darkmode -> bright", [animate("0.5s")])
    ])
  ]
})
export class AppComponent {
  title = "TestingAndAnimationHW7";
  isBright = true;
  toggle() {
    this.isBright = !this.isBright;
  }
  // Add logic to create more states via an enum - at least 3.
  // Change the logic to switch states; create separate buttons for each state such that clicking the button will set the state property.

  mode: string = "default";

  changeMode(num: number) {
    enum modes {
      dim = 1,
      darkmode = 2,
      bright = 3,
      ultrabright = 4
    }

    if (num) {
      this.mode = modes[num];
    } else {
      this.mode = "default";
    }
  }
}
