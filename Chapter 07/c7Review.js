// class Dog {
//     constructor(dogName, weight, color, breed) {
//       this.dogName = dogName;
//       this.weight = weight;
//       this.color = color;
//       this.breed = breed;
//     }
//   }
//   let dog1 = new Dog("Lilly", 12, "brown & white", "alsation mix");
//   let dog2 = new Dog("Tesla", 42.3, "white & black", "dalmation");
//   console.log(dog1.dogName, "is a", dog1.color, dog1.breed, "and weighs around", dog1.weight, "kg.");
//   console.log(dog2.dogName, "is a", dog2.color, dog2.breed, "and weighs around", dog2.weight, "kg.");

//   class Car {
//     constructor(make, model, year){
//         this.make=make;
//         this.model=model;
//         this.year=year;
//     }
// }
// let car1 = new Car ("Audi","TT",2019);
// let car2 = new Car ("Audi","R8",2024);

// console.log (car1);
// console.log (car2);

// // ///////// Practice 7.1
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// // Creating particulars for friends
// const friend1 = new Person('Jurie', 'Roux');
// const friend2 = new Person('Lee', 'Roux');

// // Outputting friends with a greeting
// console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
// console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }
// }
// let p = new Person("Maaike", "van Putten");
// p.greet();

// let aa = new Person("Jurie", "Roux");
// aa.greet();

//   class Person {
//     constructor(firstname, lastname) {
//       Person.firstname = firstname;
//       Person.lastname = lastname;
//     }
//     greet() {
//       console.log("Hi there! " + Person.firstname);
//     }
//     compliment(name, object) {
//       return "That's a wonderful " + object + ", " + name;
//     }
//   }
//   let p = new Person("Jurie");
//   p.greet();
//   let compliment = p.compliment("Tom", "shirt");
//   let sayback = ("Thanks dude!")

//   console.log(compliment);
//   console.log(sayback);

// //////////////// Practice 7.2
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     fullname() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Creating instances for friends
// const friend1 = new Person('Jurie', 'Roux');
// const friend2 = new Person('Lee', 'Roux');

// // Using the fullname method to get full names
// console.log(`Full name of friend1: ${friend1.fullname()}`);
// console.log(`Full name of friend2: ${friend2.fullname()}`);

// /////////////////////////////////////////////////////////Hide Details
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

//////////////////////////////////////////////////////// Get and Set
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Maria", "Saga");
// ////Change property first name
// p.firstname = "Tom";
// console.log(p.firstname);


///////////////////////////////////////////////////Inheritance
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }
// // /////////inherit key by extending original class

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }
// let motor = new Motorcycle("Black", 50, 250, "gasoline");

// console.log(motor.color);
// motor.move();
// motor.doWheelie();


// //////////////////////////////////////////////////Prototype
// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
// }

// //////// use prototype to change blueprint of the class (person)
// Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// };
// Person.prototype.favoriteColor = "green";
// let p = new Person("Maria", "Saga");
// // console.log(p.favoriteColor);
// p.introduce();

//////////////////////////////////////////////// Chapter Project 1

// //// Define the Employee constructor function
// function Employee(firstName, lastName, yearsWorked) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearsWorked = yearsWorked;
// }

// // //Add a method to the Employee prototype to get employee details
// Employee.prototype.getDetails = function () {
//     return `${this.firstName} ${this.lastName} has worked at the company for ${this.yearsWorked} years.`;
// };

// // //Creating employees
// const employee1 = new Employee('Jurie', 'Roux', 3);
// const employee2 = new Employee('Lee', 'Roux', 5);

// // // Adding employees to an array
// const employeesArray = [employee1, employee2];

// // // Iterating the array to output results
// employeesArray.forEach(employee => {
//     // Display employee details using the getDetails method
//     console.log(`Employee: ${employee.getDetails()}`);
// });





//////////////////////////////////////////////// Chapter Project 2

// //// Define the OrderCalculator class
// class OrderCalculator {
//     // Private fields to store item prices
//     #item1Price;
//     #item2Price;

//     constructor(item1Price, item2Price) {
//         this.#item1Price = item1Price;
//         this.#item2Price = item2Price;
//     }

//     // Method to calculate and return the total cost based on quantity
//     calculateTotalCost(quantityItem1, quantityItem2) {
//         const totalCost = quantityItem1 * this.#item1Price + quantityItem2 * this.#item2Price;
//         return totalCost;
//     }

//     //// Getter property to access the total cost and log a message
//     get totalCost() {
//         console.log("Calculating total cost...");
//         return this.totalCost;
//     }
// }

// // //Creating objects with different prices
// const calculator1 = new OrderCalculator(5, 8); // Prices for item 1 and item 2
// const calculator2 = new OrderCalculator(6, 10);

// // //Calculating total cost for different quantities
// const totalCost1 = calculator1.calculateTotalCost(2, 3);
// const totalCost2 = calculator2.calculateTotalCost(4, 2);

// // //Accessing the total cost using the getter property
// console.log(`Total cost for order 1: $${totalCost1}`);
// console.log(`Total cost for order 2: $${totalCost2}`);



