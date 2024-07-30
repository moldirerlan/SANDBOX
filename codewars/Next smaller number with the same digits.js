//CODEWARS JS TASKS 


//TASK 16(Next smaller number with the same digits)
// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.


//SOLUTION
function nextSmaller(n) {
    let digits = n.toString().split('').map(Number);

    // Step 2: Find the first digit that is larger than the digit immediately to its right
    let i = digits.length - 2;
    while (i >= 0 && digits[i] <= digits[i + 1]) {
        i--;
    }

    if (i === -1) return -1; // If no such digit is found, return -1

    // Step 3: Find the largest digit to the right that is smaller than digits[i]
    let j = digits.length - 1;
    while (digits[j] >= digits[i]) {
        j--;
    }

    // Step 4: Swap digits[i] and digits[j]
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 5: Sort the digits to the right of i in descending order
    let right = digits.splice(i + 1).sort((a, b) => b - a);
    digits = digits.concat(right);

    // Step 6: Convert back to number
    let result = parseInt(digits.join(''), 10);

    // Step 7: Check for leading zero
    if (digits[0] === 0) return -1;

    return result;
}

// Examples
console.log(nextSmaller(21));    // Output: 12
console.log(nextSmaller(531));   // Output: 513
console.log(nextSmaller(2071));  // Output: 2017
console.log(nextSmaller(9));     // Output: -1
console.log(nextSmaller(111));   // Output: -1
console.log(nextSmaller(135));   // Output: -1
console.log(nextSmaller(1027));  // Output: -1