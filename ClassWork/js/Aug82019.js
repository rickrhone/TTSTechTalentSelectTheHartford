// Ricardo R. Aug 8, 2019 InClass Labs

// ****************************** LAB 1 - Debug the Following Code **********************************************
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

// ****************************** LAB 2 - Selecting Nodes **********************************************

// 1. Get the header element
let headerElement = document.getElementsByTagName('header');
console.log("The number of header elements in this document is: " + headerElement.length); // logs 1 because there is only 1 header in the html document

// 2. Get all the section elements
let sectionElements = document.getElementsByTagName('section');
console.log("The number of sections elements in this document is: " + sectionElements.length); // logs 3 because there are 3 section elements in the html document

// 3. Get the section element with class="current"
let sectionCurrent = document.getElementsByClassName('current');
console.log("The number of sections elements in this document whith class name current is: " + sectionCurrent.length); // logs 1 because there is only 1 section elements in the html document with a class name of current

// 4. Get the section that comes after the current section
let currentSection = document.querySelector('section.current'); //selects the section with class name current
let nextSection = currentSection.nextElementSibling; // moves to the next section after the section with class name current
console.log("The section after the current section is:");
console.log(nextSection); // returns section 3 as it is the section after the section with class name current

// 5. Get the h2 node from the section before the 'current' section
let currentSection2 = document.querySelector('section.current'); //selects the section with class name current
let previousSection = currentSection2.previousElementSibling; // moves to the previous section before the section with class name current
let h2Node = previousSection.querySelector('h2'); // selectes the h2 section
console.log(h2Node); // logs the h2 section 

// 6. Get the div that contains the section that has a h2 with a class of 'highlight'
let highlightClass = document.querySelector('section h2.highlight'); // selects the section with the highlight class
var parentDiv = highlightClass.parentElement.parentElement; // returns the parent of the section containing the class highlight whic is the div
console.log(parentDiv); // logs the div containing the section with the h2 tag with class highlight

// 7. Get all the sections that contain a H2 (using a single statement);
console.log(document.querySelectorAll('section > h2'));