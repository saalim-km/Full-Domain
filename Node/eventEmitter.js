const EventEmittr = require("events");

const myEmitter = new EventEmittr();

myEmitter.on("message",(data)=> {
    console.log(`Received Data :  ${data}`)
})



myEmitter.emit("message" , "This file is runned by childProcess module");