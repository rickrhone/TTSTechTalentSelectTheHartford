// Ricardo Rhone TTS Homework 3 - Aug 14, 2019 

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
    }
];

/********* Excercise 1 - break the array up into smaller arrays ********/
$(document).ready(function () {
    chunkTest();
});

function chunkTest() {
    console.log("Chunk test");
    //Creates an array of elements split into groups the length of size. 
    //If array can't be split evenly, the final chunk will be the remaining elements.
    var newArr = _.chunk(arr, 3);
    console.log(newArr); //3 Arrays of size 3 and the 4th Array of size 2

    _.forEach(newArr, function (value) { //console logs all 4 Arrays 
        console.log(value);

        /********* Excercise 2 - add the code to view the individual entries of the newly formed arrays. ********/
        _.forEach(value, function (item) { //logs each of items in the 4 Arrays
            console.log(item);
        })
    });
}

/********* Excercise 3 - Using the _.range() method, create several new arrays and print out their individual elements.
 * Then break them up with the _.chunk() function to create new arrays. ********/

// New Array 1
var newArray1 = _.range(5, 11, 1); //Array of size 6 containing 5 to 10
console.log(newArray1);
// Printing out the Individual Elements 
var itemNum = 0;
_.forEach(newArray1, function (item) {
    ++itemNum
    console.log("item " + itemNum + ": " + item);
})
// Breaking up the array with the _.chunk() function to create new arrays.
var newArr1 = _.chunk(newArray1, 3);
console.log("_.chunk() applied to new Array");
console.log(newArr1);


// New Array 2
var newArray2 = _.range(10, 101, 10); //Array of size 10 containing 10 to 100 in increments of 10
console.log(newArray2);
// Printing out the Individual Elements 
var itemNum = 0;
_.forEach(newArray2, function (item) {
    ++itemNum
    console.log("item " + itemNum + ": " + item);
})
// Breaking up the array with the _.chunk() function to create new arrays.
var newArr2 = _.chunk(newArray2, 5);
console.log("_.chunk() applied to new Array");
console.log(newArr2);


// New Array 3
var newArray3 = _.range(-2, -11, -2); //Array of size 5 containing -2 to -2 in increments of -2
console.log(newArray3);
// Printing out the Individual Elements 
var itemNum = 0;
_.forEach(newArray3, function (item) {
    ++itemNum
    console.log("item " + itemNum + ": " + item);
})
// Breaking up the array with the _.chunk() function to create new arrays.
var newArr3 = _.chunk(newArray3, 2);
console.log("_.chunk() applied to new Array");
console.log(newArr3);

/********* Excercise 4 - Create arrays with elements: ********/

// 1 - 20
var Array_1to20 = _.range(1, 21, 1);
console.log("Array_1to20: " + Array_1to20);

// 50 - 100
var Array_50to100 = _.range(50, 101, 1);
console.log("Array_50to100: " + Array_50to100);

// 1 - 100, only even
var Array_1to100_onlyEven = _.range(2, 101, 2);
console.log("Array_1to100_onlyEven: " + Array_1to100_onlyEven);

// 1 - 100, only odd
var Array_1to100_onlyOdd = _.range(1, 101, 2);
console.log("Array_1to100_onlyOdd: " + Array_1to100_onlyOdd);

// 1-500, only multiples of 20
var Array_1to500_onlyMultiplesOf_20 = _.range(20, 501, 20);
console.log("Array_1to500_onlyMultiplesOf_20: " + Array_1to500_onlyMultiplesOf_20);