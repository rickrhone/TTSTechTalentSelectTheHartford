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

//Excercise 1 - break the array up into smaller arrays 
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

        //Excercise 2 - add the code to view the individual entries of the newly formed arrays.
        _.forEach(value, function (item) { //logs each of items in the 4 Arrays
            console.log(item);
        })
    });
}

//Excercise 3 - Using the _.range() method, create several new arrays and print out their individual elements.
//Then break them up with the _.chunk() function to create new arrays.

//New Array 1
var newArray1 = _.range(5, 11, 1); //Array of size 5 containing 5 to 10
console.log(newArray1);
//New Array 2
var newArray2 = _.range(0, 101, 10); //Array of size 10 containing 10 to 100 in increments of 10
console.log(newArray2);