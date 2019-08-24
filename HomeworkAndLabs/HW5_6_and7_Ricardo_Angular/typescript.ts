/****** 1. Recreate the TypeScript function from the slide deck and perform the same document updates *****/

function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);

/****** 2. create a class called Person in the file below the getElementById() method . Give it the
properties of first name, last name, age, phone number, state, zip code, and occupation. Create a
constructor to initialize these properties. Also create several method to return combinations of
interest, such as Full name, Name and Phone Number, Location, etc. *****/

class Employee {
  // Declaration of Properties
  FirstName: string;
  LastName: string;
  Age: number;
  PhoneNumber: string;
  State: string;
  Zipcode: string;
  Occupation: string;
  HourlyWage: number;
  NumberOfHours: number;
  CertsAndDegress: string[];

  // Constructor
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    phoneNumber: string,
    state: string,
    zipCode: string,
    occupation: string,
    hourlyWage: number,
    certsAndDegrees: string[],
    numberOfHours?: number
  ) {
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Age = age;
    this.PhoneNumber = phoneNumber;
    this.State = state;
    this.Zipcode = zipCode;
    this.Occupation = occupation;
    this.HourlyWage = hourlyWage;
    if (numberOfHours) {
      this.NumberOfHours = numberOfHours;
    } else {
      this.NumberOfHours = 40;
    }
    this.CertsAndDegress = certsAndDegrees;
  }

  // Methods
  getFullName(): string {
    return this.FirstName + " " + this.LastName;
  }

  getAge(): number {
    return this.Age;
  }

  getNameAndPhoneNumber(): string {
    return this.FirstName + " Phone Number is: " + this.PhoneNumber;
  }

  getLocation(): string {
    return this.State + " " + this.Zipcode;
  }

  getOccupation(): string {
    return this.Occupation;
  }

  /* *** Add a hourlyWage property to the person (and if you want, rename the class to Employee ). Add a
   * function that calculates a weekly wage and takes the number of hours as an optional parameter. If it
   * is not presented, use a typical 40 hours to calculate the wage. Display this in a area that states the
   * name of the person and their weekly wage. ***/

  WeeklyWage(): string {
    return (this.HourlyWage * this.NumberOfHours).toString();
  }

  /* Create a property for a person's certifications/degrees that is an array. These could be things such as
   * MBA, CSM, MCSD, etc. Next create a function called addCerts() that takes an unknown number of
   * arguments and adds them to the array. */
  addCerts(arg: string[]): string {
    for (let i = 0; i < arg.length; i++) {
      this.CertsAndDegress.push(arg[i]);
    }
    return this.CertsAndDegress.toString();
  }

  /* Create a method in the class that takes an option parameter and returns an Employee (Person) based on
   * the options given. */
  interfaceMethod(employeeOption: EmployeeOptions): Employee {
    return new Employee(
      employeeOption.firstName,
      employeeOption.lastName,
      employeeOption.age,
      employeeOption.phoneNumber,
      employeeOption.state,
      employeeOption.zipCode,
      employeeOption.occupation,
      employeeOption.hourlyWage,
      employeeOption.certsAndDegrees,
      employeeOption.numberOfHours
    );
  }
}

// Creating Employees

// Employee 1
var Employee1 = new Employee(
  "James",
  "Jones",
  25,
  "203-599-5555",
  "CT",
  "06117",
  "Software Developer",
  20,
  ["Java OCA", "B.S. Computer Science"]
);

// display employee1 name and phone number in Div 2 of the HTML page
document.getElementById("div2").innerHTML = Employee1.getNameAndPhoneNumber();

// Employee 2
var Employee2 = new Employee(
  "Jennifer",
  "Long",
  36,
  "860-222-5555",
  "NY",
  "61189",
  "Painter",
  30,
  ["B.S. in Art"]
);

// display employee2 location in Div 3 of the HTML page
document.getElementById("div3").innerHTML = Employee2.getLocation();

// Employee 3
var Employee3 = new Employee(
  "Tim",
  "Jeffries",
  55,
  "970-244-5055",
  "NH",
  "81990",
  "Zoo Keeper",
  40,
  ["M.S. in Zoology"]
);

// display employee2 occupation in Div 4 of the HTML page
document.getElementById("div4").innerHTML = Employee3.getOccupation();

// Employee 4
var Employee4 = new Employee(
  "Jane",
  "Carter",
  34,
  "999-255-5035",
  "NJ",
  "61799",
  "Accountant",
  30,
  ["B.S. in Accounting", "CPA"]
);

// display employee4 full name in Div 5 of the HTML page and Weekly wage in Div 6
document.getElementById("div5").innerHTML = Employee4.getFullName();
document.getElementById("div6").innerHTML = Employee4.WeeklyWage();

// Employee 5
var Employee5 = new Employee(
  "Justice",
  "Malone",
  44,
  "911-333-5033",
  "NH",
  "70700",
  "Engineer",
  45,
  [],
  50
);

// display employee5 certs and degrees in Div 7 of the HTML page
document.getElementById("div7").innerHTML = Employee5.addCerts([
  "B.S. in Electrical Engineering",
  " PMP Cert",
  " M.S. Engineering Science"
]);

/* Create an interface called EmployeeOptions (PersonOptions if you didn't rename to Employee)
 * where the name values are required but the other parameters are optional. Create a method in
 * the class that takes an option parameter and returns an Employee (Person) based on the options given.
 * Implement this with a few diﬀerent options to observe how it works. */

interface EmployeeOptions {
  // Declaration of Properties
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: string;
  state?: string;
  zipCode?: string;
  occupation?: string;
  hourlyWage?: number;
  certsAndDegrees?: string[];
  numberOfHours?: number;
}

// Employee 6
var employee6Interface = { firstName: "Carl", lastName: "Maguire" };
var Employee6 = Employee5.interfaceMethod(employee6Interface);

// display employee6 first and last name in div 8 of the HTML page
document.getElementById("div8").innerHTML = Employee6.getFullName();

// Employee 7
var employee7Interface = {
  firstName: "Amy",
  lastName: "Jenkins",
  state: "MA",
  zipCode: "67473"
};
var Employee7 = Employee5.interfaceMethod(employee7Interface);

// display employee7 location in div 9 of the HTML page
document.getElementById("div9").innerHTML = Employee7.getLocation();
