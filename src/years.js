const readlineSync = require("readline-sync");

const year = readlineSync.question("\n\nEnter a year: ");

const MIN = 0 ;
const MAX = Number.MAX_SAFE_INTEGER ;

if (Number.isNaN(year) == true) {
    console.log("\nInvalid.");
} else if (year < MIN || year > MAX) {
    console.log("\nInvalid.");
} else if (Number.isInteger(year)) {
    console.log("\nInvalid.");
} else if (year % 4 == 0) {
    if (year % 100 != 0) {
      console.log("\n" + year + " is a leap year.");
    } else {
        console.log("\n" + year + " is not a leap year.");
    }
} else if (year % 100 == 0) {
  if (year % 400 == 0) {
    console.log("\n" + year + " is a leap year.");
  } else {
    console.log("\n" + year + " is not a leap year.");
  }
} else if (year > MIN || year < MAX) {
console.log("\n" + year + " is not a leap year.");
} else {
    console.log("\nInvalid.");
}
