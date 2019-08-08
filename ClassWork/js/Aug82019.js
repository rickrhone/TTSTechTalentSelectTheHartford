// Ricardo R. Aug 8, 2019 InClass Labs

// ****************************** LAB 1 - Debug the Following COde **********************************************
var littleOne = [];
var howTheyMarch = ["one by one", "two by two", "three by three", "four by four", "five by five", "six by six", "seven by seven", "eight by eight", "nine by nine", "ten by ten"];

function theAntsGoMarching() {
    for (var i = 0; i < howTheyMarch.length; i++) {
        // howManyByHowMany; // 1. function not invoked/called correctly missing the parenthesis () 
        howManyByHowMany(i); // Corrected
        console.log(littleOne[i]); // 2. will result in index out of bounds as this array is empty at this point
        console.log("And they all go marching down to the ground to get out of the rain, BOOM! BOOM! BOOM!\n\n");
    }
}
// theAntsGoMarching(); //needs to be moved to below the addition of items to the littleOne Array 

littleOne[0] = "The little one stops to suck her thumb";
littleOne[1] = "The little one stops to tie his shoe";
littleOne[2] = "The little one stops to climb a tree";
littleOne[3] = "The little one stops to shut the door";
littleOne[4] = "The little one stops to take a dive";
littleOne[5] = "The little one stops to pick up sticks";
littleOne[6] = "The little one stops to pray to heaven";
littleOne[7] = "The little one stops to roll a skate";
littleOne[8] = "The little one stops to check the time";
littleOne[9] = "The little one stops to shut The End";

theAntsGoMarching(); // Corrects issue 2 above

function howManyByHowMany(number) { // 3. number is an unused paramater
    // var numbers = howTheyMarch; // 4. missing the index position to access elements of the array 
    var numbers = howTheyMarch[number]; // corrects issue 4
    var hurrah = " hurrah, hurrah \n";
    var march = "The ants go marching " + numbers;
    // debugger // 5. not required
    console.log(march + hurrah + march + hurrah + march);
}