const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.")
} else {
    const QUARTER = 0.25 ;
    const DIME = 0.10 ;
    const NICKEL = 0.05 ;
    const PENNY = 0.01 ;
    let amountOfQuarter = 0 ;
    let amountOfDime = 0 ;
    let amountOfNickel = 0 ;
    let amountOfPenny = 0 ;
      while (amount >= QUARTER) {
        amount = amount - QUARTER ;
        amountOfQuarter ++ ;
      } while (amount >= DIME) {
        amount = amount - DIME ;
        amountOfDime ++ ;
      } while (amount >= NICKEL) {
        amount = amount - NICKEL ;
        amountOfNickel ++ ;
      } while (amount >= PENNY) {
        amount = amount - PENNY ;
        amountOfPenny ++ ;
      } console.log("\n" + amountOfQuarter + " quarters, " + amountOfDime + " dimes, " + amountOfNickel + " nickels, and " + amountOfPenny + " pennies.");
}
