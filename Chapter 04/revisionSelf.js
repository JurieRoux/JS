// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
//     },
//     {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
//     }];

//     let cityName = addresses[1].city;
//     console.log(cityName);

// let age = prompt("What is your age");
// if(age < 18) {
//     console.log("We're very sorry, but you can't get in under 18");
//     } else {
//     console.log("Welcome!");
//     }

// let age = prompt("What is your age?");
// if (age < 3) {
//     console.log("Access is free under three.");
// } else if (age < 12) {
//     console.log("With the child discount, the fee is 5 dollars");
// } else if (age < 65) {
//     console.log("A regular ticket costs 10 dollars.");
// } else if (age >= 65) {
//     console.log("A ticket is 7 dollars.");
// }

// let age = prompt ("What is your age");
// let access = age < 18 ? "denied" : "granted";
// age < 18 ? console.log("denied") : console.log ("granted");

// let userInput = prompt("What activity are you doing?");

// switch(userInput) {
//     case "Get up":
//     console.log("It is 6:30AM");
//     break;
//     case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//     case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//     case "Lunch":
//     console.log("It is 12:00PM");
//     break;
//     case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//     case "Dinner":
//     console.log("It is 6:30PM");
//     break;
//     default:
//         console.log("Check your spelling");
//         break;
//     }

// const q = '1';
// switch (q) {
//     case '1':
//         answer = "one";
//         break;
//     case 1:
//         answer = 1;
//         break;
//     case 2:
//         answer = "this is the one";
//         break;
//     default:
//         answer = "not working";
// }
// console.log(answer);

// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
// arrOfArrays.push([]);
// for (let j = 0; j < 7; j++) {
// arrOfArrays[i].push(j);
// }
// }
// console.log(arrOfArrays);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let name of names){
// console.log(name);
// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     };
//     // for (let prop in car){
//     // console.log(car[prop]);
//     // }

//     //-----FOR-OF
//   for (const [key, value] of Object.entries(car)) {
//     console.log(key, ":", value);
// };

// let cars = [
//     {
//       model: "Golf",
//       make: "Volkswagen",
//       year: 1999,
//       color: "black",
//     },
//     {
//       model: "Picanto",
//       make: "Kia",
//       year: 2020,
//       color: "red",
//     },
//     {
//       model: "Peugeot",
//       make: "208",
//       year: 2021,
//       color: "black",
//     },
//     {
//       model: "Fiat",
//       make: "Punto",
//       year: 2020,
//       color: "black",
//     },
//   ];

//   for (let car of cars){
//     if(car.color !== "black"){
//         continue;
// }
// if (car.year >= 2020) {
// console.log("we could get this one:", car);
// }
// }

// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
// ];

// // for (let group of groups) {
// //     for (let member of group) {
// //         if (member.startsWith("M")) {
// //             console.log("found one starting with M:", member);
// //             break;
// //         }
// //     }
// // }
// outer:
// for (let group of groups) {
// inner:
//     for (let member of group) {
//         if (member.startsWith("M")) {
//             console.log("found one starting with M:", member);
//             break outer;
//         }
//     }
// }

// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
//     }
// sayHello();

// function tester(para1, para2){
//     return para1 + " " + para2;
//     }
//     const arg1 = "argument 1";
//     const arg2 = "argument 2";
//     tester(arg1, arg2);
// console.log (arg2 + " and " + arg1);

// let doingArrowStuff = x => console.log(x);
// doingArrowStuff ("Great");

// let arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

