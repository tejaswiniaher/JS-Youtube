// Dates => object type
// Months are start from the 0 th position in JS


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23);
// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// let myCreateDate = new Date("2023-01-14"); // "YYYY-MM-DD"
let myCreateDate = new Date("01-14-2023"); // "MM-DD-YYYY"
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()));  // convert miliseconds to seconds


let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})