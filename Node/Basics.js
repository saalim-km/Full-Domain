const express = require("express")

const app = express();

app.use((express.urlencoded({extended : true})))

app.get("/",(req,res)=> {
    res.send("welcome")
})

app.get("/user",(req,res)=> {
    res.send(
        `
    <form action="/value" method="post">

    <input name = "data" type = "text"/>
    <button type="submit">submit</button>
    </form>
    `
    )
})

app.post("/value",(req,res)=> {
    console.log(req.body);
})

app.listen(3000,()=> {
    console.log("started")
})