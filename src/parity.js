const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\nEnter an integer: "));

const MIN = Number.MIN_SAFE_INTEGER ;
const MAX = Number.MAX_SAFE_INTEGER ;

if (Number.isNaN(integer)) {
    console.log("\nInvalid.");
} if (Number.isInteger(integer)) {
    if (integer % 2 == 0) {
      console.log("\nEven.");
  } else {
      console.log("\nOdd.");
  }
} else {
  console.log("\nInvalid.");
}
