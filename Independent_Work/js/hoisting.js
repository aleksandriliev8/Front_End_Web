//example 1
// console.log(x);
// var x = 10;
// console.log(x);

//example 2
// console.log(a);
// let a = 5;//Error!

//example 3
// console.log(foo());

// function foo()
// {
//     return "Hello!";
// }

// //example 4
// function outerFunction() 
// {
//     function innerFunction() 
//     {
//         console.log("I'm an inner function!");
//     }

//     innerFunction();
// }

// outerFunction(); //"I'm an inner function!"
// // innerFunction(); //not defined!

//example 5
// console.log(square(5));

// const square = function (n) 
// {
//     return n * n;
// };

//exmple 6
// console.log(foo);

// var foo = function() 
// {
//     return "Hello!";
// };

// console.log(foo());

//example 7
// function hoist() 
// {
//     console.log(a);
//     var a = 10;
//     var a = 30;
//     console.log(a);
// }

// var a = 40;
// hoist();
// console.log(a);

//undefined
//30
//40

//example 8
// for (let i = 0; i < 3; i++)// i = 0, i = 1, i = 2
// {
//     setTimeout(() => console.log(i), 1000);
// }

// for (var i = 0; i < 3; i++)// i = 0, 1, 2, 3
// {
//     setTimeout(() => console.log(i), 1000);
// }