// if
const isUserloggedIn = true
// if(isUserloggedIn){

// }

if(2 === "2"){
    console.log("executed");
    
}

// 2<=2
// <, >, <=, >=, ==, !=, ====(this also check type), !==

// const temp = 40
// if(temp < 50){
//     console.log("less than 50");
    
// }
// else{
//     console.log("greater than 50");
    
// }


// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);


// const balance = 1000

// // if(balance > 500) console.log("test"), console.log("test"); // this is not best  practice

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if(balance < 750){
//     console.log("less than 750");
    
// }
// else if(balance < 900){
//     console.log("less than 900");
    
// }else{
//     console.log("less than 1200");
    
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}