import { notEqual } from "assert";

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data)
        if(!this.root) {
            this.root = newNode;
            return;
        }

        let temp = this.root;

        while(true) {
            if(newNode.data == temp.data) {
                return;
            }
            
            if(newNode.data > temp.data) {
                if(!temp.right) {
                    temp.right = newNode;
                    return;
                }else {
                    temp = temp.right;
                }
            }else{
                if(!temp.left) {
                    temp.left = newNode;
                    return;
                }else{
                    temp = temp.left;
                }
            }
        }
    }

    includes(data) {
        if(!this.root) return;

        let curr = this.root;
        while(curr) {
            if(data < curr.data) {
                curr = curr.left;
            }else if(data > curr.data) {
                curr = curr.right;
            }else{
                return true;
            }
        }

        return false; 
    }

    delete(data) {
        this.root = this._deleteNode(this.root,data);
    }

    _deleteNode(node,value) {
        if(!node) return null;

        if(value < node.data) {
            node.left = this._deleteNode(node.left , value);
        }else if(value > node.data) {
            node.right = this._deleteNode(node.right , value);
        }else {

            if(!node.left && !node.right) {
                return null;
            }

            if(!node.left) {
                return node.right;
            }else if(!node.right) {
                return node.left;
            }

            const minLargeNode = this.findMin(node.right);
            node.data = minLargeNode.data;
            this._deleteNode(node.right,minLargeNode.data);
        }
    }

    findMin(node) {
        while(node.left) {
            node = node.left;
        }
        return node;
    }

    bfs() {
        let result = [];
        let queue = [this.root];
        while(queue.length) {
            let current = queue.shift();
            result.push(current.data);

            if(current.left) {
                queue.push(current.left)
            }

            if(queue.right) {
                queue.push(current.right);
            }
        }
        return result;
    }

    inOrder(node = this.root , result = []) {
        if(node) {
            this.inOrder(node.left , result);
            result.push(node.data);
            this.inOrder(node.right , result);
        }
        return result;
    }

    preOrder(node = this.root , result = []) {
        if(node) {
            result.push(node.data);
            this.preOrder(node.left,result);
            this.preOrder(node.right , result);
        }
        return result;
    }

    postOrder(node = this.root , result = []) {
        if(node){
            this.postOrder(node.left , result);
            this.postOrder(node.right , result);
            result.push(node.data);
        }
        return result;
    }

    isBst(node = this.root , min = -Infinity , max = Infinity) {
        if(!node) {
            return true;
        }

        if(node.data <= min || node.data >= max) {
            return false;
        }

        return(
            this.isBst(node.left,min,node.value) &&
            this.isBst(node.right,node.data,max)
        )
    }

    isBalanced() {
        
    }
}