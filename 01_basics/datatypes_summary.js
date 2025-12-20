//  Primitives

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Example:
const score = 100;
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

const bigNumber = 432554225543439475544344687873468944365n


// reference (Non premitive):
// Array, Object, Function

const heros = ["shaktima", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: "24",
}


const MyFunction = function() {
    console.log("Hello World!");    
}

// console.log(typeof bigNumber);
// console.log(typeof MyFunction);
// console.log(typeof anotherid);
// console.log(typeof heros);

// ********************************************************
// Stack(Premitives) && Heap(Non-Premitives)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ypl"
}

let userTwo = userOne

userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);