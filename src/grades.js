const readlineSync = require("readline-sync");

const grade = readlineSync.question("\n\nEnter a grade: ");

const MAX = 100 ;
const B = 90 ;
const C = 80 ;
const D = 70 ;
const F = 60 ;
const MIN = 0 ;


if (Number.isNaN(grade)) {
  console.log("\nInvalid.");
} else if (grade >= B && grade <= MAX) {
    console.log("\nYou received an A.");
} else if (grade < B && grade >= C) {
    console.log("\nYou received a B.");
} else if (grade < C  && grade >= D) {
    console.log("\nYou received a C.");
} else if (grade < D && grade >= F) {
    console.log("\nYou received a D.");
} else if (grade < F && grade >= MIN) {
    console.log("\nYou received a F.");
} else {
    console.log("\nInvalid.")
}
