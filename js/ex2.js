/* Homework 5 
Exercise 2 JavaScript code
*/
console.log ("Mihir's output from Homework 5 Exercise 2");
const numbers = [1,2,3,4,5,6,7,8,9,10];
// Using Filter
const OddNumbers = numbers.filter(x => x % 2 !== 0);
console.log(OddNumbers);

// Using Filter
const divisibleby2or5 = numbers.filter (x=> x % 2 == 0 || x % 5 == 0);
console.log(divisibleby2or5);

// Using Filter and map
const divisibleby3squared = numbers.filter (x=> x % 3 == 0).map (x=> x ** 2);
console.log(divisibleby3squared);

// Using filter,map and reduce
const divibleby5 = numbers.filter (x=> x % 5 == 0).map (x=> x **2).reduce ((acc,value) => acc + value, 0);
console.log(divibleby5);