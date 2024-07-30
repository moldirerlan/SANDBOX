//CODEWARS JS TASKS 


//TASK 12(Break camelCase) # 6 kyu
// You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the ENCODER, and its companion kata deals with the DECODER. It can be considered a harder version of Range Extraction.

// Specification
// The input signal is represented as an array of integers. Several cases of regularities can be shortened.

// A sequence of 2 or more identical numbers is shortened as number*count
// A sequence of 3 or more consecutive numbers is shortened as first-last. This is true for both ascending and descending order
// A sequence of 3 or more numbers with the same interval is shortened as first-last/interval. Note that the interval does NOT need a sign
// Compression happens left to right
// Examples
// [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] is compressed to "1,3-5,7-11,14,15,17-20"
// [0, 2, 4, 5, 7, 8, 9] is compressed to "0-4/2,5,7-9"
// [0, 2, 4, 5, 7, 6, 5] is compressed to "0-4/2,5,7-5"
// [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5] is compressed to "0-4/2,5,7-5,5*4"
// Input
// A non-empty array of integers

// Output
// A string of comma-separated integers and sequence descriptors


//SOLUTION
function solution(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1 $2');
  }
  