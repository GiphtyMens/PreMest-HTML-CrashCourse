
let firstName = "Gifty";
let lastName = "Mensah";
let age = 32;

console.log(firstName);
console.log(lastName);
console.log(age);

console.log("My name is " + firstName + " " + lastName +" I am ten years old"  );

console.log(`my name is ${ firstName} ${lastName}. i am ${age} years old.`);

// declaring an Array
let fruits = ["Mango", "Apple","Orange","Pineaple", "Pawpaw" , "Banana"];
console.log(fruits);

// length
console.log(fruits.length);

// selecting 3 items from an Array
console.log(fruits [2]);

// push adds to the end of an array
console.log(fruits.push ("Groundnut")),

// pop removes an item from the end of an array
console.log(fruits.pop());

// unshift add items to the start of an Array
console.log(fruits.unshift ("Grape"));

// shift remove items from the start of an Array
console.log(fruits.shift());

// includes this response with true or false
console.log(fruits.includes("Sugarcane"));
console.log(fruits.includes("Pawpaw"));

// join links items together with symbol provided
console.log(fruits.join("+"));
console.log(fruits);




