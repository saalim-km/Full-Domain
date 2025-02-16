const fs = require("fs");
const http = require("http")
const express = require("express");
const { execPath } = require("process");

const writableStream = fs.createWriteStream("./sample.md",{flags : "a"});
const readableStream = fs.createReadStream("./text.md");

// fs.writeFile("./sample.md","hello world",(err)=> {
//     if(err) throw err;

//     console.log("file created")
// })

// fs.unlink("./text.md",()=> console.log("file deleted"))

// fs.readFile("./text.md","utf8",(err,data)=> {
//     console.log(data)
// })

// writableStream.write('nigga, ');
// writableStream.write('world!\n');
// writableStream.write('world!\n');
// writableStream.end(()=> console.log("completed"))

// const currentDate = new Date().toISOString();
// fs.appendFile("./sample.md",currentDate,(err) => {
//     console.log("date added")
// })

// fs.stat("./sample.md",(err,stats)=> {
//     console.log(stats.)
// })

// readableStream.pipe(writableStream)


// const server = http.createServer();

// server.listen(3000,()=> {
//     console.log("listening")
// })

const app = express()

app.listen(3000,()=>{
    console.log("3000 port listening")
})