import express from "express";
const app = express();


app.get("/divide/:num1/:num2",(req,res)=> {
    console.log(req)
    const {num1 , num2} = req.params;
    const dividend = parseFloat(num1)
    const divisor = parseFloat(num2)

    res.json({result : dividend / divisor });
});



app.get("/divide",(req,res)=> {
    const {num1 , num2} = req.query;
    const divident = parseFloat(num1);
    const divisor = parseFloat(num2);

    if(divisor == 0) {
        return res.json({error : "the divisor should be a valid number !!"});
    }

    res.json({result : divident / divisor});
})

app.listen(3000,()=> {
    console.log("server run aayi 3000 !!")
})