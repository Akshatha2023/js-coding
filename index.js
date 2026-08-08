// console.log("Hello Everyone");

// let x = 3;
// let y = 2;
// let sum = x + y;
// console.log(sum);

// -- if-else --

// if (sum == 5) {
//   console.log("sum is 5");
// } else {
//   console.log("sum is false");
// }

// -- ternary operator --

// let text = sum == 5 ? "Its true" : "Its false";
// console.log(text);

// -- switch --

// let date = new Date().getDay();
// console.log(date);
// let day;
// switch (date) {
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "wednesday";
//     break;
//   case 4:
//     day = "thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
// default:
//   day="Anyday"
// }
// console.log(day);

// LOOPS

// for Loops

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const cars = ["BMW", "Benz", "Audi"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// while loop
// let i = 1; //this will run infinite loops
// while (i < 10) {
//   console.log(i);
// }

// String template
// string interpolation
// let name = "Akshatha";
// let text = `My name is ${name}`;
// let text1 = "my name is" + " " + name;

// console.log(text1);

// String Methods

// 1; String length()
// let name = "Akshatha";
// console.log(name.length);

// 2.Extracting string character
// let name = "aksha😀";
// console.log(name.at(2));
// console.log(name.charAt(2));

// .at() supports negative indexes:
// But .charAt() does not support negative indexes: it starts from last = -1

// console.log(name.charCodeAt(5)); gives the UTF-16 code unit (0–65535)
// console.log(name.codePointAt(5)); gives the full Unicode code point (up to 0x10FFFF)

// 3.Concating Strings
// let name = "Akshatha";
// let initial = "Bellad";
// console.log(name + " " + initial);

// Instead of above we can write below

// let fullName = name.concat(" ", initial);
// console.log(fullName);

// 4.Extracting string parts
//  slice(start, end)
// substring(start, end)
// substr(start, length)

// * slice
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);  //Banana
// let part = text.slice(7);  //Banana, Kiwi
// let part = text.slice(-12); //Banana, Kiwi
// let part = text.slice(-12, -6); //Banana,

// * substring is similar to string but start or end values less than 0 is treated as 0;
// let part = text.substring(7, 13); /Banana
// let part = text.substring(7); /Banana, Kiwi
// let part = text.substring(-1, 5); /Apple

// substr() is similar to slice().
// let part = text.substr(7, 6); /Banana
// let part = text.substr(7); /Banana, Kiwi
// let part = str.substr(-4); /Kiwi

// let text1 = text.toUpperCase();
// console.log(text1); /APPLE, BANANA, KIWI

// let text2 = text.toLowerCase();
// console.log(text2); /apple, banana, kiwi

// 5 . trim() - removes white space from string
// trimStart();
// trimEnd()
// let text = "  HELLO  ";
// let trimmed = text.trim();
// console.log(trimmed); /HELLO/ -trims at both start and end

// let trimmed1 = text.trimStart();/HELLO  / -trims at start
// let trimmed2 = text.trimEnd();/  HELLO/ -trims at end

// .... ...still lots of methods to practiced continur w3 schools from above

// FUNCTIONS

// Common function

// function sayHello() {
//   return "Hello world";
// }
// sayHello(); /It returns string but not displayed untill u save it in variable
// console(sayHello) / without () it returns function itself
// const res = sayHello();
// console.log(res);

// function add(a, b) {
//   return a + b;
// }
// const addition = add(2, 3);
// console.log(addition);

// function add(x, y = 10) {
//   return x + y;
// }
// console.log(add(5,5)); /10
// console.log(add(5));; /15

// without return

// function multiply(a, b) {
//   let x = a + b;
//   console.log(x); /it returns 4
// }
// let res = multiply(2, 2);
// console.log(res); /It returns undefined bcoz return not there in function

// function checkAge(age) {
//   if (age < 18) {
//     return "too young"; /if age is less than 16 fun stops immediately here only
//   }
//   return "Access gyaranteed";
// }
// const res = checkAge(16);
// console.log(res);

// REST OPERATOR - The rest parameter (...) allows a function to treat an indefinite number of arguments as an array

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg; /for of loop
//   return sum;
// }
// const res = sum(23, 34, 42, 52, 3, 24, 54);
// console.log(res);

// FUNCTION EXPRESSION - storing function as a value
// const value = function multiply(a, b) {
//   return a * b;
// };
// console.log(value(3, 2));
// const value1 = function multiply() {
//   return "hi";
// };
// console.log(value1()); //returns hi
// console.log(value1); //returns entire funtion

// ANONYMOUS Function - fun without name
// const add = function (a, b) {
//   return a + b;
// };
// const res = add(2,2); /4

// fun can be used as value
// function run(fn) {
//   return fn();
// }

// const sayHello = function () {
//   return "Hello";
// };

// console.log(run(sayHello)); /Hello

// ARROW FUNCTIONS
// if no param or more than one param bracket() required ,even multiple return  statement requires {}
// const multiply = (a, b) => a * b; /4
// const multiply = (a, b) => {
//   return a * b;
// };
// console.log(multiply(2, 2)); /4

// const hello = (val) => val + "hello";
// console.log(hello("hi"));

// const calculate = (a, b) => {
//     let sum = a + b;
//     let multiply = a * b;

//     return [sum, multiply];
// };

// console.log(calculate(2, 3));

// ASYNC JS

// CALLBACKS

// Synchronous Callbacks - callbacks which executes immediatly

// function calculate(x, y, operation) {
//   return operation(x, y);
// }
// function add(x, y) {
//   return x + y;
// }
// const res = calculate(2, 3, add);
// console.log(res); /5

// Asynchronous Callbacks
// function myDisplay(val) {
//   console.log(val);
// }
// setTimeout(function () {
//   myDisplay("finsihed");
// }, 5000);

// function greet() {
//   console.log("Good morning");
// }
// setTimeout(greet, 5000); //pass function name not parenthsesis () in settimout when u dont have arguments

// callback is not aysnchronous, so we go for promises to perform async operations

// PROMISES;

const api = "https://jsonplaceholder.typicode.com/todos/d";
// const user = fetch(api);
// console.log(user);
// user.then(function (data) {
//   console.log(data);
// });

// async function getData() {
//   return "Namasteww";
// }
// const data = getData();
// data.then((res) => console.log(res));

// How we handle it in real
// async and await used to handle promise ,await can be used only in async function

// const p = new Promise((resolve, reject) => {
//   console.log("promise is ressolved");
// });

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise();

// ........
// handling promoise using async await and handling in  normal way

// handling promise normally

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("hI PROMISE IS REjected");
//   }, 5000);
// });

// async function handlePromises() {
//   p.then((reject) => console.log(reject));
//   console.log("HIIII");
// }
// handlePromises(); /first hiii will printed then reject will be printed in red after 10 sec

// we can even change it by putting resolve instead of reject and try
// resolve shows as normal log ,but reject will be showed like error

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("hI PROMISE IS REjected");
//   }, 5000);
// });

// async function handlePromises() {
//   const val = await p;
//   console.log("HIIII");
//   console.log(val);
// }
// handlePromises(); /it only printed error and not printed HI

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hI PROMISE IS REjected");
//   }, 5000);
// });

// async function handlePromises() {
//   const val = await p;
//   console.log("HIIII");
//   console.log(val);
// }
// handlePromises(); /Here after 5 sec both hi and error printed coz coz of await program waits

// scenario 1- if two promises first with 10 sec and second with 5 sec ,even first ressolved within 5 sec also it waits till first will finsih and all will print at once
// scenario 2- if two promises first with 5 sec and second with 10 sec , first ressolved within 5 sec also it prints ,then second will print

// REAL WORLD example for aysnc and await ,fetch
// fetch returns response object

// async function handlePromise() {
//   const data = await fetch(api);
//   console.log(data);
//   const datajson = await data.json();
//   console.log(datajson);
// }
// handlePromise();

// now we will see how we will handle errors ,in normal we were using .catch now we can use try catch
// async function handlePromise() {
//   try {
//     const data = await fetch(api);
//     const datajson = await data.json();
//     console.log(datajson.ok);
//   } catch (err) {
//     console.log(err);
//   }
// }

// cross checking
// async function handlePromise() {
//   try {
//     const response = await fetch(api);

//     console.log(response.status); // 404
//     console.log(response.ok); // false

//     const data = await response.text();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handlePromise();

// async / await is syntactic sugar over then catch, it acts same as then catch in background
