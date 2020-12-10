// Created By: Jacob Bonner
// Created On: December 2020
// This program pushes a user inputted integer to a stack and
//   pops back the last two integers.

// Importing the class JacobStack from another file
const JacobStack = require("./jacob_stack");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// Declaring stack by using the JacobStack class
let stack = new JacobStack();

try {
  // User input for size of stack 
  const stackSize = prompt("How many integers would you like for the stack: ");
  console.log();

  if (isNaN(stackSize) == true) {
    throw "ERROR: Invalid Input";
  } else {
    for (let counter = 0; counter < stackSize; counter++) {
      // User input for an integer for the stack
      const userInput = prompt("Enter an Integer for the Stack: ");
      console.log();

      // Placing the inputted integer on the stack
      if (isNaN(userInput) == true) {
        throw "ERROR: Invalid Input";
      } else {
        // Pushing and verifying the inputted number to the top of the stack
        stack.pushNumber(userInput);
        if (counter == stackSize - 1) {
          // Popping the two most recent integers and returning them to the user
          console.log("First Number Popped From Stack:", stack.popNumber());
          console.log("Second Number Popped From Stack:", stack.popNumber());

          // Printing the current values in the stack
          console.log(stack.currentStack());
        } else {
          continue;
        }
      }
    }
  }

  // Catches and tells the user what error occured
} catch (err) {
  console.log("");
  console.error(err);
}
