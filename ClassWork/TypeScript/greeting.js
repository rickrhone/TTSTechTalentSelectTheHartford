function sayHello(person) {
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
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.Name = name;
        this.Age = age;
    }
    Employee.prototype.details = function () {
        return this.Name + " is " + this.Age + " years old.";
    };
    return Employee;
}());
