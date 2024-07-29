//CODEWARS JS TASKS 


//TASK 3(Collinearity)
// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on whether the vectors are collinear or not.

// all coordinates are integers
// -1000 <= any coordinate <= 1000
// Notes
// All vectors start from the origin (x=0, y=0).
// Be careful when handling cases where x1, x2, y1, or y2 are zero to avoid division by zero errors.
// A vector with coordinates (0, 0) is collinear to all vectors.


//SOLUTION
function collinearity(x1, y1, x2, y2) {
    return x1 * y2 === y1 * x2;
}

// Examples
console.log(collinearity(1, 1, 1, 1)); // true
console.log(collinearity(1, 2, 2, 4)); // true
console.log(collinearity(1, 1, 6, 1)); // false
console.log(collinearity(1, 2, -1, -2)); // true
console.log(collinearity(1, 2, 1, -2)); // false
console.log(collinearity(4, 0, 11, 0)); // true
console.log(collinearity(0, 1, 6, 0)); // false
console.log(collinearity(4, 4, 0, 4)); // false
console.log(collinearity(0, 0, 0, 0)); // true
console.log(collinearity(0, 0, 1, 0)); // true
console.log(collinearity(5, 7, 0, 0)); // true