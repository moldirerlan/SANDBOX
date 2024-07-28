//CODEWARS JS TASKS 


//TASK 2(Double Char)
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


//SOLUTION
function doubleChar(str) {
    return str.split('').map(char => char + char).join('');
  }
  
  // Example usage
  console.log(doubleChar("String"));      // Output: "SSttrriinngg"
  console.log(doubleChar("Hello World")); // Output: "HHeelllloo  WWoorrlldd"
  console.log(doubleChar("1234!_ "));     // Output: "11223344!!__  "
