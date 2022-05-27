const express = require('express');
const path=require("path");

const app=express();

// app.get('',(req,res)=>{
//     console.log("data sent by browser",req.query.name);
//     res.send(`<h1>hello, this is :"${req.query.name} 
//      <a href="/home">Goto home page</a>
//     `);
//     // res.send("Welcome to page : "+req.query.name);
// });

// const dir=path.join(__dirname,"about.html");

// app.get('/Home',(req,res)=>{
//     res.sendFile(dir);
 
// })

// app.listen(4000,()=>{
//     console.log(`server is running on ${4000}`)
// });

const fl=path.join(__dirname);
app.use(express.static(fl));
app.listen(5000);