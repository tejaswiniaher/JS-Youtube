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

console.log(loginUserMessage("Tejaswini"));
console.log(loginUserMessage());  // without argument it return "undefined"