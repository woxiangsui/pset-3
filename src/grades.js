const readlineSync = require("readline-sync");

const grade = readlineSync.question("\nEnter a grade: ");

 const MAX = 100 ;
 const MIN = 0 ;
 const A = (grade <= 100 && grade >= 90);

if (Number.isNaN(grade)) {
  console.log("\nInvalid.");
} else if (grade == A) {
    console.log("\nYou received an A.");
} else if (grade <= 89 && grade >= 80) {
    console.log("\nYou received a B.");
} else if (grade <= 79 && grade >= 70) {
    console.log("\nYou received a C.");
} else if (grade <= 69 && grade >= 60) {
    console.log("\nYou received a D.");
} else if (grade <= 59 && grade >= 0) {
    console.log("\nYou received a F.");
} else {
    console.log("\nInvalid.")
}
