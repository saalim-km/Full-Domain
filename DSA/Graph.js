class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1,vertex2) {
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        if(!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
        }

        if(!this.adjacencyList[vertex2].includes(vertex1))
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(start){
        const visitedVertex = new Set();
        const result = [];
        const queue = [start];
        while(queue.length) {
            const vertex = queue.shift();
            if(!visitedVertex.has(vertex)) {
                visitedVertex.add(vertex);
                result.push(vertex);
                this.adjacencyList[vertex].forEach((v)=> {
                    if(!visitedVertex.has(v)) {
                        queue.push(v);
                    }
                });
            }
        }
        return result;
    }

    dfs(start) {
        const visitedVertices = new Set();
        const stack = [start];
        const result = [];

        while(stack.length) {
            const vertex = stack.pop();
            if(!visitedVertices.has(vertex)) {
                result.push(vertex);
                visitedVertices.add(vertex);
                this.adjacencyList[vertex].forEach((v)=> {
                    if(!visitedVertices.has(v)) {
                        stack.push(v);
                    }
                })
            }
        }
        return result;
    }
}

const graph = new Graph();


graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addEdge('a','b');
graph.addEdge('b','c');
graph.addEdge('a','c');
graph.addEdge('c','d');
graph.addEdge('d','e');
graph.addEdge('e','d');


console.log(graph.bfs('a'));
console.log(graph.dfs('a'));


console.log(graph)
