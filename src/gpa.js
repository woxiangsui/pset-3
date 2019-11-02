const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a letter grade: ");

const MIN = 4 ;
const MAX = 0 ;

if (Number.isNaN(grade)) {
  console.log("\nInvalid.");
} else if (grade = B) {
    console.log("\nYour GPA is 3.00.");
} else {
  console.log("\nInvalid.");
}
