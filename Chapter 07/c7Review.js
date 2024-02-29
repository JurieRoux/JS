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
  
//   class Person {
//     constructor(firstname, lastname) {
//       this.firstname = firstname;
//       this.lastname = lastname;
//     }
//   }
  
//   let p = new Person("Jurie", "Roux");
//   console.log("Hi", p.firstname, p.lastname);

//     let p = new Person("Maaike");
//   console.log("Hi", p.firstname, p.lastname);
  
//   class Person {
//     constructor(firstname, lastname) {
//       this.firstname = firstname;
//       this.lastname = lastname;
//     }
//     greet() {
//       console.log("Hi there! " + this.firstname);
//     }
//     compliment(name, object) {
//       return "That's a wonderful " + object + ", " + name;
//     }
//   }
//   let p = new Person("Jurie");
//   p.greet();
//   let compliment = p.compliment("Tom", "shirt");
//   console.log(compliment);
// ----------------------------------------------------
//   class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//       this.color = color;
//       this.currentSpeed = currentSpeed;
//       this.maxSpeed = maxSpeed;
//     }
  
//     move() {
//       console.log("moving at", this.maxSpeed, "kph!");
//     }
  
//     accelerate(amount) {
//       this.maxSpeed += amount;
//     }
//   }
//   let car1 = new Vehicle("Red",80,180);
//   car1.move();
// car1.accelerate(20);
// car1.move();

//   class MotorCar extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//       super(color, currentSpeed, maxSpeed);
//       this.fuel = fuel;
//     }
//   }
// let Motor1 = new MotorCar("Black", 0, 250, "gasoline");


//   console.log(motor.color);
//   motor.accelerate(50);
//   motor.move();
  
//   class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//       this.#firstname = firstname;
//       this.#lastname = lastname;
//     }
  
//     get firstname() {
//       return this.#firstname;
//     }
  
//     set firstname(firstname) {
//       this.#firstname = firstname;
//     }
  
//     get lastname() {
//       return this.#lastname;
//     }
  
//     set lastname(lastname) {
//       this.#lastname = lastname;
//     }
//   }
  
//   let p = new Person("Maria", "Saga");
//   console.log(p.firstname);
  
//   class Person {
//     constructor(firstname, lastname) {
//       this.firstname = firstname;
//       this.lastname = lastname;
//     }
  
//     greet() {
//       console.log("Hi there!");
//     }
//   }
  
//   Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
//   };
  
//   let p = new Person("Maria", "Saga");
//   p.introduce();
  
  