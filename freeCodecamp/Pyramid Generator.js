// freeCodecamp
/*In this project, you created a Pyramid Generator using JavaScript. I utilized core programming concepts such as arrays, strings, functions, loops, and conditional statements. The generator builds a pyramid based on the character variable and count for the number of rows. The padRow function creates rows with proper padding. A for loop constructs each row, adding it to the rows array based on the inverted flag. A while loop ensures the array has the correct number of rows. Finally, a for...of loop concatenates the rows into the final pyramid string, which is printed to the console.*/

const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}

for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);