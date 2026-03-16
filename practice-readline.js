const readline = require ("readline-sync");
let helpRequest = readline.question("Are you ready for a short quiz yes or no?  ");
let lowercaseText = helpRequest.toLowerCase();
/*(if (lowercaseText === "yes") {let greetings = readline.question( "what is your name?  ")
      
console.log("Nice to meet you  " + greetings)
}*/

if (lowercaseText === "yes") {let greetings = readline.question("Great, what is your name?  ")
      
    console.log("Nice to meet you  " + greetings);
    let qtsOne= readline.question("which operator is used to concatenate two strings together  ");
      console.log(qtsOne);

    let qtsTwo = readline.question("What is the name of the data type which has these caracteristic : basic data type, immutable, and represent a single value?  ");
      console.log(qtsTwo); 
    
    let qtsThree = readline.question("What kind of the complex data is the following: let car =['model', 'year', 'color']  ");
      console.log(qtsThree);

    let qtsFour= readline.question("What are the 6 values that are classified as falsy values? ");
       console.log(qtsFour)
    
    let qtsFive= readline.questionInt("How many hours does this take to study one module? ");
       console.log(qtsFive + " hour(s)");





} else {console.log("Have a great day!");
    
}
