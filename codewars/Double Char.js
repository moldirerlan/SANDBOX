function doubleChar(str) {
    return str.split('').map(char => char + char).join('');
  }
  
  // Example usage
  console.log(doubleChar("String"));      // Output: "SSttrriinngg"
  console.log(doubleChar("Hello World")); // Output: "HHeelllloo  WWoorrlldd"
  console.log(doubleChar("1234!_ "));     // Output: "11223344!!__  "
