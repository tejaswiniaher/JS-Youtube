const  user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // this return the empty object=>{} becoz here not any object is defined globally
// In browser, global object is "window"

// function chai(){
//     let username = "hitesh"
//     console.log(this);  // this cannot used in function 
    
// }
// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);  // this cannot used in function 

// }
// chai()



// Arrow function
const chai = () => {
    let username = "hitesh"
    // console.log(this.username);  // this cannot used in function 
    // console.log(this);
    
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4));
