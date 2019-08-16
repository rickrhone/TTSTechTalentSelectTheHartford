// Ricardo HW6_Angular Services LAB and Homwork

// Services and DI Section

// Task 1 - Create a simple Person class in the src/app folder.
export class Person {
  // Declaration of Properties
  FirstName: string;
  LastName: string;
  Age: number;

  // Constructor
  constructor(firstName: string, lastName: string, age: number) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Age = age;
  }

  // Task 1 -  Create a basic method to return the person such as getPerson().
  // Methods
  getPerson(): string {
    return (
      this.FirstName + " " + this.LastName + " is " + this.Age + " years old."
    );
  }
}
