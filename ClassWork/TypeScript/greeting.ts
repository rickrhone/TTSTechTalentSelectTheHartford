function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Teacher McGee";
document.getElementById("para").innerHTML = sayHello(user);

//Interfaces
// interface PersonData {
//   title: string;
//   name: string;
//   salary?: number;
//   readonly SSN: number;
// }

class Employee {
  Name: string;
  Age: number;

  constructor(name: string, age: number) {
    this.Name = name;
    this.Age = age;
  }

  details(): string {
    return this.Name + " is " + this.Age + " years old.";
  }
}
