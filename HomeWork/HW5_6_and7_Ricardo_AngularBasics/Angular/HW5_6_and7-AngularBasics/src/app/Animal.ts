export class Animal {
  // Declaration of Properties
  Name: string;
  Sex: string;
  Color: string;
  Age: number;

  // Constructor
  constructor(name: string, sex: string, color: string, age: number) {
    this.Name = name;
    this.Sex = sex;
    this.Color = color;
    this.Age = age;
  }

  // Task 1 -  Create a basic method to return the person such as getPerson().
  // Methods
  getAnimal(): string {
    return (
      this.Name +
      " is a " +
      this.Color +
      " " +
      this.Sex +
      " animal that is " +
      this.Age +
      " years old."
    );
  }
}
