const express = require('express')
const cors = require("cors");
const app = express();

app.use(cors());
const allRecipies = require("./Data.json");

const port = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send("serveer is running")
})

app.get("/allData",(req,res)=> {
    res.send(allRecipies)
})
app.get("/allData/:id",(req,res)=> {
    const id = req.params.id;
    const item = allRecipies?.find((pd) => pd.id == id);
    res.send({item})
})

app.listen(port, (req,res)=>{
    console.log(`server is running on ${port}`);
})