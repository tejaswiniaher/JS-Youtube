// const tinderUser = new object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammmy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary",

        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// Array Object
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
    {
        id: 4,
        email: "h@gmail.com"
    },
]

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}

// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);


