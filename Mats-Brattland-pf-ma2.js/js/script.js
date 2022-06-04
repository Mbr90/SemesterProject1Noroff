// Module Assignment 2

/* Question 1
Loop through the array below and console log each type property if the age is at least 4 */

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];
 
   for (var i = 0; i < pets.length; i++) {
         var petType = pets[i].type;
         if (pets[i].age >= 4.0) {
             console.log (petType);
         }
  }


 /* Question 2
Create a function with one argument.
Inside the function check the type of the value being passed in.
If it is a boolean value, log the value.
If it is not a boolean value, log the message “Please pass a boolean value in”.
Call the function and pass a value in. */


function checkType(y) {
    if (y === true || y === false) {
        console.log(y);
    } else {
        console.log("Please pass a boolean value in.");
    }
}

checkType();

/* Question 3
Write code that does the following:
When the button in the HTML is clicked, change the colour of the h2 element to “blue” and change it to read “Updated subheading”. */

var heading2 = document.querySelector("h2");
var button = document.querySelector("button");

function changeH2() {
    heading2.innerHTML = "Updated subheading";
    heading2.style.color ="blue";
};

button.onclick = changeH2; 