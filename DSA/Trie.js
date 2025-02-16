
// class Node {
//     constructor() {
//         this.children = {};
//         this.endOdWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new Node();
//     }

//     insertWord(word) {
//         let current = this.root;
//         for(const char of word) {
//             if(!current.children[char]) {
//                 current.children[char] = new Node();
//             }

//             current = current.children[char];
//         }
//         current.endOdWord = true;
//     }

//     search(word) {
//         let current = this.root;
//         for(const char of word) {
//             if(!current.children[char]) {
//                 return false;
//             }
//             current = current.children[char];
//         }
//         return current.endOdWord;
//     }

//     remove(word) {
//         function removeWordHelper(node,word,depth) {
//             if(!node) {
//                 return false;
//             }

//             if(depth === word.length) {

//                 if(!node.endOdWord) {
//                     return false;
//                 }
                
//                 node.endOdWord = false;
//                 return Object.keys(node.children).length === 0;
//             }

//             const char = word[depth];
//             const shouldBeRemoved = removeWordHelper(
//                 node.children[char],
//                 word,
//                 depth+1
//             )

//             if(shouldBeRemoved) {
//                 delete node.children[char];
//             }

//             return Object.keys(node.children).length === 0;
//         }

//         removeWordHelper(this.root,word,0);
//     }

//     autoComplete(prefix) {
//         const result = [];

//         function dfs(node,path) {
//             if(node.endOdWord) {
//                 result.push(path);
//             }

//             for(const char in node.children) {
//                 dfs(node.children[char] , path+char);
//             }
//         }

//         let current = this.root;
//         for(const char of prefix) {
//             if(!current.children[char]) {
//                 return[];
//             }
//             current = current.children[char];
//         }

//         dfs(current, prefix);
//         return result;
//     }
// }

// const trie = new Trie()
// trie.insertWord("hello")
// trie.insertWord("nigga")
// // trie.remove("hello")
// console.log(trie.autoComplete("h"))
// console.log(trie.search("hello"))