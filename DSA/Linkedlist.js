// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Linkedlist {
//     constructor() {
//         this.head = null;
//         this.length=0;
//     }
//     append(data) {
//         const newNode = new Node(data);
//         if(!this.head) return this.head = newNode;

//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//     }
//     prepend(data) {
//         const newNode = new Node(data);
//         if(!this.head) return this.head = newNode;

//         let curr = this.head;
//         while(curr.next) {
//             curr = curr.next;
//         }
//         curr.next = newNode;
//         this.length++;
//     }
//     print() {
//         if(!this.head) return;

//         let curr = this.head;
//         while(curr) {
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }
//     size() {
//         return this.length;
//     }
//     addAt(index , data) {
//         const length = this.size();
//         const newNode = new Node(data);

//         if(index < 0 || index > length) {
//             console.log('index not found');
//             return;
//         }

//         if(index == 1) {
//             newNode.next = this.head;
//             this.head = newNode;
//             return;
//         }

//         let prev = null;
//         let curr = this.head;

//         for(let i=1;i<=length;i++) {
//             if(i==index) {
//                 prev.next = newNode;
//                 newNode.next = curr;
//             }
//             prev = curr;
//             curr = curr.next;
//         }
//         this.length++;
//     }
//     reverse() {
//         if(!this.head) return;
//         let prev = null;
//         let curr = this.head;
//         let next = null;

//         while(curr) {
//             next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//     }
//     removeFirst() {
//         if(!this.head) return;

//         this.head = this.head.next;
//         this.length--;
//     }
//     removeLast() {
//         if(!this.head) return;

//         let curr = this.head;
//         let prev = null;
//         while(curr.next) {
//             prev = curr;
//             curr = curr.next;
//         }
//         prev.next = null;
//         this.length--;
//     }
//     removeByValue(target) {
//         if(!this.head) return;

//         if(this.head.data === target) {
//             this.head = this.head.next;
//             this.length--;
//             return;
//         }

//         let curr = this.head;
//         let prev = null;
//         while(curr) {
//             if(curr.data == target) {
//                 prev.next = curr.next;
//                 this.length--;
//                 return;
//             }
//             prev = curr;
//             curr = curr.next;
//         }
//     }

//     removeOddNumbers() {
//         if(!this.head) return;

//         while(this.head && this.head.data % 2 !==0 ){
//             this.head = this.head.next;
//             this.length--
//         }

//         let curr = this.head;
//         let prev = null;
//         while(curr) {
//             if(curr.data % 2 !== 0) {
//                 prev.next = curr.next;
//                 this.length--;
//             }else {
//                 prev = curr;
//             }
//             curr = curr.next;
//         }
//     }

//     removeAllEvenNumbers() {
//         while(this.head && this.head.data % 2 == 0) {
//             this.head = this.head.next;
//             this.length--;
//         }

//         let curr = this.head;
//         let prev = null;
//         while(curr) {
//             if(curr.data % 2 == 0) {
//                 prev.next = curr.next;
//                 this.length--;
//             }else {
//                 prev = curr;
//             }
//             curr = curr.next;
//         }
//     }

//     findMiddle() {
//         if(!this.head) return;

//         let slow = this.head;
//         let fast = this.head;
//         let prev = null;

//         while(fast && fast.next) {
//             prev = slow;
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return prev.data;
//     }

//     removeMiddle() {
//         if(!this.head) return;

//         let prev = null;
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next) {
//             prev = slow;
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         prev.next = slow.next;
//         this.length--;
//     }

//     removeDuplicates() {
//         if(!this.head) return;

//         let curr = this.head;
//         let seen = new Set();
//         let prev = null;
//         while(curr) {
//             if(seen.has(curr.data)) {
//                 prev.next = curr.next;
//                 this.length--;
//             }else {
//                 seen.add(curr.data);
//                 prev = curr;
//             }
//             curr = curr.next;
//         }
//     }
//     clear() {
//         this.head = null;
//         this.length = 0;
//     }
// }


// const linkedlist = new Linkedlist();
// linkedlist.append(10);
// linkedlist.append(30);
// linkedlist.append(40);
// linkedlist.append(13);
// linkedlist.append(65);
// linkedlist.append(18);
// linkedlist.append(18);
// linkedlist.append(18);
// // linkedlist.removeFirst();
// // linkedlist.removeFirst();
// // linkedlist.removeLast()
// linkedlist.removeDuplicates()
// console.log(linkedlist.findMiddle())
// linkedlist.removeOddNumbers()
// linkedlist.reverse()
// console.log(linkedlist)



// linkedlist.print()




// let x = {
//     a : {
//         b : 2
//     }
// }


// let y = x;

// x = 1;

// let z = y.a;
// y = "mozilla"
// z = null;

// console.log(y)
// console.log(z)