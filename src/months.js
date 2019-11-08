const readlineSync = require("readline-sync");

const month = readlineSync.question("\nEnter a month: ");

if (month == "jan" || month == "January") {
    console.log("\n31 days.");
} else if (month == "feb" || month == "February") {
    console.log("\n28 or 29 days.");
} else if (month == "mar" || month == "March") {
    console.log("\n31 days.");
} else if (month == "apr" || month == "April") {
    console.log("\n30 days.");
} else if (month == "may" || month == "May") {
    console.log("\n31 days.");
} else if (month == "jun" || month == "June") {
    console.log("\n30 days.");
} else if (month == "jul" || month == "July") {
    console.log("\n31 days.");
} else if (month == "aug" || month == "August") {
    console.log("\n31 days.");
} else if (month == "sep" || month == "September") {
    console.log("\n30 days.");
} else if (month == "oct" || month == "October") {
    console.log("\n31 days.");
} else if (month == "nov" || month == "November") {
    console.log("\n30 days.");
} else if (month == "dec" || month == "December") {
    console.log("\n31 days.");
} else {
    console.log("\nInvalid.");
}
