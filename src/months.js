const readlineSync = require("readline-sync");

const month = readlineSync.question("\n\nEnter a month: ");

if (month == "jan" || month == "January" || month == "january" ||
    month == "mar" || month == "March" || month == "march" ||
    month == "may" || month == "May" ||
    month == "jul" || month == "July" || month == "july" ||
    month == "aug" || month == "August" || month == "august" ||
    month == "oct" || month == "October" || month == "october" ||
    month == "dec" || month == "December" || month == "december") {
      console.log("\n31 days.");
} else if (month == "feb" || month == "February" || month == "february") {
    console.log("\n28 or 29 days.");
} else if (month == "apr" || month == "April" || month == "april" ||
      month == "jun" || month == "June" || month == "june" ||
      month == "sep" || month == "September" || month == "september" ||
      month == "nov" || month == "November" || month == "november") {
        console.log("\n30 days.");
} else {
    console.log("\nInvalid.");
}
