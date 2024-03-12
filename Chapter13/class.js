// function doSomething(callback) {
//     callback();
//     }
//     function sayHi() {
//         [ 347 ]
// console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case grade == "C":
//             console.log("You got a", grade, ": alright.");
//             break;
//         case grade == "D":
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log(grade, "! What?!");
//     }
// }
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "Failed";
//     }
//     callback(grade);
// }
// getGrade(94, judge);

// setInterval(encourage, 5000);
// function encourage() {
// console.log("You're doing great, keep going!");
// }

// let promise = new Promise((resolve, reject)=> {
//     // do something that might take a while
//     // let's just set x instead for this example
//     let x = 11;
//     if (x > 10) {
//         resolve(x); // on success
//     } else {
//         reject("Too low"); // on error
//     }
// });
// promise.then(
//     function (value) {
//         console.log("Success!", value, "which is Greater than 10");
//     },
//     function (error) {
//         console.log("Error:", error);
//     }
// );

// const promise = new Promise((resolve, reject) => {
//     resolve("success!");
//     // reject("Error");
//     })
// .then(value => {
// console.log(value);
// return "we";
// })
// .then(value => {
// console.log(value);
// return "can";
// })
// .then(value => {
// console.log(value);
// return "chain";
// })
// .then(value => {
// console.log(value);
// return "promises";
// })
// .then(value => {
// console.log(value);
// })
// .catch(value => {
// console.log(value);
// })

// const promise = new Promise((resolve, reject) => {
//     resolve("Start Counting");
//     // reject("You can't start counting because the Promise was Rejected");
// })
//     .then(value => {
//         console.log(value);
//         return "one";
//     })
//     .then(value => {
//         console.log(value);
//         return "two";
//     })
//     .then(value => {
//         console.log(value);
//         return "three";
//     })
//     // The next .then breaks the cycle
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     })

// function saySomething(x) {
//     return new Promise(resolve => {
//     setTimeout(() => {
//     resolve("something " + x);
//     }, 3000);
//     });
//     }
//     async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
//     }
//     talk(2);
//     talk(4);
//     talk(8);

/// EX13.3
// let cnt = 0;
// function outputTime(val) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             cnt++;
//             resolve(`x value ${val} counter: ${cnt}`);
//         }, 1000);
//     });
// }
// async function aCall(val) {
//     console.log(`ready ${val} counter:${cnt}`);
//     const res = await outputTime(val);
//     console.log(res);
// }
// for (let x = 1; x < 4; x++) {
//     aCall(x);
// }


console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 1250);
console.log(add(4, 5));
function add(x, y) {
return x + y;
}