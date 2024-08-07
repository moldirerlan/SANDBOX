//CODEWARS JS TASKS 


//TASK 5(QUADRANTS)
// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// There are four quadrants:
// First quadrant, the quadrant in the top-right, contains all points with positive X and Y
// Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
// Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
// Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y


//SOLUTION
function quadrant(x, y) {
    if (x > 0 && y > 0) {
      return 1;
    } else if (x < 0 && y > 0) {
      return 2;
    } else if (x < 0 && y < 0) {
      return 3;
    } else if (x > 0 && y < 0) {
      return 4;
    }
  }
  
  console.log(quadrant(1, 2));     // Output: 1
  console.log(quadrant(3, 5));     // Output: 1
  console.log(quadrant(-10, 100)); // Output: 2
  console.log(quadrant(-1, -9));   // Output: 3
  console.log(quadrant(19, -56));  // Output: 4
  