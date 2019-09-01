var obj1 = {
    name: "Rect",
    height: 22,
    width: 11,
    display: function () {
        console.log("name: " + this.name + ", height: " + this.height + ", width: " + this.width);
    }

}

obj1.display();

//Constructor function for rectangle objects
function Rect(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
}

obj2 = new Rect("Rec1",7,9); //creates a new Rect using the constructor 

