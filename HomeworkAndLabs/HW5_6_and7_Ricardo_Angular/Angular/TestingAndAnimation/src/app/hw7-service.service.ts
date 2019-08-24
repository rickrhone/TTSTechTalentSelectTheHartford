import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HW7ServiceService {
  FirstName: string = "Ricardo";
  LastName: string = "Rhone";

  constructor() {}

  // Task 3 -  write a test for some functionality that doesn't yet exist in the service. It could be something like get person's full name.
  // Obviously since the function doesn't exist yet the test will not even compile, let alone pass. Now code just enough functionality in the service to make the test pass.
  getFullName() {
    return this.FirstName + " " + this.LastName;
  }
}
