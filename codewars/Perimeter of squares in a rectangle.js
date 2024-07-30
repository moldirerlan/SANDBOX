//CODEWARS JS TASKS 


//TASK 11(Perimeter of squares in a rectangle) # 5kyu
// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


//SOLUTION
function perimeter(n) {
    // Function to calculate the first (n + 1) Fibonacci numbers
    function fibonacci(n) {
      const fib = [1, 1];  // Starting with the first two Fibonacci numbers
      for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }
      return fib.slice(0, n + 1);  // Return the first (n + 1) Fibonacci numbers
    }
    
    // Get the first (n + 1) Fibonacci numbers
    const fibNumbers = fibonacci(n);
    
    // Calculate the sum of these Fibonacci numbers
    const sum = fibNumbers.reduce((acc, num) => acc + num, 0);
    
    // Return 4 times the sum
    return 4 * sum;
  }
  
  // Example usage:
  console.log(perimeter(5));  // Output: 80
  console.log(perimeter(7));  // Output: 216