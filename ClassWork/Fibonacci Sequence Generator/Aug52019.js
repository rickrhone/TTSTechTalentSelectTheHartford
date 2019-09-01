//Fibonocci Sequence Generator 

var F0 = 0;
var F1 = 1;

//How many F numbers is required
var Fnums = prompt('How many numbers do you want in your Fibonocci Array? ');

// F2 & Above 
var Fibonocci = [F0, F1];
for (var i = 2; i < Fnums; i++) {
    Fibonocci[i] = Fibonocci[i - 1] + Fibonocci[i - 2];
}
var fibToString = Fibonocci.toString();
console.log(Fibonocci);




//What is the nth number in the Fibonocci Sequence 
var nthNumber = prompt('Which position in the Fibonocci sequence would you like to know the value of? ');

// log the message
var nthNumberMessage = "The value of the " + nthNumber + " position in the Fiboncci sequence is " + Fibonocci[nthNumber - 1];
console.log(nthNumberMessage);