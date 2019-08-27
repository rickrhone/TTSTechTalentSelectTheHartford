/****** 1. Recreate the TypeScript function from the slide deck and perform the same document updates *****/
function sayHello(person) {
    return "Hello, " + person + " - lets create some employees";
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
/****** 2. create a class called Person in the file below the getElementById() method . Give it the
properties of first name, last name, age, phone number, state, zip code, and occupation. Create a
constructor to initialize these properties. Also create several method to return combinations of
interest, such as Full name, Name and Phone Number, Location, etc. *****/
var Employee = /** @class */ (function () {
    // Constructor
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, certsAndDegrees, numberOfHours) {
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
        }
        else {
            this.NumberOfHours = 40;
        }
        this.CertsAndDegress = certsAndDegrees;
    }
    // Methods
    Employee.prototype.getFullName = function () {
        return "Name: " + this.FirstName + " " + this.LastName;
    };
    Employee.prototype.getFirstName = function () {
        return "First Name: " + this.FirstName;
    };
    Employee.prototype.getLastName = function () {
        return "Last Name: " + this.LastName;
    };
    Employee.prototype.getAge = function () {
        return "Age: " + this.Age.toString();
    };
    Employee.prototype.getPhoneNumber = function () {
        return "Phone Number: " + this.PhoneNumber;
    };
    Employee.prototype.getNameAndPhoneNumber = function () {
        return this.FirstName + " Phone Number is: " + this.PhoneNumber;
    };
    Employee.prototype.getLocation = function () {
        return "Location: " + this.State + " " + this.Zipcode;
    };
    Employee.prototype.getOccupation = function () {
        return "Occupation: " + this.Occupation;
    };
    Employee.prototype.getHourlyWage = function () {
        return "Hourly Wage: $" + this.HourlyWage.toString();
    };
    Employee.prototype.getCertsAndDeg = function () {
        return "Certifications/Degrees: " + this.CertsAndDegress.toString();
    };
    /* *** Add a hourlyWage property to the person (and if you want, rename the class to Employee ). Add a
     * function that calculates a weekly wage and takes the number of hours as an optional parameter. If it
     * is not presented, use a typical 40 hours to calculate the wage. Display this in a area that states the
     * name of the person and their weekly wage. ***/
    Employee.prototype.getWeeklyWage = function () {
        return "Weekly Wage: $" + (this.HourlyWage * this.NumberOfHours).toString();
    };
    /* Create a property for a person's certifications/degrees that is an array. These could be things such as
     * MBA, CSM, MCSD, etc. Next create a function called addCerts() that takes an unknown number of
     * arguments and adds them to the array. */
    Employee.prototype.addCerts = function (arg) {
        for (var i = 0; i < arg.length; i++) {
            this.CertsAndDegress.push(arg[i]);
        }
        return "Certifications/Degrees: " + this.CertsAndDegress.toString();
    };
    /* Create a method in the class that takes an option parameter and returns an Employee (Person) based on
     * the options given. */
    Employee.prototype.interfaceMethod = function (employeeOption) {
        return new Employee(employeeOption.firstName, employeeOption.lastName, employeeOption.age, employeeOption.phoneNumber, employeeOption.state, employeeOption.zipCode, employeeOption.occupation, employeeOption.hourlyWage, employeeOption.certsAndDegrees, employeeOption.numberOfHours);
    };
    return Employee;
}());
// Creating Employees
// Employee 1
var Employee1 = new Employee("James", "Jones", 25, "203-599-5555", "CT", "06117", "Software Developer", 20, ["Java OCA", "B.S. Computer Science"]);
// display employee1 Div 2 of the HTML page
document.getElementById("div2").innerHTML = Employee1.getFullName();
document.getElementById("div2A").innerHTML = Employee1.getAge();
document.getElementById("div2B").innerHTML = Employee1.getPhoneNumber();
document.getElementById("div2C").innerHTML = Employee1.getLocation();
document.getElementById("div2D").innerHTML = Employee1.getOccupation();
// Employee 2
var Employee2 = new Employee("Jennifer", "Long", 36, "860-222-5555", "NY", "61189", "Painter", 30, ["B.S. in Art"]);
// display employee2 Div 3 of the HTML page
document.getElementById("div3").innerHTML = Employee2.getFullName();
document.getElementById("div3A").innerHTML = Employee2.getAge();
document.getElementById("div3B").innerHTML = Employee2.getPhoneNumber();
document.getElementById("div3C").innerHTML = Employee2.getLocation();
document.getElementById("div3D").innerHTML = Employee2.getOccupation();
// Employee 3
var Employee3 = new Employee("Tim", "Jeffries", 55, "970-244-5055", "NH", "81990", "Zoo Keeper", 40, ["M.S. in Zoology"]);
// display employee3 Div 4 of the HTML page
document.getElementById("div4").innerHTML = Employee3.getFullName();
document.getElementById("div4A").innerHTML = Employee3.getAge();
document.getElementById("div4B").innerHTML = Employee3.getPhoneNumber();
document.getElementById("div4C").innerHTML = Employee3.getLocation();
document.getElementById("div4D").innerHTML = Employee3.getOccupation();
document.getElementById("div4E").innerHTML = Employee3.getCertsAndDeg();
// Employee 4
var Employee4 = new Employee("Janice", "Carter", 34, "999-255-5035", "NJ", "61799", "Accountant", 30, ["B.S. in Accounting", "CPA"]);
// display employee4 Div 5 of the HTML page
document.getElementById("div5").innerHTML = Employee4.getFullName();
document.getElementById("div5A").innerHTML = Employee4.getAge();
document.getElementById("div5B").innerHTML = Employee4.getPhoneNumber();
document.getElementById("div5C").innerHTML = Employee4.getLocation();
document.getElementById("div5D").innerHTML = Employee4.getOccupation();
document.getElementById("div5E").innerHTML = Employee4.getHourlyWage();
document.getElementById("div5F").innerHTML = Employee4.getCertsAndDeg();
// Employee 5
var Employee5 = new Employee("Justice", "Malone", 44, "911-333-5033", "NH", "70700", "Engineer", 45, [], 50);
// display employee5 Div 6 of the HTML page
document.getElementById("div6").innerHTML = Employee5.getFullName();
document.getElementById("div6A").innerHTML = Employee5.getAge();
document.getElementById("div6B").innerHTML = Employee5.getPhoneNumber();
document.getElementById("div6C").innerHTML = Employee5.getLocation();
document.getElementById("div6D").innerHTML = Employee5.getOccupation();
document.getElementById("div6E").innerHTML = Employee5.getHourlyWage();
document.getElementById("div6F").innerHTML = Employee5.getWeeklyWage();
document.getElementById("div6G").innerHTML = Employee5.addCerts([
    "B.S. in Electrical Engineering",
    " PMP Cert",
    " M.S. Engineering Science"
]);
// display employee6 Div 7 of the HTML page
var employee6Interface = {
    firstName: "Megan",
    lastName: "Maguire",
    age: 44,
    phoneNumber: "860-555-5555",
    state: "WA",
    zipCode: "67199",
    hourlyWage: 30,
    occupation: "Underwriter",
    certsAndDegrees: ["CRU", " M.B.A"]
};
var Employee6 = Employee5.interfaceMethod(employee6Interface);
document.getElementById("div7").innerHTML = Employee6.getFullName();
document.getElementById("div7A").innerHTML = Employee6.getAge();
document.getElementById("div7B").innerHTML = Employee6.getPhoneNumber();
document.getElementById("div7C").innerHTML = Employee6.getLocation();
document.getElementById("div7D").innerHTML = Employee6.getOccupation();
document.getElementById("div7E").innerHTML = Employee6.getHourlyWage();
document.getElementById("div7F").innerHTML = Employee6.getCertsAndDeg();
// display employee7 Div 8 of the HTML page
var employee7Interface = {
    firstName: "Amy",
    lastName: "Jenkins",
    age: 35,
    state: "MA",
    zipCode: "67473",
    occupation: "Fire Fighter",
    hourlyWage: 40
};
var Employee7 = Employee5.interfaceMethod(employee7Interface);
document.getElementById("div8").innerHTML = Employee7.getFullName();
document.getElementById("div8A").innerHTML = Employee7.getAge();
document.getElementById("div8B").innerHTML = Employee7.getPhoneNumber();
document.getElementById("div8C").innerHTML = Employee7.getLocation();
document.getElementById("div8D").innerHTML = Employee7.getOccupation();
document.getElementById("div8E").innerHTML = Employee7.getHourlyWage();
