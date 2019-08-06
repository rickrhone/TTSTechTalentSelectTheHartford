// ******************** Ricardo R. LAB 1 - Arrays ***************************

console.log("Ricardo Rhone Lab 1 (Arrays) - 8/6/2019")
// 1. Shopping List Array
var ShoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
console.log("1. Shopping list Array");
console.log(ShoppingList);

// 2. Add fruit loops to the list
ShoppingList.push('fruit loops');
console.log("\n2. Add fruit loops to the list");
console.log(ShoppingList);

// 3. Update coffee to fair trade coffee
// find the index of coffee and then replace it with fair trade coffee
ShoppingList[ShoppingList.indexOf('coffee')] = 'fair trade coffee';
console.log("\n3. Update coffee to 'fair trade coffee'");
console.log(ShoppingList);

// 4. Replace 'chips' and 'salsa' with 'rice' and 'beans' 
// find the index of rice and start there 
ShoppingList.splice(ShoppingList.indexOf('chips'), 2, 'rice', 'beans');
console.log("\n4. Replace 'chips' and 'salsa' with 'rice' and 'beans'");
console.log(ShoppingList);

// 5. Shopping cart array
shoppingCart = [];
console.log("\n5. Creat a shopping cart array");
console.log(shoppingCart);

// 6. Remove the last item from the ShoppingList and add it to the shopping cart
shoppingCart.push(ShoppingList.pop());
console.log("\n6. Remove the last item from the ShoppingList and add it to the shopping cart");
console.log(shoppingCart);

// 7. Remove the first item from the shoppinglist and add it to the shopping cart
shoppingCart.push(ShoppingList.shift());
console.log("\n7. Remove the first item from the shoppinglist and add it to the shopping cart");
console.log(shoppingCart);

// 8. Create a While loop that takes from the Shopping List and moves items to the Shopping cart
let counter = 0;
let ShoppingListCount = ShoppingList.length;

while (counter < ShoppingListCount) {
    shoppingCart.push(ShoppingList.pop());
    counter++;
}

console.log("\n8. Create a While loop that takes from the Shopping List and moves items to the Shopping cart");
console.log(shoppingCart);

// 9. Sort the items in the cart alphabetically backwords
console.log("\n9. Sort the items in the cart alphabetically backwords");
console.log(shoppingCart.sort().reverse());

// 10. Print the list of items in the cart to the console as a comma separated string 
console.log("\n10. Print the list of items in the cart to the console as a comma separated string");
console.log(shoppingCart.join(', ').toString());

var course = {

};

// ************************* LAB 2 - OBJECTS ****************************
console.log("\nRicardo Rhone Lab 2 (Objects) - 8/6/2019")
//Given the following object: 
var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [{
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs: {
        skills: ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};
// Get the following values:
// 1. Name of the course ('JavaScript Applications')
console.log("\n1. Get the Name of the course ('JavaScript Applications')");
console.log(course.name);

// 2. Name of the second teacher ('Shane')
console.log("\n2. Get the Name of the second teacher ('Shane')");
console.log(course.teachers[1]);

// 3. Name of the first student ('Steve')
console.log("\n3. Get the Name of the first student ('Steve')");
console.log(course.students[0].name);

// 4. Katy's computer type ('macbook')
console.log("\n4. Get Katy's computer type ('macbook')");
console.log(course.students[1].computer.type);

// 5. The preReq equipment object
console.log("\n5. Get the preReq equipment object");
console.log(course.preReqs);

// 6. The second OSOption from equipment prereqs ('osx')
console.log("\n6. Get the second OSOption from equipment prereqs ('osx')");
console.log(course.preReqs.equipment.OSOptions[1]);

// 7. string listing the OSOptions separated by 'or' ('linux or osx')
console.log("\n7. Get the string listing the OSOptions separated by 'or' ('linux or osx')");
console.log(course.preReqs.equipment.OSOptions.join(' or ').toString());

// 8. An array of all the students that are using OSX.
console.log("\n8. Get an array of all the students that are using OSX.");

let studentsUsingOSX = [];

for (let counter = 0; counter < course.students.length; counter++) {
    if (course.students[counter].computer.OS == 'OSX') {
        studentsUsingOSX.push(course.students[counter].name)
    }
}

console.log(studentsUsingOSX);


// ********************* LAB 3 - Functions Basics ************************************
console.log("\nRicardo Rhone Lab 3 (Functions Basics) - 8/6/2019");

//Calculating gratuity is a repetitive task, so let's create a couple of functions that do the work for us.

// 1. create a variable titled billAmount and store a random number (ie: 100)
let billAmount = 100;
console.log("\n1. create a variable titled billAmount and store a random number (ie: 100)");
console.log(billAmount);

// 2. create a function titled gratuity() to multiply the value of billAmount by 20% and return the value
function gratuity(billAmount) {
    return billAmount * 0.2;
}
console.log("\n2. create a function titled gratuity() to multiply the value of billAmount by 20% and return the value");
console.log(gratuity);

/* 3. create a function titled totalWithGrat() to 
 * take in the amount as an argument
 * call the gratutity function
 * add that to the original bill amount
 * return the total bill + gratuity
 * log the total (with gratuity) to the console
 * append new total to the following phrase: "your total including gratuity is:"
 * Limitation: You can only invoke the totalWithGrat function when logging the result
 */
function totalWithGrat(billAmount) {
    let totalBillPlusGratuity = billAmount + gratuity(billAmount)
    console.log("your total including gratuity is: " + totalBillPlusGratuity);
    return totalBillPlusGratuity;
}
console.log("\n3. create a function titled totalWithGrat() and log the result to the console");
console.log(totalWithGrat(100));

// ********************* LAB 4 - This Keyword ************************************
console.log("\nRicardo Rhone Lab 4 (This Keyword) - 8/6/2019");

/* 
Create a single object named slideshow that represents the data and functionality of a picture slideshow. 
There should be NO VARIABLES OUTSIDE THE OBJECT. 
*/

let slideshow = {
    //The object should have properties: 

    // 1. An array called photoList that contains the names of the photos as strings
    photoList: ['Photo 1', 'Photo 2', 'Photo 3', 'Photo 4', 'Photo 5'],

    // 2. An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    currentPhotoIndex: 0,

    // 3. A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: logs the current photo name.
    nextPhoto: function () {
        for (let counter = 0; this.currentPhotoIndex < this.photoList.length; counter++) {

            // 4. logs the current photo name.
            console.log(this.photoList[this.currentPhotoIndex])
            this.currentPhotoIndex++;

        }
        // 5. Otherwise, log "End of slideshow"
        console.log("End of slideshow");
        this.currentPhotoIndex -= 1; // resets to the last index position
    },

    // 6. A prevPhoto() function that does the same thing, but backwards.
    prevPhoto: function () {
        for (let counter = this.photoList.length; this.currentPhotoIndex > 0; counter--) {
            // 4. logs the current photo name.
            console.log(this.photoList[this.currentPhotoIndex - 1])
            this.currentPhotoIndex--;
        }
        // Otherwise, log "End of slideshow"
        console.log("End of slideshow");
    },

    // 7. A function getCurrentPhoto() that returns the current photo from the list
    getCurrentPhoto: function () {
        return this.photoList[this.currentPhotoIndex];
    }
}

slideshow.nextPhoto();
slideshow.prevPhoto();
console.log(slideshow.getCurrentPhoto());