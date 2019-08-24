import { Injectable } from "@angular/core";
import { Person } from "./Person";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})

/* In the Service class, reference the Person class from above. Create a variable of type Person. In the
constructor for the service give it some default values. */
export class PersonService {
  person1: Person;
  person2: Person;
  person3: Person; // to be used with Observables
  constructor() {
    this.person1 = new Person("Gordon", "Lyft", 26);
    this.person2 = new Person("Lillian", "Armstrong", 35);
    this.person3 = new Person("John", "Malcolm", 56);
  }

  getPerson1(): Person {
    return this.person1;
  }
  getPerson2(): Person {
    return this.person2;
  }

  //Change the service call to return an Obervable rather than a Person object
  getPerson3(): Observable<Person> {
    let x = of(this.person3);
    // this.delay(4000).then(any => (this.person3.FirstName = "Brian")); //also works
    this.delay(4000).then(any => {
      return (this.person3.FirstName = "Brian");
    });
    return x;
  }

  //To really see the process of Observables without a long web delay, create this function inside the service class:
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms));
  }
}
