//CODEWARS JS TASKS 


//TASK 7(Thinkful - Logic Drills: Traffic light)
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


//SOLUTION
function updateLight(current) {
    if (current === 'green') {
      return 'yellow';
    } else if (current === 'yellow') {
      return 'red';
    } else if (current === 'red') {
      return 'green';
    } else {
      throw new Error('Invalid traffic light color');
    }
  }
  
  console.log(updateLight('green'));  // Output: 'yellow'
  console.log(updateLight('yellow')); // Output: 'red'
  console.log(updateLight('red'));    // Output: 'green'