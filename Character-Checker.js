const readline = require("readline-sync");
let firstName = readline.question("What is your first Name? ")
let lastName = readline.question("What is your last Name? ");
console.log("the user initial is " + firstName[0,2]+ "." +lastName[0]);
const threeInitial = firstName.slice(0,3);
console.log(threeInitial);

const str = "Bonjour, World!";
const firstThree = str.slice(2, 5);
console.log(firstThree);