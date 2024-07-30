//CODEWARS JS TASKS 


//TASK 14(Area and perimeter of the ellipse)
// Based on the received dimensions, a and b, of an ellipse, calculare its area and perimeter.

// Example:
// Input: elipse(5,2)

// Output: "Area: 31.4, perimeter: 23.1"
// Note: The perimeter approximation formula you should use: π * (3/2(a+b) - sqrt(ab))


//SOLUTION
function elipse(a, b) {
    const pi = Math.PI;

    // Calculate the area
    const area = pi * a * b;

    // Calculate the perimeter using the given approximation formula
    const perimeter = pi * ((3 / 2) * (a + b) - Math.sqrt(a * b));

    // Format the result to one decimal place
    const areaRounded = area.toFixed(1);
    const perimeterRounded = perimeter.toFixed(1);

    // Return the formatted result
    return `Area: ${areaRounded}, perimeter: ${perimeterRounded}`;
}

// Example usage
console.log(elipse(5, 2)); // Output: "Area: 31.4, perimeter: 23.1"
