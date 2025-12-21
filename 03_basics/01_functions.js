function sayMyName(){
    console.log("T");
    console.log("E");
    console.log("J");
    console.log("A");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log("Result: ", result);

// addTwoNumbers(3, "4");
// addTwoNumbers(3, null);


function loginUserMessage(username = "sam"){ // we can also pass default name
    if(username === undefined){  // if(!username){}
        console.log("Please enter username");
        return
        

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Tejaswini"));
// console.log(loginUserMessage());  // without argument it return "undefined"


// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 300, 400, 600));



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 600));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({    // here object id directly pass
    username: "hitesh",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
