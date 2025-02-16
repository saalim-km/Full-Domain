// import { error, timeStamp } from "console";
// import { fstat, link } from "fs";
// import { execPath } from "process";

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
    
//     append(data) {
//         const newNode = new Node(data);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//             return;
//         }
        
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.size++;
//     }
    
//     prepend(data) {
//         const newNode = new Node(data);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//             return;
//         }

//         newNode.next = this.head;
//         this.head = newNode;
//         this.size++;
//     }
    

//     reverse() {
//         if(!this.head) return;

//         let prev = null;
//         let next = null;
//         let curr = this.head;

//         while(curr) {
//             next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }

//         this.head = prev;
//     }

//     removeEven() {

//         while(this.head && this.head.data % 2 == 0) {
//             this.head = this.head.next;
//         }

//         let prev = null;
//         let curr = this.head;
//         while(curr) {
//             if(curr.data % 2 === 0) {
//                 prev.next = curr.next;
//                 this.size--;
//             }
//             prev = curr;
//             curr = curr.next;
//         }
//     }


//     print() {
//         if(!this.head) {
//             return null;
//         }
        
//         let curr = this.head;
//         while(curr) {
//             console.log(curr.data)
//             curr = curr.next;
//         }
//     }

//     removeOdd() {
//         while(this.head && this.head.data % 2 !== 0) {
//             this.head = this.head.next;
//             this.size--;
//         }

//         let prev = null;
//         let curr = this.head;
        
//         while(curr) {
//             if(curr.data % 2 !== 0) {
//                 prev.next = curr.next;
//                 this.size--;
//             }
//             prev = curr;
//             curr = curr.next;
//         }
//     }

//     removeDuplicate() {
//         let seen = new Set();
//         let prev = null;
//         let curr = this.head;

//         while(curr) {

//             if(seen.has(curr.data)) {
//                 prev.next = curr.next;
//                 this.size--;
//             }else{
//                 seen.add(curr.data);
//             }

//             prev = curr;
//             curr = curr.next;
//         }
//     }

//     addAt(index,value) {
//         const newNode = new Node(value);

//         if(!this.head) return null;

//         if(index > this.size) {
//             throw Error("index is greater than linkedlist size");
//         }

//         if(index == 1) {
//             newNode.next = this.head;
//             this.head = newNode;
//             return;
//         }

//         let prev = null;
//         let curr = this.head;

//         for(let i=1;i<index;i++) {
//             prev = curr;
//             curr = curr.next;
//         }
//         prev.next = newNode;
//         newNode.next = curr;
//     }
//     removeMiddle() {
//         if(!this.head) return null;

//         let prev = null;
//         let slow = this.head;
//         let fast = this.head;

//         while(fast && fast.next) {
//             prev = slow;
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return prev.next = slow.next;
//     }
// }

// const linkedlist = new LinkedList();
// linkedlist.append(10)
// linkedlist.append(23)
// linkedlist.append(30)
// linkedlist.prepend(23)
// linkedlist.prepend(29)
// linkedlist.prepend(29)
// linkedlist.prepend(21)
// linkedlist.prepend(21)
// linkedlist.append(50)
// linkedlist.reverse()
// linkedlist.removeEven()
// linkedlist.removeDuplicate()
// linkedlist.addAt(2,50)
// linkedlist.addAt(2,55)
// console.log(linkedlist.removeMiddle())
// linkedlist.print();





// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false;
//         for(let i=0;i<arr.length;i++) {
//             if(arr[i] > arr[i+1]) {
//                 [arr[i] , arr[i+1]] = [arr[i+1],arr[i]];
//                 swapped = true;
//             }
//         }
//     }while(swapped);

//     return arr;
// }

// console.log(bubbleSort([5,4,3,2,1]))


// function mergeSort(arr) {
//     if(arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left,right);
// }

// function merge(left,right) {
//     let sortedArr = [];
//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             sortedArr.push(left.shift());
//         }else {
//             sortedArr.push(right.shift());
//         }
//     }

//     return [...sortedArr,...left,...right]
// }

// console.log(mergeSort([3,2,1]))



// function quickSort(arr) {
//     if(arr.length <= 1) return arr;

//     let p = arr[arr.length-1];
//     let left = [];
//     let right = [];

//     for(let i=0;i<arr.length-1;i++) {
//         if(arr[i] < p) {
//             left.push(arr[i])
//         }else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left),p,...quickSort(right)]
// }
// console.log(quickSort([3,2,1]))


// function selectionSort(arr) {
//     for(let i=0;i<arr.length;i++) {
//         let min = i;

//         for(let j=i+1;j<arr.length;j++) {
//             if(arr[j] < arr[min]) {
//                 min = j;
//             }
//         }

//         if(min !== i) {
//             [arr[min], arr[i]] = [arr[i] , arr[min]]
//         }
//     }

//     return arr;
// }
// console.log(selectionSort([3,2,1]))


// function insertionSort(arr) {
//     for(let i=1;i<arr.length;i++) {
//         let key = arr[i];
//         let j = i-1;

//         while(j >= 0 && arr[j] > key) {
//             arr[j+1] = arr[j];
//             j--;
//         }

//         arr[j+1] = key;
//     }

//     return arr;
// }
// console.log(insertionSort([3,2,1]))



// function factorial(n) {
//     if(n <= 1) return 1;

//     return n * factorial(n-1)
// }
// console.log(factorial(5))


// function fibonacci(n) {
//     if(n === 0) {
//         return 0;
//     }

//     if(n === 1) {
//         return 1;
//     }

//     return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log(fibonacci(3))


// function sumOfArr(arr,result=0,index=0) {
//     if(index === arr.length) return result;

//     result += arr[index];

//     return sumOfArr(arr,result,index+1)
// }

// console.log(sumOfArr([1,2,3,4,5]))


// function sumOfNum(n,result=0) {
//     if(n === 0) return result;

//     result += Math.floor(n % 10);

//     return sumOfNum(n / 10,result);
// }
// console.log(sumOfNum(123))


// function reverseString(str) {
//     if(str.length <= 1) return str;


//     return str[str.length-1] + reverseString(str.slice(0,-1))
// }
// console.log(reverseString("hi"))

// function isPalindrome(str,start=0,end=str.length-1) {
//     if(start > end) {
//         return true;
//     }

//     if(str[start] !== str[end]) {
//         return false;
//     }

//     return isPalindrome(str,start+1,end-1)
// }
// console.log(isPalindrome("madam"))



// function binarySearch(arr,target) {
//     let start = 0;
//     let end = arr.length-1;

//     while(start <= end) {
//         let mid = Math.floor((start+end)/2);

//         if(arr[mid]===target) {
//             return mid;
//         }

//         if(target < arr[mid]) {
//             end--
//         }else {
//             start++;
//         }
//     }


//     return -1;
// }
// console.log(binarySearch([1,2,3,4],1))



// function binaryRecursive(arr,target,start=0,end=arr.length-1) {
//     if(start >= end) {
//         return -1;
//     }

//     let mid = Math.floor((start+end)/2);
//     if(arr[mid] == target) {
//         return mid;
//     }

//     if(target < arr[mid]) {
//         return binaryRecursive(arr,target,start,end-1);
//     }else {
//         return binaryRecursive(arr,target,start+1,end);
//     }
// }

// console.log(binaryRecursive([1,2,3,4,5],3))



// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex) {
//         if(!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = [];
//         }
//     }

//     addEdge(v1,v2) {
//         if(!this.adjacencyList[v1]) {
//             this.adjacencyList[v1] = [];
//         }
//         if(!this.adjacencyList[v2]) {
//             this.adjacencyList[v2] = [];
//         }

//         if(!this.adjacencyList[v1].includes(v2)) {
//             this.adjacencyList[v1].push(v2);
//         }
//         if(!this.adjacencyList[v2].includes(v1)) {
//             this.adjacencyList[v2].push(v1);
//         }
//     }

//     bfs(start) {
//         let visitedVertices = new Set();
//         let queue = [start];
//         let result = [];

//         while(queue.length) {
//             let vertex = queue.shift();

//             if(!visitedVertices.has(vertex)) {
//                 result.push(vertex);
//                 visitedVertices.add(vertex);

//                 this.adjacencyList[vertex].forEach((v)=> {
//                     if(!visitedVertices.has(v)) {
//                         queue.push(v);
//                     }
//                 })
//             }
//         }

//         return result;
//     }

//     dfs(start) {
//         let visitedVertices = new Set();
//         let stack = [start];
//         let result = [];

//         while(stack.length) {
//             let vertex = stack.pop();

//             if(!visitedVertices.has(vertex)) {
//                 result.push(vertex);
//                 visitedVertices.add(vertex);

//                 this.adjacencyList[vertex].forEach((v)=> {
//                     if(!visitedVertices.has(v)) {
//                         stack.push(v);
//                     }
//                 })
//             }
//         }

//         return result;
//     }
// }

// const graph = new Graph()
// graph.addVertex("a")
// graph.addVertex("b");
// graph.addVertex("c")
// graph.addVertex("d")

// graph.addEdge('a','b')
// graph.addEdge('a','c')
// graph.addEdge('d','a')
// graph.addEdge('b','c')
// graph.addEdge('d','b')
// console.log(graph.bfs('a'))
// console.log(graph.dfs('a'))

// console.log(graph)