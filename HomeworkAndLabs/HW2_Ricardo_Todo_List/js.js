// Ricardo Rhone TTS Homework 2 - Aug 8, 2019

// adding an element to the list 
function AddLiOnClickFunc() {
    let todoFromInputField = document.getElementById('newTodo').value; // stores the new todo item
    let newListItem = document.createElement('li'); // creates a new list item 
    newListItem.innerHTML = todoFromInputField; // adds the todo item to the list items
    document.getElementById('listOfItems').appendChild(newListItem); // selects the ul tag and adds the new item to the list 
    document.getElementById('newTodo').value = ''; // clears the text from the input field
}

// removing a list item when the user clicks on it 
document.getElementById('listOfItems').addEventListener("click", function (event) {
    event.target.remove();
    console.log(event);
})