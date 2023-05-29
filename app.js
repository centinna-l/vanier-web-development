// const numbers = [1, -2, 3, 4, -10, 0];

// const filtetedItems = numbers.filter((n) => n > 0);
// const items =
//   "<ul>\n" +
//   filtetedItems.map((n) => "<li>" + n + "</li>\n").join("") +
//   "</ul>";

// const obj = filtetedItems.map((n) => {
//   return { value: n };
// });

// // Both Filter and map return an array, they do not modify the orignal array.
// // they create a new one and return the new array.

// // console.log(obj);

// // Reduce functions

// const data = [
//   { name: "Jerry", price: 250 },
//   { name: "Joy", price: 160 },
//   { name: "Aryan", price: 120 },
//   { name: "Kelly", price: 150 },
// ];

// // let totalPrice = 0;
// // data.forEach((item) => {
// //   totalPrice += item.price;
// // });
// // console.log(totalPrice);

// // Now using reduce

// const totalPrice = data.reduce((total, item) => {
//   return total + item.price;
// }, 0);

// // console.log(totalPrice);

// const people = [
//   { name: "Jerry", age: 24 },
//   { name: "Joy", age: 56 },
//   { name: "Aryan", age: 26 },
//   { name: "Kelly", age: 30 },
// ];

// const groupByAge = people.reduce((group, person) => {
//   const age = person.age;
//   //   return group[age] == null ? (group[age] = []) : group[age].push(person.name);
//   if (group[age] == undefined) group[age] = [];
//   group[age].push(person.name);
//   return group;
// }, {});

// console.log(groupByAge);

// Given an array of numbers, double each number and return the new array.
const array = [2, 3, 4, 5, 6, 7];

console.log(array.map((n) => n * 2));

// Given an array of strings, convert all strings to uppercase and return the new array.

const stringArray = ["Jerry", "Joy", "Jerry"];
console.log(stringArray.map((n) => n.toUpperCase()));

// Given an array of objects representing books, filter out the books that have a price higher than $50.
const books = [
  { title: "Book 1", price: 20 },
  { title: "Book 2", price: 45 },
  { title: "Book 3", price: 60 },
  { title: "Book 4", price: 30 },
];
console.log(books.filter((book) => book.price > 50));

// Given an array of numbers, calculate the sum of all the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  numbers.reduce((total, number) => {
    if (number % 2 == 0) total += number;
    return total;
  }, 0)
);

// Given an array of strings, find the longest word.
const strings = ["apple", "banana", "orange", "grapefruit"];

console.log(
  strings.reduce((longest, word) => {
    if (word.length > longest.length) longest = word;
    return longest;
  }, "")
);

// Given an array of numbers, calculate the product of all the numbers.

const numbers1 = [1, 2, 3, 4, 5];

console.log(
  numbers1.reduce((product, number) => {
    return product * number;
  }, 1)
);
