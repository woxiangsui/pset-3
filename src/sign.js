const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\nEnter a number: "));

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;

if (Number.isNaN(integer)) {
    console.log("\nInvalid.")
} else if (integer <= MIN || integer >= MAX) {
  console.log("\nInvalid.")
} else if (integer == 0) {
  console.log("\nZero.")
} else if (integer > +0) {
    console.log("\nPositive.")
} else {
  console.log("\nNegative.")
}
