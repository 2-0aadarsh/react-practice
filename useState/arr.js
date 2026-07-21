// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


// console.log(arr.length)
// console.log(arr[2])
// console.log(arr.at(-2))

// const newArr = arr;

// const newArr2 = arr.map((item)=> item);
// const newArr3 = structuredClone(arr);

// console.log(arr === newArr2);



// // arr.unshift(7103);
// delete arr[3];
// console.log(arr[3]);


// const brr = [1,2,3,undefined,4,5,6,undefined,7,8,9,10];
// console.log(brr[3])

// const arr = [1,2,3,4,5];
// console.log(...arr);
// console.log(arr, ...arr);

// const date = new Date(2113222245454545);
// const date = Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getTime());
// console.log(date.toString());

// const date1 = new Date();
// const date2 = new Date("2028-11-27");
// 
// console.log(date2-date1);

/*
    custom timer
*/

// setInterval(() => {
//     const date1 = new Date();
//     const date2 = new Date("2027-02-02T00:00:00");
    
//     const difference = date2-date1;

//     const NoOfDaysLeft = Math.floor(difference/(1000*60*60*24));
//     const NoOfHoursLeft = Math.floor((difference/(1000*60*60))%24);
//     const NoOfMinutesLeft = Math.floor((difference/(1000*60))%60);
//     const NoOfSecondsLeft = Math.floor((difference/1000)%60);

//     console.log(NoOfDaysLeft, NoOfHoursLeft, NoOfMinutesLeft, NoOfSecondsLeft);
// }, 1000)


// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//     undefined: "undefined value hai",
//     null : "null value hai"
// }

// const arr = {
//     0 : 10,
//     1 : 20,
//     2 : 30,
// }
// console.log(obj.undefined);
// console.log(obj.null);
// console.log(obj);

// class Person {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
// }

// let person1 = new Person("Aadarsh", 22, "Delhi");
// console.log(typeof Person);
// console.log(typeof person1);

// console.log("Hello world 1");
// console.log("Hello world 2");

// setTimeout(() => {
//     console.log("Hello world from setTimeout");
// }, 1000);
// for(let i=0; i<4; i++) {
//     // some heavy task
//     console.log(i);
//     i=4;
// }
// console.log("Hello world 3");
// console.log("Hello world 4");
// console.log("Hello world 5");


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// setInterval(() => {
//     console.log("Hello world from setInterval");
// }, 100);
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)
// console.log(12)
// console.log(13)
// console.log(14)
// console.log(15)
// console.log(16)
// console.log(17)
// console.log(18)

// setInterval(() => console.log("A"), 1000);

// setTimeout(() => {
// //   while(true) {}
//   console.log("B")
// }, 3000);

// console.log("hello 1");
// console.log("hello 2");
// // const posts = fetch("https://jsonplaceholder.typicode.com/posts")
// //                 .then((post) => console.log("post fetched successfully :", post))
// //                 .catch(() => console.log("Error occurred while fetching post"));

// const fetchData = async () => {
//     try {
//         const post = await fetch("https://jsonplaceholder.typicode.com/posts");
//         console.log("post fetched successfully :", post);
//     } catch (error) {
//         console.log("Error occurred while fetching post", error);
//     }
// }

// fetchData();

// console.log("Hello 3")


// const promise = new Promise((resolve, reject) => {
    // resolve("Promise resolved successfully");
    // reject("Promise rejected successfully");
// })

// promise
    // .then(res => console.log(res))
    // .catch(err => console.error(err))


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => { 
//         resolve("Data fetched successfully");
//     }, 10000)
// })

// promise
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("C");
// });

// console.log("D");



// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("User fetched")
//     }, 1000)
// })
// .then(res => console.log(res))
// .catch(err => console.error(err))

// console.log("Hello 1")
// Promise.resolve(2)
// .then(num => num * 2)
// .then(num => num * 3)
// .then(num => console.log(num));
// console.log("Hello 2")


// import fs from "fs";
// console.log("I am a arr.js")
// require("./webWorker")

console.time()
console.timeEnd();