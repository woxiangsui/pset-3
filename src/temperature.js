const readlineSync = require("readline-sync");

const temp = readlineSync.question("\n\nEnter a temperature: ");
const scale = readlineSync.question("Enter a scale: ");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

if (Number.isNaN(temp) || Number.isNaN(scale)) {
  console.log("\nInvalid.");
} else if (temp < MIN || temp > MAX || scale < MIN || scale > MAX) {
    console.log("\nInvalid.");
} else if (scale == "F") {
    if (temp >= MIN && temp <= 32) {
      console.log("\nSolid.");
    } else if (temp > 32 && temp < 212) {
        console.log("\nLiquid.");
    } else if (temp >= 212 && temp <= MAX) {
        console.log("\nGas.");
    } else {
        console.log("\nInvalid.");
    }
} else if (scale == "C") {
    if (temp >= MIN && temp <= 0) {
      console.log("\nSolid.");
    } else if (temp > 0 && temp < 100) {
        console.log("\nLiquid.");
    } else if (temp >= 100 && temp <= MAX) {
        console.log("\nGas.");
    } else {
        console.log("\nInvalid.");
    }
} else if (scale == "K") {
    if (temp >= 0 && temp <= 273.15) {
      console.log("\nSolid.");
    } else if (temp > 273.15 && temp < 373.15) {
        console.log("\nLiquid.");
    } else if (temp >= 373.15 && temp <= MAX) {
        console.log("\nGas.");
    } else {
        console.log("\nInvalid.");
    }
} else {
    console.log("\nInvalid.");
}
