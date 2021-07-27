// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew (name = prompt("Type in a name you want to add")){
  roster.push(name);
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
function remove (remValue = prompt("Type in the name that you want to remove")) {
  var remIndex = roster.indexOf(remValue);
  if (remIndex > -1) {
    roster.splice(remIndex, 1)
  }
}
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display () {
  for (i of roster){
    console.log(i);
  }
}
// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
while (true) {
  var input = prompt("What do you want to do? \nType 'add' to add name to the roster \nType 'display' to replay the content of the roster \nType 'remove' to remove a name from the roster \nor Type 'quit' to end this session");
      if (input == "add") {
        addNew();
      } else if (input == "display") {
        display();
      } else if (input == "remove") {
        remove();
      } else if (input == "quit") {
        alert("Thank you for playing!");
        break;
      } else {
        alert("Invalid Response... try again!");
      }
}
