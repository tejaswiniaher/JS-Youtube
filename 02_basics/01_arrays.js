// array

const myArr = [0,1, 2, 3, 4, 5];
const myheros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);
// console.log(myArr2[1]);


// Array method
// myArr.push(6);
// myArr.push(7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

myArr.unshift(9);//Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(myArr);
myArr.shift();
//Removes the first element from an array and returns it. 
//If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice , splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);




