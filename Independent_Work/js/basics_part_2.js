// // function declaration
// function square(number) 
// {
//     return number * number;
// }

// // function expression
// const square = function (number) {
//     return number * number;
// };

// const sum = new Function('a', 'b', 'return a + b');
// console.log(sum(2, 6));

// function myConcat(separator)
// {
//     let result = ""; // initialize list

//     // iterate through arguments
//     for (let i = 1; i < arguments.length; i++)
//     {
//         result += arguments[i] + separator;
//     }

//     return result;
// }

// returns "red, orange, blue, "
// console.log(myConcat(", ", "red", "orange", "blue"));

// // returns "elephant; giraffe; lion; cheetah; "
// myConcat("; ", "elephant", "giraffe", "lion", "cheetah");


// const fruits1 = new Array("Apple", "Banana");
// console.log(fruits1[1]); // Banana

// const fruits2 = ["Apple", "Banana"];
// console.log(fruits2[1]); // Banana

// const fruits3 = new Array(2);
// console.log(fruits3[1]); // undefined
    
// const array = [1, 2, 3, 1];

// console.log(array.indexOf(1, 1));

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // with for loop
// for (let i = 0; i < items.length; i++) 
// {
//     copyItems.push(items[i]);
// }

// // with forEach
// items.forEach((item) => { copyItems.push(item); });

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);
// Expected output: 12

// function isBigEnough(value) 
// {
//     return value >= 10;
// }

// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// // filtered is [12, 130, 44]

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a, b) => { return b - a });
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

// const a = ["Wind", "Water", "Fire"];
// a.join(); // 'Wind,Water,Fire'
// a.join(", "); // 'Wind, Water, Fire'
// a.join(" + "); // 'Wind + Water + Fire'
// a.join(""); // 'WindWaterFire'

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// const animals = ['pigs', 'goats', 'sheep'];
// const count = animals.push('cows');
// console.log(count);
// // Expected output: 4
// console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows"]
// const count2 = animals.push('cats', 'dogs');
// console.log(count2);
// console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows", "cats", "dogs"]

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());
// // Expected output: "tomato"
// console.log(plants);
// // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]
// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// const array1 = [1, 4, 9, 16];
// // Pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]

// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
// (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sumWithInitial)

// const string1 = "A string primitive";
// const string2 = 'Also a string primitive';
// const string3 = `Yet another string primitive`;
// const string4 = new String("A String object");

// const areEqualInUpperCase = (str1, str2) => str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

// "cat".length // 3
// "cat".charAt(1); // gives value "a"
// "cat"[1]; // gives value "a"
// "cat".indexOf("c") // gives 0
// "cat" + "s" // "cats"

// const p = 'Hello World';
// const words = p.split(' ');
// console.log(words[1]); // "World"
// console.log(p.substring(1, 3)); // "el"
// const p2 = ' Hello World ';
// const greeting = " Hello world!    ";
// console.log(greeting.trim()); // "Hello world!"

// const date1 = new Date('December 17, 1995 03:24:00'); // Sun Dec 17 1995 03:24:00 GMT..
// const date2 = new Date(); // Current Date & Time as a Date object
// const date3 = Date(); // Current Date & Time as a string

// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); // Expected output: "2
// console.log(event.toLocaleString()); // Expected output: "20/12/2012, 05:00:00"

// var number1 = 123; // one-hundred twenty-three
// var number2 = 123.0; // same
// var number3 = Number("123"); // returns the number 123
// var number4 = Number("unicorn"); // NaN

// const x = 1;
// const y = -1;
// console.log(+x);
// // Expected output: 1
// console.log(+y);
// // Expected output: -1
// console.log(+'');
// // Expected output: 0
// console.log(+true);
// // Expected output: 1
// console.log(+false);
// // Expected output: 0
// console.log(+'hello');
// // Expected output: NaN

// parseInt("10");
// // Expected output: 10
// parseInt("10.00");
// // Expected output: 10
// parseInt("10.33");
// // Expected output: 10
// parseInt("34 45 66");
// // Expected output: 34
// parseInt(" 60 ");
// // Expected output: 60
// parseInt("40 years");
// // Expected output: 40
// console.log(parseFloat("40 was he"));
// // Expected output: NaN

// console.log(Math.ceil(.95)); // Expected output: 1
// console.log(Math.floor(5.95)); // Expected output: 5
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); // Expected output: 6
// console.log(Math.random()); // Expected output: a number from 0 to <1
// console.log(Math.max(1, 3, 2)); // Expected output: 3
// console.log(Math.min(2, 3, 1)); // Expected output: 1

// const str = 'Hello, world!';
// // търсене на дума в текст
// const pattern = /world/;
// console.log(pattern.test(str)); // true

// търсене на повторение на символ
// const pattern = /l+/;
// console.log(pattern.test(str)); // true

// // групиране на символи и търсене на повторение на групата
// const str = 'aaaabbbccc';
// const pattern = /(a+b+c+)/;
// console.log(pattern.test(str)); // true

// // търсене на повторение на конкретен символ
// const str = '1234567890';
// const pattern = /5{2}/;
// console.log(pattern.test(str)); // false

// търсене на символ, който е в определен интервал
// const str = 'abcdefg';
// // const pattern = /[d-g]/;
// // console.log(pattern.test(str)); // true

// // търсене на символ, който не е в определен интервал
// const pattern = /[^d-g]/;
// console.log(pattern.test(str)); // true

// // търсене на повторение на група от символи
// const str = 'aaaaaabbbbcccc';
// const pattern = /(a{5})(b{4})(c{4})/;
// console.log(pattern.test(str)); // true

// const regex = /l/g;
// const str = 'Hello world';
// const matches = str.match(regex);
// console.log(matches); // ['l', 'l']

// const regex = /hello/i;
// const str1 = 'Hello world';
// const str2 = 'HELLO there';
// console.log(regex.test(str1)); // true
// console.log(regex.test(str2)); // true

// const regex = /^hello/m;
// const str = 'hello\nworld';
// console.log(regex.test(str)); // true

// const regex = /hello/gim;
// console.log(regex.flags); // 'gim'

// const regex = /world/;
// const string = "Hello world!";
// const result = regex.test(string);
// console.log(result); // Output: true

// const regex = /world/;
// const string = "Hello world!";
// const result = regex.exec(string);
// console.log(result[0]); // Output: world

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const email = "example@email.com";
// if (emailRegex.test(email)) {
// console.log("Валиден имейл адрес");
// } else {
// console.log("Невалиден имейл адрес");
// }

// // Филтриране на списъци:
// // Филтриране на списък с имена, започващи с "А"
// const names = ["Анна", "Боби", "Александър", "Антония"];
// const filteredNames = names.filter(name => /^А/i.test(name));
// console.log(filteredNames); // ["Анна", "Александър", "Антония"]