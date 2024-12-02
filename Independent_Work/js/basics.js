// console.log("Hello world");
//This is a comment

//var, let, const
// if (true) 
// {
//     let x = 5;
//     x = x + 1;
//     console.log(x);
// }

// let num = 5,
//     emptyObj = null,
//     notDefined,
//     myBool = true,
//     myText = "Hello World!",
//     myNewText = 'Today is "Monday"',
//     sym = Symbol(5);

// console.log(num);
// console.log(emptyObj);
// console.log(notDefined); 
// console.log(myBool); 
// console.log(myText); 
// console.log(myNewText);
// console.log(sym);

// const preson = {
//     firstName: "Alex",
//     secondName: "Ilianov",
//     lastName: "Iliev"
// };

// const name1 = 'Lev', time = 'today';
// const templStr = `Hello ${name1}, how are you ${time}?`;

// var voteable = (age < 18) ? "Too young":"Old enough";

// let logged = new Boolean(false);
// if (logged) 
// {
//     alert("Отключи сейфа");
// } 

// else 
// {
//     alert("Грешна парола");
// }

// var i = 1;
// while(i <= 5) 
// {
//     console.log("Hello FMI");
//     i++;
// }

// An object with some properties
// var person = {"name": "John", "surname": "Doe", "age": "36"};


// // Loop through all the properties in the object
// for(var prop in person) {
//     console.log(prop + "=" + person[prop]);
// }

// An array with some elements
// var hellos = ["Hello", "Salut", "Hola", "Ciao", "Namaste"];
// // Loop through all the elements in the array
// for(var i in hellos) {
//     console.log(hellos[i]);
// }

// Iterating over array
// let letters = ["a", "b", "c", "d", "e", "f"];
// for(let letter of letters) {
//     console.log(letter); // a,b,c,d,e,f
// }


// Iterating over string
// let greet = "Hello World!";
// for(let character of greet) {
//     console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
// }

// console.log(3 == "4"); // 3 == toNumber("4")
// console.log("3" == 4); // toNumber("3") == 4
// console.log(true == 3); // toNumber(true) == 3
// const obj = new String("0");
// console.log(3 == obj); // 3 == toPrimitive(obj)

// x = "The answer is " + 42; // "The answer is 42"
// y = 42 + " is the answer"; // "42 is the answer"
// z = "37" + 7; // "377"
// "37" - 7; // 30
// "37" * 7; // 259

// "1.1" + "1.1" // '1.11.1'
// (+"1.1") + (+"1.1"); // 2.2

// var obj = new Object();
// obj.prop = true;

// var person = 
// {
//     isHuman: true
// };

// var me = Object.create(person);
// var nullObject = new Object(null);

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);
// console.log(obj.count);
// // Expected output: 42
// console.log(obj.result);
// // Expected output: true

// const computer = {
//     "browsers": {
//         "firefox"
//     },
//     "applications": {
//         "calculator": {
//             "name": "Calculator"
//         }
//     }
// }