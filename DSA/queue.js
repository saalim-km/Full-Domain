class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}


