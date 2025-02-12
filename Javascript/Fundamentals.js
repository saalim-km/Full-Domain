//? variables
// const x = 10;
// x = 30;
// console.log(x)

//? loops
// let x = 0;
// for(let i=1;i<=5;i++) console.log(i)
// while(x!==5){
//     console.log(x);
//     x++;
// }
// do console.log(x++); while(x!==5)

//? functions
//? function decleration

// function add(a=5,b=4) {
//     console.log(a+b);
// }
// add();

//? funciton expression
// const sub = function(a=10,b=5){
//     console.log(a-b);
// }
// sub();

//? Arrow function 
// const  mul = (a=1,b=2)=> a*b;
// console.log(mul())


//? ES6
//? spread & rest
// const obj = {
//     name : "salim",
//     age : 18,
//     place : "kochi"
// }

// const {name , age,...userData} = obj;
// console.log(userData)


//? Asynchronus
// setTimeout(()=> console.log('After 1 s'),1000);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((res)=> res.json())
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err));

// async function fetchData() {
//     try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data = await res.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchData();

//? practice set fundamentals
// console.log(1+'2'+3)
// console.log(1+2+'3')

// const obj = {name : "salim"};
// obj.age = 18
// console.log(obj)

// function reverseString(str) {
//     let start = 0;
//     let end = str.length-1;
//     let arrStr = [...str];
//     // console.log(arrStr)

//     while(start < end) {
//         [arrStr[start] , arrStr[end]] = [arrStr[end] , arrStr[start]];
//         start++;
//         end--;
//     }
//     return arrStr.join("");
// }
// console.log(reverseString("hello"))

// function findMax(arr){
//     let max = -Infinity;
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i]> max) max = arr[i];
//     }
//     return max;
// }
// console.log(findMax([1,2,3,4,1000]))



// ? promise combinators
// Promise.all([
//     Promise.resolve("1 completed"),
//     Promise.resolve("2 completed"),
//     Promise.reject("3 rejected")
// ])
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error));

// Promise.allSettled([
//     Promise.resolve("taks 1 completed"),
//     Promise.reject("task 2 incomplete"),
//     Promise.resolve("task 3 complete")
// ]).then((data)=> console.log(data))
// .catch((err)=> console.log(err))


// Promise.race([
//     new Promise((resolve)=>
//         setTimeout(()=> resolve("task 1 completed"),300)
//     ),
//     new Promise((res, rej)=> 
//         setTimeout(()=>rej("taask 2 incomplete"),500)
//     )
// ]).then((data)=> console.log(data))
// .catch((err)=> console.log(err))

Promise.any([
    Promise.reject("task 1 complete"),
    Promise.reject("task 2 incomplete")
])
.then((data)=> console.log(data))
.catch((err)=> console.log(err))