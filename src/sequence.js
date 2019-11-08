const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\n\nEnter three numbers.\n\n"));
const integer2 = Number(readlineSync.question(""));
const integer3 = Number(readlineSync.question(""));

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

if (Number.isNaN(integer)) {
    console.log("\nInvalid.");
} else if (integer > MAX || integer < MIN || integer2 > MAX || integer2 < MIN || integer3 > MAX || integer3 < MIN) {
    console.log("\nInvalid.");
} else if (integer == integer2 && integer2 == integer3) {
    console.log("\nEqual.");
} else if (integer2 == integer || integer2 == integer3) {
  if (integer < integer3) {
    console.log("\nIncreasing.");
  } else {
      console.log("\nDecreasing.")
}
} else if (integer < integer2 && integer2 < integer3) {
  console.log("\nStrictly increasing.");
} else if (integer > integer2 && integer2 > integer3) {
  console.log("\nStrictly decreasing.");
} else {
  console.log("\nUnordered.")
}
