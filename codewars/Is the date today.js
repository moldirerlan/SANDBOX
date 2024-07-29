//CODEWARS JS TASKS 


//TASK 10(Is the date today)
// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


//SOLUTION
function isToday(date) {
    // Get the current date
    const today = new Date();
  
    // Compare the year, month, and day
    return date.getFullYear() === today.getFullYear() &&
           date.getMonth() === today.getMonth() &&
           date.getDate() === today.getDate();
  }
  
  console.log(isToday(new Date())); // Output: true (assuming today is the same day this code is run)
  console.log(isToday(new Date('2023-07-28'))); // Output: false (assuming today is not July 28, 2023)
  