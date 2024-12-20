//  Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3
console.log(typeof score)
// const isLoggedIn = false 
// const outsideTemp = null
// let userEmail;

// const id =Symbol('123')
// const anotherId =Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 111111114444444444555555555n
// console.log(bigNumber);


// Javascipt is a dynamically typed language.

// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "mandj", "lolu"];
console.log(typeof heros);

let myObj = {
    name: "ritik",
    age: 23,
}
console.log(typeof myObj);

const myFunction = function () {
    console.log("hello world");
}


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = " Ritik Sharma "

let anothername = myYoutubename
anothername = "travel.com"

 console.log(anothername);
 console.log(myYoutubename);
 
let userOne = {
    email: "user@hoo.com",
    id: 22,
}

let usertwo = userOne
usertwo.email = "youtube@"

console.log(userOne.email);
console.log(usertwo.email);
