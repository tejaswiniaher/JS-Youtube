const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'

}


// print keys
// for (const key in myObject) {
//     console.log(key);

// }

// print values
// for (const key in myObject) {  
//     console.log(myObject[key]);
// }


//print key and value

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key);

}

for (const key in programming) {
    console.log(programming[key]);

}