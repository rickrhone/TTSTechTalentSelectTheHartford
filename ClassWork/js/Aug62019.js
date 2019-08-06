// Ricardo R. LAB 1

console.log("Ricardo Rhone Lab 1 - 8/6/2019")
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

// LAB 2
console.log("\nRicardo Rhone Lab 2 - 8/6/2019")
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
console.log("\n7. Get an array of all the students that are using OSX.");

let studentsUsingOSX = [];

for (let counter = 0; counter < course.students.length; counter++) {
    if (course.students[counter].computer.OS == 'OSX') {
        studentsUsingOSX.push(course.students[counter].name)
    }
}

console.log(studentsUsingOSX);