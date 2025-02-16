// class Stack {
//     constructor() {
//         this.stack = [];
//     }

//     push(data) {
//         this.stack.push(data);
//     }

//     pop() {
//         if(this.isEmpty())return;
//         return this.stack.pop();
//     }

//     isEmpty() {
//         return this.stack.length === 0;
//     }
// }

//valid paranthesis
// function isValidPara(s) {
//     const stack = new Stack();
//     const matchingBrackets = {
//         ')' : '(' ,
//         '}' : '{',
//         ']' : '['
//     }

//     for(let char of s) {
//         if(char === '(' || char === "{" || char === "[") {
//             stack.push(char);
//         }else {
//             if(stack.isEmpty() || stack.pop() !== matchingBrackets[char]) {
//                 return false;
//             }
//         }
//     }

//     return stack.isEmpty();
// }

// console.log(isValidPara('{(}'))


// reverse string
// function reverseString(str) {
//     let reversed = "";
//     let stack = [];
//     for(let char of str) {
//         stack.push(char);
//     }

//     while(stack.length > 0) {
//         reversed += stack.pop();
//     }

//     return reversed;
// }

// console.log(reverseString("hello"))

//palindrome
// function isPalindrome(str) {
//     let stack = [];

//     for(let char of str) {
//         stack.push(char);
//     }

//     for(let char of str) {
//         if(stack.pop() !== char) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(isPalindrome("malayalam"))


// max stack
// class MaxStack {
//     constructor() {
//         this.stack = [];
//         this.maxStack = [];
//     }

//     push(data) {
//         this.stack.push(data);

//         if(this.maxStack.length === 0 || data >= this.getMax()) {
//             this.maxStack.push(data);
//         }
//     }

//     getMax() {
//         return this.maxStack[this.maxStack.length-1];
//     }

//     pop() {
//         if(this.stack.length === 0) return null;

//         const value = this.stack.pop();
//         if(value === this.getMax()) {
//             this.maxStack.pop();
//         }

//         return value;
//     }

//     top() {
//         return this.stack[this.stack.length -1] ?? null;
//     }
// }

// const st = new MaxStack();
// st.push(20)
// st.push(30)
// st.push(40)
// st.pop();
// st.pop();
// console.log(st.getMax())