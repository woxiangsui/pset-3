const readlineSync = require("readline-sync");

const grade = readlineSync.question("\n\nEnter a letter grade: ");

if (Number.isNaN(grade)) {
  console.log("\nInvalid.");
} else if (grade == "A" || grade == "A+") {
    console.log("\nYour GPA is 4.00.");
} else if (grade == "A-") {
    console.log("\nYour GPA is 3.67.");
} else if (grade == "B-") {
    console.log("\nYour GPA is 3.00.");
} else if (grade == "B+") {
    console.log("\nYour GPA is 3.33.");
} else if (grade == "C+") {
    console.log("\nYour GPA is 2.33.");
} else if (grade == "C-") {
    console.log("\nYour GPA is 2.00.");
} else if (grade == "D+") {
    console.log("\nYour GPA is 1.33.");
} else if (grade == "D-") {
    console.log("\nYour GPA is 1.00.");
} else if (grade == "F") {
    console.log("\nYour GPA is 0.00.");
} else {
  console.log("\nInvalid.");
}
