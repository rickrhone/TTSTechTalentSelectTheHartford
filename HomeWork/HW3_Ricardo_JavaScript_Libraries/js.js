// Ricardo Rhone TTS Homework 3 - Aug 14, 2019 

/* ***************************** Lodash Section ****************************** */
console.log("\n*************** LODASH SECTION ***************");
// Values used for testing 
var arr = [1, 4, 5, 12, 55, 24, 69, 13, 5, 8, 12];
var theObj = {
    "id": 1,
    "name": "Tom Henry",
    "state": "KS"
};
var arrObj = [{
        "id": 1,
        "name": "Tom Henry",
        "state": "TX"
    },
    {
        "id": 2,
        "name": "Sally Newman",
        "state": "FL"
    },
    {
        "id": 3,
        "name": "Ryan Busch",
        "state": "CO"
    },
    {
        "id": 4,
        "name": "Brenda Miller",
        "state": "KS"
    },
    {
        "id": 5,
        "name": "Ed Cage",
        "state": "NC"
    },
    {
        "id": 6,
        "name": "Will Turner",
        "state": "KS"
    },
    {
        "id": 7,
        "name": "Dawn Williams",
        "state": "NC"
    },
    {
        "id": 8,
        "name": "Sean Cunningham",
        "state": "NC"
    },
    {
        "id": 9,
        "name": "Ted Hardy",
        "state": "TX"
    },
    {
        "id": 10,
        "name": "Bruce Matthis",
        "state": "FL"
    },
    {
        "id": 11,
        "name": "Billy Smith",
        "state": "FL"
    },
    {
        "id": 12,
        "name": "Clara Jarvis",
        "state": "TX"
    },
    {
        "id": 13,
        "name": "Cindy Fisher",
        "state": "CO"
    },
    {
        "id": 14,
        "name": "Gino Donovan",
        "state": "CO"
    },
    {
        "id": 15,
        "name": "Nancy Curtis",
        "state": "NC"
    }

];

/********* Exercise 1 - break the array up into smaller arrays ********/
$(document).ready(function () {
    chunkTest();
});

function chunkTest() {
    console.log("\nExercise 1 - Chunk test");
    //Creates an array of elements split into groups the length of size. 
    //If array can't be split evenly, the final chunk will be the remaining elements.
    var newArr = _.chunk(arr, 3);
    console.log(newArr); //3 Arrays of size 3 and the 4th Array of size 2
    console.log("\nExercise 2 - printing the individual elements of the chunked arrays");
    _.forEach(newArr, function (value) { //console logs all 4 Arrays 
        console.log(value);

        /********* Exercise 2 - add the code to view the individual entries of the newly formed arrays. ********/
        _.forEach(value, function (item) { //logs each of items in the 4 Arrays
            console.log(item);
        })
    });
}

/********* Exercise 3 - Using the _.range() method, create several new arrays and print out their individual elements.
 * Then break them up with the _.chunk() function to create new arrays. ********/

// New Array 1
console.log("\nExercise 3 - Array1 created with _.range() method");
var newArray1 = _.range(5, 11, 1); //Array of size 6 containing 5 to 10
console.log(newArray1);
// Printing out the Individual Elements 
console.log("printing the individual elements of Array1");
var itemNum = 0;
_.forEach(newArray1, function (item) {
    ++itemNum
    console.log("item " + itemNum + ": " + item);
})
// Breaking up the array with the _.chunk() function to create new arrays.
var newArr1 = _.chunk(newArray1, 3);
console.log("_.chunk() applied to Array1");
console.log(newArr1);


// New Array 2
console.log("\nExercise 3 - Array2 created with _.range() method");
var newArray2 = _.range(10, 101, 10); //Array of size 10 containing 10 to 100 in increments of 10
console.log(newArray2);
// Printing out the Individual Elements 
console.log("printing the individual elements of Array2");
var itemNum = 0;
_.forEach(newArray2, function (item) {
    ++itemNum
    console.log("item " + itemNum + ": " + item);
})
// Breaking up the array with the _.chunk() function to create new arrays.
var newArr2 = _.chunk(newArray2, 5);
console.log("_.chunk() applied to Array2");
console.log(newArr2);


// New Array 3
console.log("\nExercise 3 - Array3 created with _.range() method");
var newArray3 = _.range(-2, -11, -2); //Array of size 5 containing -2 to -2 in increments of -2
console.log(newArray3);
// Printing out the Individual Elements 
console.log("printing the individual elements of Array3");
var itemNum = 0;
_.forEach(newArray3, function (item) {
    ++itemNum
    console.log("item " + itemNum + ": " + item);
})
// Breaking up the array with the _.chunk() function to create new arrays.
var newArr3 = _.chunk(newArray3, 2);
console.log("_.chunk() applied to Array3");
console.log(newArr3);

/********* Exercise 4 - Create arrays with the specified elements using a single statement ********/
console.log("\nExercise 4 - Create arrays with the specified elements using a single statement");
// 1 - 20
console.log("Array_1to20: " + _.range(1, 21, 1));

// 50 - 100
console.log("Array_50to100: " + _.range(50, 101, 1));

// 1 - 100, only even
console.log("Array_1to100_onlyEven: " + _.range(2, 101, 2));

// 1 - 100, only odd
console.log("Array_1to100_onlyOdd: " + _.range(1, 101, 2));

// 1-500, only multiples of 20
console.log("Array_1to500_onlyMultiplesOf_20: " + _.range(20, 501, 20));

/********* Exercise 5 - Using the documentation for the _.filter() function, create a statement that prints the number of
residents in Colorado. ********/
console.log("\nExercise 5 - use the _.filter() function to print the number of residents in Colorado ");
console.log("The number of residents in Colorado is: " + _.filter(arrObj, {
    "state": "CO"
}).length);

/********* Exercise 6 - Using the documentation for the _.countBy() function create statements that print out the number
of residents in each state. ********/
console.log("\nExercise 6 - use the _.countBy() function to print the number of residents in each state ");
var numOfResidentInEachState = _.countBy(arrObj, "state")
_.forEach(numOfResidentInEachState, function (value, key) {
    console.log(key, value);
})

/********* Exercise 7 - Using the _.filter() function and any necessary string methods, ﬁnd and display all the people 
 who have a last name of 7 or more letters. ********/
console.log("\nExercise 7 - use the _.filter() function and string methods to find and display all the people who have a last name of 7 or more letters");
console.log(_.filter(arrObj, function (obj) {
    return obj.name.split(" ")[1].length >= 7
}));


/********* Exercise 8 - Use the foreach loop and appropriate string function to print the state in all lower case. 
Then alter the function to print it capitalized.  ********/
console.log("\nExercise 8 - use the _.forEach() loop and string methods to print the state in all lower case. Then alter the function to print it capitalized.");
console.log("Lower Case States: ")
_.forEach(arrObj, function (obj) {
    var ArrayOfState = obj.state; //pulls all the states out of the object
    var ArrayofSatestoLower = []; // to store the lowerCase state value
    for (var i = 0, y = 1; y < ArrayOfState.length; i++, y++) {
        //combines both letters of the state, converts them to lowerCase and stores them in the Array
        ArrayofSatestoLower.push((ArrayOfState[i] + ArrayOfState[y]).toLowerCase());
    }
    console.log(ArrayofSatestoLower); //prints the lowerCase state
});

console.log("Upper Case States: ")
_.forEach(arrObj, function (obj) {
    var ArrayOfState = obj.state; //pulls all the states out of the object
    var ArrayofSatestoUpper = []; // to store the upperCase state value
    for (var i = 0, y = 1; y < ArrayOfState.length; i++, y++) {
        //combines both letters of the state, converts them to upperCase and stores them in the Array
        ArrayofSatestoUpper.push((ArrayOfState[i] + ArrayOfState[y]).toUpperCase());
    }
    console.log(ArrayofSatestoUpper); //prints the upperCase state
});

/* ***************************** Moment Section ****************************** */

/* Download the the moment.js file or reference it in your chosen fashion. Use the moment() method
to create a new date; also create several other dates by parsing vaious strings as shown in the code
below. */

console.log("\n*************** MOMENT SECTION ***************");
var mom = moment();
var bad = moment("no date"); //throws the expected warning - Deprecation warining. returns NaN because the format is not recognized
var momISO = moment("2019-02-08 09:30");
var rfc = moment("22 Mar 2017 21:22:23 GMT");

// Add additonal statement to print the values of the dates:
console.log(mom.format('YYYY MM DD'));
console.log("Bad Date: " + bad);
console.log(momISO.format());
console.log(rfc.format());

// Using the values in the chart, print each of the above dates in the following formats:

// Long day, short month, day number, year and time
console.log("\nEach date in long day, short month, day number, year and time format:");
console.log(mom.format("dddd MMM D, YYYY h:mmA"));
console.log(momISO.format("dddd MMM D, YYYY h:mmA"));
console.log(rfc.format("dddd MMM D, YYYY h:mmA"));

// Short month, day, year, and time
console.log("\nEach date in short month, day, year, and time format:");
console.log(mom.format("MMM D, YYYY h:mmA"));
console.log(momISO.format("MMM D, YYYY h:mmA"));
console.log(rfc.format("MMM D, YYYY h:mmA"));

// Week of year, short year
console.log("\nEach date in week of year, short year format:");
console.log(mom.format("wo YY"));
console.log(momISO.format("wo YY"));
console.log(rfc.format("wo YY"));

// Quarter of year, long year
console.log("\nEach date in quarter of year, long year format:");
console.log(mom.format("Qo YYYY"));
console.log(momISO.format("Qo YYYY"));
console.log(rfc.format("Qo YYYY"));

// Using the difference function, find the difference between the ISO and rfc dates in days, weeks, and
// months. Find the difference between the current date and the rfc in weeks, months, and years.

// Find the difference between the ISO and rfc dates in days, weeks, and months.
console.log("\nThe difference between the ISO and rfc dates in days: " + momISO.diff(rfc, "days"));
console.log("The difference between the ISO and rfc dates in weeks: " + momISO.diff(rfc, "weeks"));
console.log("The difference between the ISO and rfc dates in months: " + momISO.diff(rfc, "months"));

// Find the difference between the current date and the rfc in weeks, months, and years.
console.log("\nThe difference between the current and rfc dates in weeks: " + mom.diff(rfc, "weeks"));
console.log("The difference between the current and rfc dates in months: " + momISO.diff(rfc, "months"));
console.log("The difference between the current and rfc dates in years: " + momISO.diff(rfc, "years"));

/* ***************************** Math Section ****************************** */

console.log("\n*************** MATH SECTION ***************");
// Using the correct math methods, calculate and display the following:
console.log("Base 10 log of 1,000,000 = " + math.log10(1000000));
console.log("Base 2 log of 64 = " + math.log2(64));
console.log("Base 4 log of 16,384 = " + math.log(16384, 4));
console.log("Square root of 96 = " + math.sqrt(96));
console.log("Square root of -64 = " + math.sqrt(-64));
console.log("Simplify the expression '3x + 4y + 9x + 2y + 8' = " + math.simplify("3x + 4y + 9x + 2y + 8"));
console.log("The cosine of 45 degrees = " + math.cos(math.unit(45, "deg")));