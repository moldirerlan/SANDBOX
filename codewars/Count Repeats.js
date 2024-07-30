//CODEWARS JS TASKS 


//TASK 15(Count Repeats)
// Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

// Note: This includes any characters

// Examples
// 'abbbbc'  => 'abc'    #  answer: 3
// 'abbcca'  => 'abca'   #  answer: 2
// 'ab cca'  => 'ab ca'  #  answer: 1


//SOLUTION
function countRepeats(str) {
    let count = 0;
    
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        }
    }
    
    return count;
}

// Examples
console.log(countRepeats('abbbbc')); // Output: 3
console.log(countRepeats('abbcca')); // Output: 2
console.log(countRepeats('ab cca')); // Output: 1