// singleton
//Object.create

// object literal

const mySym = Symbol("key1") 
const JSUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "myKey1",
    age: 22,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);

// JSUser.email = "hitesh@chatgpt"
// Object.freeze(JSUser)
// JSUser.email = "hitesh@microsoft"
// console.log(JSUser);


JSUser.greeting = function(){
    console.log("Hello JS user");
    
}
console.log(JSUser.greeting);

JSUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());


