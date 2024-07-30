//CODEWARS JS TASKS 


//TASK 11(First non-repeating character) # 5 kyu
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.


//SOLUTION
function firstNonRepeatingLetter(s) {
    const charCount = new Map();
    const lowerCaseString = s.toLowerCase();
  
    // Count occurrences of each character in the lowercase string
    for (let char of lowerCaseString) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Find the first character in the original string that is non-repeating
    for (let i = 0; i < s.length; i++) {
      if (charCount.get(lowerCaseString[i]) === 1) {
        return s[i];
      }
    }
  
    // If no non-repeating character is found, return an empty string
    return "";
  }
  
  // Example usage:
  console.log(firstNonRepeatingLetter('stress')); // Output: 't'
  console.log(firstNonRepeatingLetter('sTreSS')); // Output: 'T'
  console.log(firstNonRepeatingLetter('aabbcc')); // Output: ''