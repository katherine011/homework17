// 1. Arrow Function და ორი რიცხვის დაჯამება:
// დაწერე Arrow Function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. მაგალითად:

const add = (a, b) => a + b;

console.log(add(3, 5));

// 2. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ შორის სხვაობას. მაგალითად: 
// (function(a, b) { return a - b; })(8, 3);

const minus = (a, b) => (a-b);

console.log(minus(5, 3));

// 3. Arrow Function
// დაწერე რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის ლუწი (თუ ლუწია დააბრუნებს true). 
// მაგალითად: const isEven = (num) => num % 2 === 0;

const isEven = num => num % 2 === 0;

console.log(isEven(8)); 

// 4. Callback Function და გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც გამოიყენებს ამ რიცხვების 
// ნამრავლის დასათვლელად:

function sum(a, b, callback) {
    return callback(a * b);
  }

sum(5, 3, result => console.log(result)); 
  
// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის დადებითი. 
// მაგალითად: const isPositive = (num) => num > 0;

const isPositive = num => num > 0;

console.log(isPositive(-11));

// 6. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას.
//  მაგალითად: (function(n) { return n * 2; })(5);

const double = n => n * 2;

console.log(double(5));

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს ამ რიცხვის
//  გაორმაგებულ მნიშვნელობას:

function doubleN(number, callback) {
    return callback(number * 2);
}

doubleN(3, result => console.log(result));

// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, თუ ნაშთია რიცხვის გაყოფისას 3-ზე (მაგალითად, არის თუ არა 
// რიცხვი 3-ზე გაყოფადი). მაგალითად: const isDivisibleByThree = (num) => num % 3 === 0;

const isDivisibleByThree = (num) => num % 3 === 0;

console.log(isDivisibleByThree(9));

// 9. Callback Function და რიცხვის გადამოწმება:
// დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქციას, და გამოიძახებს Callback-ს, 
// რომ შეამოწმოს, არის თუ არა ეს რიცხვი ლუწი.

function oddNumber(number, callback) {
    return callback (number % 2 === 0);
}

oddNumber(4, result => console.log(result));

// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
// Arrow Function, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კუბს. მაგალითად: 
// const cube = (num) => num * num * num;

const cube = num => num * num * num;

console.log(cube(5));

// 11. Callback Function და მარტივი გამრავლება:
// დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც დააბრუნებს მათ ნამრავლს.

function namravli(a, b, callback) {
    return callback(a * b);
}

namravli(5, 3, result => console.log(result));

// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
// Arrow Function, რომელიც შეამოწმებს, არის თუ არა რიცხვი ნულზე მეტი. მაგალითად:
// const isGreaterThanZero = (num) => num > 0;

const isGreaterThanZero = num => num > 0;

console.log(isGreaterThanZero(3));

// 13. დაწერე Anonymous ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის ნახევარს. 
// მაგალითად: (function(n) { return n / 2; })(10);
// Callback Function და რიცხვის დამატება:

const halfNum = n => n / 2;

console.log(halfNum(10));

// 14. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და Callback ფუნქციას, რომელიც შეაჯამებს ამ რიცხვებს.

function Sum(a, b, callback) {
    return callback (a + b);
}

Sum(5, 3, result => console.log(result))

// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს. 
// მაგალითი: const square = (num) => num * num;

const square = num => num * num;

console.log(square(4));
