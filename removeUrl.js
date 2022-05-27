const { response } = require('express');
const express = require('express');
const path=require("path");
const app=express();
const fp=path.join(__dirname,"index.html");

app.get('',(req,res)=>{
    res.sendFile(fp);
});

app.get('/about',(req,res)=>{
    res.sendFile(fp);
});

// app.get('/help',(req,res)=>{
//     res.sendFile(fp);
// });

// app.get('*',(req,res)=>{
//     res.send("<h1>404</h1>");
// });

app.get('/index',(req,res)=>{
    const user={
        name:'Samir',
        age:20,
        email:'samaryadav8750@gmail.com'
    };

    res.render('index',{user});
})


app.listen(4000);