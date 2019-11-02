const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\nEnter three numbers.\n\n"));
const integer2 = Number(readlineSync.question(""));
const integer3 = Number(readlineSync.question(""));

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

if (Number.isNaN(integer)) {
    console.log("\nInvalid.");
} else if (integer == integer2 && integer2 == integer3) {
    console.log("\nEqual.");
} else if (integer < integer2 && integer2 < integer3) {
    if (integer - integer2 == integer2 - integer3) {
      console.log("\nStrictly increasing.");
    } else {
      console.log("\nIncreasing.");
    }
} else if (integer > integer2 && integer2 > integer3) {
    if (integer - integer2 == integer2 -integer3) {
      console.log("\nStrictly decreasing.");
    } else {
      console.log("\nDecreasing.");
    }
} else {
  console.log("\nUnordered.")
}
