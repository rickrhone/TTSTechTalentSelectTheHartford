import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HW7Service2Service {
  Age: number = 33;
  NickName: string = "Ric";

  constructor() {}

  getPersonInfo() {
    return this.NickName + " is " + this.Age;
  }
}
