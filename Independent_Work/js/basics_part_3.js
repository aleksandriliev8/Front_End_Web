// const person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// const person2 = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// };

// console.log(person1.fullName.call(person2)); // Jane Doe

// function Car(brand, model) {
//     this.brand = brand;
//     this.model = model;
//     this.getDetails = function() {
//         console.log(`This is a ${this.brand} ${this.model}`);
//     };
// }

// const car1 = new Car('BMW', 'X5');
// const car2 = new Car('Audi', 'Q5');
// car1.getDetails(); // This is a BMW X5
// car2.getDetails(); // This is a Audi Q5


// const car = {
//     brand: 'BMW',
//     model: 'X5',
//     getDetails: function() {
//         console.log(`This is a ${this.brand} ${this.model}`);
//     }
// };

// const bike = {
//     brand: 'Harley Davidson',
//     model: 'Fat Boy'
// };

// console.log(this);

// car.getDetails();
// const bikeDetails = car.getDetails.bind(bike);
// bikeDetails();

// function multiply(num1, num2) 
// {
//     const result = num1 * num2;
//     return result;
// }

// const multiply = (num1, num2) => num1 * num2;

// function print() {
//     console.log(arguments)
// }

// print("hello", 400, false)
//    // {
//    // '0': 'hello',
//    // '1': 400,
//    // '2': false
//    // }

// const mySet = new Set([1, 2, 3]);

// const myElement = document.getElementById("my-element");

