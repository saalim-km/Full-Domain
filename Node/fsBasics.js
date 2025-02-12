const fs = require("fs");
// console.log("before writing the file")

// fs.writeFileSync("./text.md","ronaldo",(err)=> {
//     if(err) {
//         console.log(err)
//     }
//     console.log("data writed successfully")
// })

// console.log("after writing the file")



// fs.readFile('./text.md','utf-8',(err,data)=> {
//     if(err) {
//         console.log(err)
//         return;
//     }

//     console.log(data);
// })

// fs.rename("./fs.js","fsBasics.js",(err)=> {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("rename successfully");
// })


// fs.unlink("./sample/text.md",(err)=> {
//     if(err) throw err;
//     console.log("file deleted 1")
// })

// fs.unlink("./sample/sample.md",(err)=> {
//     if(err) throw err;
//     console.log("file deleted 2")
// })
// console.log("before the operaation")
fs.rmdir("./sample",(err)=> {
    if(err) throw err;

    console.log("removed file")
})