"use strict"

// function hiThere() {
//     let you = prompt("What's your name? ");
//     // console.log("Hello", you, "!");
//     // // console log only 1 parameter

//     // // alert template string `backtick with $ sign
//     alert (` Hello ${you}`);
//   }
//   hiThere();

// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
//   }
//   addTwoNumbers();

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

// let spreadInsert = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spreadInsert, "and", "very",
// "powerful"];
// console.log(message);

// function addTwoNumbers(x, y) {
//     console.log(x + y);
//     }
//     let arr = [5, 9];
//     addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
//     }
//     let arr = [5, 9];
//     let arr2 = [6, 7];
//     addFourNumbers(...arr, ...arr2);

// function someFunction(param1, param2, ...param3) {
//     console.log(param1, param2, param3);
//     }
//     someFunction("hi", "there!", "How are you?");

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
//     }
//     let z = testAvailability();
//     console.log("Outside the function:", z);
//     // console.log("Not available here:", y);

// LET vs Var = Var is global. Let is local within braces
// function doingStuff() {
//     if (true) {
//         var x = "This is the variable";
//         // if using LET, console must be inside braces 
//     }
//     // use VAR for vaible if the action is outside the braces block scope
//     console.log(x);
// }
// doingStuff();

// function logRecursive(num) {
//     console.log("Started function:", num);
//     if (num > 0) {
//     logRecursive(num - 1);
//     } else {
//     // alert for fun
//         alert("done with recursion");
//     }
//     console.log("Ended function:", num);
//     }
//     logRecursive(3);

// function doOuterFunctionStuff(nr) {
//     //console.log("Outer function");
//     doInnerFunctionStuff();
//     function doInnerFunctionStuff() {
//         console.log(nr + 3);
//         //console.log("I can access outer variables:", nr);
//         let nr2 = 3;
//         console.log(nr2 + 5);
//     }
// }
// // doOuterFunctionStuff(2);
// ---------------------------------------
// let functionVariable = function () {
//     console.log("Not so secret though.");
// };
// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
// }
// doFlexibleStuff(functionVariable);
// ---------------------------------------

let youGotThis = function () {
  console.log("You're doing really well, keep coding!");
};
setTimeout(youGotThis, 1000);
//setInterval(youGotThis, 1000); 