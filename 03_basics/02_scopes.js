
// var c = 30
let a = 500 // global scope

if(true){
    let a = 10  // block scope
    const b = 20
    // console.log("INNER: ", a);
    
    // var c = 30
}



// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two();
}
// one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);  // Error
    
}
// console.log(usename);  // Error 


// +++++++++++++++++++++++Interesting+++++++++++++++++++++

addone(5)  // can access it before defining
function addone(num){
    return num + 1
}

// addone(5)

addTwo(5)  // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
// addTwo(5)